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
    // Load the TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script if component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='flex pt-10'>
      {videos.map((video, index) => (
        <blockquote
          key={index}
          className="tiktok-embed"
          cite={video.cite}
          data-video-id={video.videoId}
          style={{ maxWidth: '605px', minWidth: '325px' }}
        >
          <section>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title={video.author}
              href={video.authorLink}
            >
              {video.author}
            </a>
            {video.description}
            {video.tags.map((tag, tagIndex) => (
              <a
                key={tagIndex}
                title={tag.slice(1)}
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.tiktok.com/tag/${tag.slice(1)}?refer=embed`}
              >
                {tag}
              </a>
            ))}
            <a
              target="_blank"
              rel="noopener noreferrer"
              title={video.music}
              href={video.musicLink}
            >
              {video.music}
            </a>
          </section>
        </blockquote>
      ))}
    </div>
  );
};

export default SocialContent;

