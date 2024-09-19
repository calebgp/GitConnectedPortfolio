
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import { SkeletonTheme } from 'react-loading-skeleton'
import { useEffect, useState } from 'react';
import { GCProfile, mapGCProfileToModel } from './models/gc-profile';
import { ProfileContext } from './main';


function App() {

  const [profile, setProfile] = useState<GCProfile>();
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/calebgp')
      .then((response) => response.json())
      .then((data) => {
        setProfile(mapGCProfileToModel(data));
      });
  }, []);


  return (
    <ProfileContext.Provider value={profile}>
      <div className='container'>
        <NavBar profiles={profile?.basics.profiles}/>
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
