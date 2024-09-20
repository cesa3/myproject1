"use client"
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import React from 'react';
import Marquee from "react-fast-marquee";

export default function Home() {

  const images = [
    { src: "/resource/FB_IMG_1725595798028.jpg", alt: "shack dunking with shark" },
    { src: "/resource/IMG_4009.JPG", alt: "toomtam(dog) wearing hat" },
    { src: "/resource/IMG_4100.PNG", alt: "cat" },
    { src: "/resource/FB_IMG_1726246680292.jpg", alt: "poking a cat" },
    { src: "/resource/IMG_4062.JPG", alt: "fuu holding croisant" },
    { src: "/resource/meow.jpeg", alt: "freaky ahh cat" },
    { src: "/resource/_.jpeg", alt: "freaky ahh cat" },
  ];

  return (
    <div className="flex flex-col justify-items-center min-h-screen max-w-screen gap-10 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8">
        <span className="text-3xl font-semibold">Hello World, I&apos;m Caesar</span>
        <Marquee autoFill={true} gradient={true}>
          <div className="flex gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative w-60 h-60">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </Marquee>
        <p>I calculate RRE</p>

      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <a
          href="https://github.com/cesa3"
          target="_blank"
          className="flex items-center gap-2 text-xl"
          rel="noopener noreferrer"
        >
          <FaGithub className="inline" />
          <span>github</span>
        </a>
      </footer>
    </div>
  );
}
