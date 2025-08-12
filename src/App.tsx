import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import { SkeletonTheme } from 'react-loading-skeleton'
import { useEffect, useState } from 'react'
import { GCProfile, mapGCProfileToModel } from './models/gc-profile'
import { ProfileContext } from './main'
import { useTranslation } from 'react-i18next'

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const PORTFOLIO_URL = import.meta.env.VITE_PORTFOLIO_URL;

async function batchTranslate(texts: string[], targetLang: string): Promise<string[]> {
    if (!texts.length || targetLang === 'en') return texts

    const BATCH_SIZE = 128
    const results: string[] = []

    for (let i = 0; i < texts.length; i += BATCH_SIZE) {
        const chunk = texts.slice(i, i + BATCH_SIZE)

        const res = await fetch(
            `https://translation.googleapis.com/language/translate/v2?key=${GOOGLE_API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    q: chunk,
                    target: targetLang,
                    format: 'text'
                })
            }
        )

        const data = await res.json()
        results.push(...(data.data?.translations?.map((t: any) => t.translatedText) || chunk))
    }

    return results
}

async function translateProfile(profile: GCProfile, targetLang: string): Promise<GCProfile> {
    const stringMap: string[] = []
    const pathMap: { path: (string | number)[] }[] = []
    const excludedPaths = [
        ['skills', '*', 'name'],         // Nome das skills
        ['projects', '*', 'name'],       // Nome dos projetos
        ['projects', '*', 'displayName'] // Display name dos projetos
    ]

    function isExcluded(path: (string | number)[]) {
        return excludedPaths.some(pattern =>
            pattern.length === path.length &&
            pattern.every((p, i) => p === '*' || p === path[i])
        )
    }

    function collectStrings(obj: any, path: (string | number)[] = []) {
        if (typeof obj === 'string') {
            if (!isExcluded(path)) {
                stringMap.push(obj)
                pathMap.push({ path })
            }
        } else if (Array.isArray(obj)) {
            obj.forEach((item, i) => collectStrings(item, [...path, i]))
        } else if (obj && typeof obj === 'object') {
            Object.keys(obj).forEach(k => collectStrings(obj[k], [...path, k]))
        }
    }

    collectStrings(profile)

    const translatedStrings = await batchTranslate(stringMap, targetLang)

    const newProfile = structuredClone(profile) as any
    pathMap.forEach((entry, idx) => {
        let target: any = newProfile
        const lastKey = entry.path[entry.path.length - 1]
        for (let i = 0; i < entry.path.length - 1; i++) {
            target = target[entry.path[i]]
        }
        target[lastKey] = translatedStrings[idx]
    })

    return newProfile
}

function App() {
    const [profile, setProfile] = useState<GCProfile>()
    const { i18n } = useTranslation()

    useEffect(() => {
        (async () => {
            const cacheKey = `profile_${i18n.language}`;
            const CACHE_DURATION = import.meta.env.VITE_LANGUAGE_CACHE_DURATION ?? 6 * 60 * 60 * 1000; // 6 horas em ms

            const cachedData = localStorage.getItem(cacheKey);

            if (cachedData) {
                const { data, timestamp } = JSON.parse(cachedData);
                const isExpired = Date.now() - timestamp > CACHE_DURATION;

                if (!isExpired) {
                    setProfile(data);
                    return; // Usa o cache e evita nova requisição
                }
            }

            const response = await fetch(PORTFOLIO_URL);
            const rawProfile = await response.json();
            const mapped = mapGCProfileToModel(rawProfile);
            const translated = await translateProfile(mapped, i18n.language);

            localStorage.setItem(cacheKey, JSON.stringify({
                data: translated,
                timestamp: Date.now()
            }));

            setProfile(translated);
        })();
    }, [i18n.language]);

    return (
        <ProfileContext.Provider value={profile}>
            <div className="container">
                <NavBar profiles={profile?.basics.profiles} />
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <div id="detail">
                        <Outlet />
                    </div>
                </SkeletonTheme>
            </div>
        </ProfileContext.Provider>
    )
}

export default App
