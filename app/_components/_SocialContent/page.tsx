"use client"
import React, { useEffect } from 'react';

const videos = [
  {
    cite: "https://www.tiktok.com/@jeblushmx/video/7369666011093650693",
    videoId: "7369666011093650693",
    description: "Las cejas más naturales que hice en una clienta 😳",
    tags: ["#brows", "#cejas", "#belleza", "#cursos", "#microblading", "#nanobrows"],
    music: "♬ sonido original - jeblushmx - Beauty Trainings",
    musicLink: "https://www.tiktok.com/music/sonido-original-7369666102316256005?refer=embed",
    author: "@jeblushmx",
    authorLink: "https://www.tiktok.com/@jeblushmx?refer=embed"
  },
  {
    cite: "https://www.tiktok.com/@jeblushmx/video/7386313043581439237",
    videoId: "7386313043581439237",
    description: "Una disculpa, promero seguir dando lo mejor de mi 🥹🫶🏼.",
    tags: ["#brows", "#cejas", "#belleza", "#mirada"],
    music: "♬ Si Antes Te Hubiera Conocido - KAROL G",
    musicLink: "https://www.tiktok.com/music/Si-Antes-Te-Hubiera-Conocido-7379170357653112848?refer=embed",
    author: "@jeblushmx",
    authorLink: "https://www.tiktok.com/@jeblushmx?refer=embed"
  },
  {
    cite: "https://www.tiktok.com/@jeblushmx/video/7379678590239116549",
    videoId: "7379678590239116549",
    description: "Acompaña a ver esta historia de cejas 👀",
    tags: ["#brows", "#cejas", "#belleza", "#girls"],
    music: "♬ Bad Bitch (Sped Up Remix) - Lexy Panterra",
    musicLink: "https://www.tiktok.com/music/Bad-Bitch-Sped-Up-Remix-7216379002049693697?refer=embed",
    author: "@jeblushmx",
    authorLink: "https://www.tiktok.com/@jeblushmx?refer=embed"
  },
  {
    cite: "https://www.tiktok.com/@jeblushmx/video/7387870590318791942",
    videoId: "7387870590318791942",
    description: "Al cliente lo que pida 🫡🫡🫡.",
    tags: ["#brows", "#cejas", "#nanobrows", "#diseñoseceja", "#beauty", "#belleza", "#girls", "#antesydespues"],
    music: "♬ sonido original - jeblushmx - Beauty Trainings",
    musicLink: "https://www.tiktok.com/music/sonido-original-7387870700862655238?refer=embed",
    author: "@jeblushmx",
    authorLink: "https://www.tiktok.com/@jeblushmx?refer=embed"
  }
];

const SocialContent = () => {
  useEffect(() => {
    const handlePermissionsPolicyViolation = () => {
      console.error('Permissions policy violation');
    };

    window.addEventListener('securitypolicyviolation', handlePermissionsPolicyViolation);

    return () => {
      window.removeEventListener('securitypolicyviolation', handlePermissionsPolicyViolation);
    };
  }, []);

  return (
    <div>
      {videos.map((video) => (
        <div key={video.videoId} className="tiktok-video">
          <iframe
            src={`https://www.tiktok.com/embed/v2/${video.videoId}?referer=https://example.com&embed_source=embed`}
            frameBorder="0"
            allowFullScreen
            width="100%"
            height="500px"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
          <div className="video-info">
            <h2>{video.description}</h2>
            <p>
              {video.tags.map((tag, index) => (
                <span key={index}>#{tag}</span>
              ))}
            </p>
            <p>
              Music: <a href={video.musicLink}>{video.music}</a>
            </p>
            <p>
              Author: <a href={video.authorLink}>{video.author}</a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SocialContent;

