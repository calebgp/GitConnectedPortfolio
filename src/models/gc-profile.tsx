
export interface GCProfile {
  basics: Basics;
  skills: Skill[];
  projects: Project[];
  work: Work[];
  publications: any[];
  education: any[];
  volunteer: any[];
  awards: any[];
  languages: Language[];
  interests: any[];
  references: any[];
  certificates: Certificate[];
  meta: Meta;
}

export interface Work {
  name: string;
  position: string;
  url: string;
  startDate: string;
  summary: string;
  highlights: string[];
  isCurrentRole: boolean;
  start: {
    year: number;
    month: number;
  };
}

export interface Certificate {
  name: string;
  date: string;
  url: string;
  issuer: string;
  summary: string;
}


export interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: any;
  summary: string;
  profiles: Profile[];
  headline: string;
  blog: any;
  yearsOfExperience: any;
  username: string;
  locationAsString: string;
  region: string;
  karma: number;
  id: string;
  followers: number;
  following: number;
  picture: string;
  website: any;
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}
export interface Project {
  name: string;
  description: string;
  url: string;
  highlights: any[];
  keywords: any[];
  roles: string;
  startDate: string;
  endDate: string;
  entity: string;
  type: string;
  displayName: string;
  website: string;
  summary: string;
  primaryLanguage: string;
  languages: string[];
  libraries: string[];
  githubUrl: string;
  repositoryUrl: string;
  start: Start;
  end: End;
  images: { [key: string]: Image };
  videos: any[];
}

export interface Skill {
  name: string;
  level: string;
  keywords: string[];
  rating: number;
  yearsOfExperience: number;
}



export interface Start {
  year: number;
  month: number;
  day: number;
}

export interface End {
  year: number;
  month: number;
  day: number;
}

export interface Image {
  resolutions: Resolutions;
}

export interface Resolutions {
  micro: Micro;
  thumbnail: Thumbnail;
  mobile: Mobile;
  desktop: Desktop;
}

export interface Micro {
  url: string;
  size: number;
  width: number;
  height: number;
}

export interface Thumbnail {
  url: string;
  size: number;
  width: number;
  height: number;
}

export interface Mobile {
  url: string;
  size: number;
  width: number;
  height: number;
}

export interface Desktop {
  url: string;
  size: number;
  width: number;
  height: number;
}

export interface Language {
  language: string;
  fluency: string;
}

export interface Meta {
  note: string;
  canonical: string;
  version: string;
  lastModified: string;
}

export const mapGCProfileToModel = (gcProfile: any): GCProfile => {
  return {
    basics: {
      name: gcProfile.basics.name,
      label: gcProfile.basics.label,
      image: gcProfile.basics.image,
      email: gcProfile.basics.email,
      phone: gcProfile.basics.phone,
      url: gcProfile.basics.url,
      summary: gcProfile.basics.summary,
      profiles: gcProfile.basics.profiles.map((profile: any) => ({
        network: profile.network,
        username: profile.username,
        url: profile.url,
      })),
      headline: gcProfile.basics.headline,
      blog: gcProfile.basics.blog,
      yearsOfExperience: gcProfile.basics.yearsOfExperience,
      username: gcProfile.basics.username,
      locationAsString: gcProfile.basics.locationAsString,
      region: gcProfile.basics.region,
      karma: gcProfile.basics.karma,
      id: gcProfile.basics.id,
      followers: gcProfile.basics.followers,
      following: gcProfile.basics.following,
      picture: gcProfile.basics.picture,
      website: gcProfile.basics.website,
    },
    skills: gcProfile.skills.map((skill: any) => ({
      name: skill.name,
      level: skill.level,
      keywords: skill.keywords,
      rating: skill.rating,
      yearsOfExperience: skill.yearsOfExperience,
    })),
    projects: gcProfile.projects.map((project: any) => ({
      name: project.name,
      description: project.description,
      url: project.url,
      highlights: project.highlights,
      keywords: project.keywords,
      roles: project.roles,
      startDate: project.startDate,
      endDate: project.endDate,
      entity: project.entity,
      type: project.type,
      displayName: project.displayName,
      website: project.website,
      summary: project.summary,
      primaryLanguage: project.primaryLanguage,
      languages: project.languages,
      libraries: project.libraries,
      githubUrl: project.githubUrl,
      repositoryUrl: project.repositoryUrl,
      start: {
        year: project.start.year,
        month: project.start.month,
        day: project.start.day,
      },
      end: {
        year: project.end.year,
        month: project.end.month,
        day: project.end.day,
      },
      images: project.images ? Object.fromEntries(
        Object.entries(project.images).map(([key, image]: [string, any]) => [
          key,
          {
            resolutions: {
              micro: {
                url: image.resolutions.micro.url,
                size: image.resolutions.micro.size,
                width: image.resolutions.micro.width,
                height: image.resolutions.micro.height,
              },
              thumbnail: {
                url: image.resolutions.thumbnail.url,
                size: image.resolutions.thumbnail.size,
                width: image.resolutions.thumbnail.width,
                height: image.resolutions.thumbnail.height,
              },
              mobile: {
                url: image.resolutions.mobile.url,
                size: image.resolutions.mobile.size,
                width: image.resolutions.mobile.width,
                height: image.resolutions.mobile.height,
              },
              desktop: {
                url: image.resolutions.desktop.url,
                size: image.resolutions.desktop.size,
                width: image.resolutions.desktop.width,
                height: image.resolutions.desktop.height,
              },
            },
          },
        ])
      ) : {},
      videos: project.videos,
    })),
    work: gcProfile.work,
    publications: gcProfile.publications,
    education: gcProfile.education,
    volunteer: gcProfile.volunteer,
    awards: gcProfile.awards,
    languages: gcProfile.languages.map((language: any) => ({
      language: language.language,
      fluency: language.fluency,
    })),
    interests: gcProfile.interests,
    references: gcProfile.references,
    certificates: gcProfile.certificates,
    meta: {
      note: gcProfile.meta.note,
      canonical: gcProfile.meta.canonical,
      version: gcProfile.meta.version,
      lastModified: gcProfile.meta.lastModified,
    },
  };
};
