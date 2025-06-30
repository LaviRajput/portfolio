"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[30px] text-white font-semibold">
            Transforming Ideas into Powerful Web Experiences
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Web Experiences
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            With a strong foundation in React, Next.js, Node.js, Express, MySQL, and TypeScript,
            I specialize in building modern, high-performance web applications. From custom WordPress themes 
            to full-stack MERN apps, I love turning complex problems into elegant solutions. Passionate MERN Stack,
            WordPress , skilled in creating scalable backends,interactive UIs, and seamless digital experiences.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white w-full min-w-[180px] max-w-[200px] flex items-center justify-center gap-2"
              px-8 py-3
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white w-full min-w-[180px] max-w-[200px] flex items-center justify-center gap-2"
              px-8 py-3
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white w-full min-w-[180px] max-w-[200px] flex items-center justify-center gap-2"
              px-8 py-3
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contact me
            </Link>
            <a
              href="/Lavi_Resume.pdf"
              download
              className="rounded-[20px] group relative bg-green-500 hover:bg-green-400 px-5 py-3 text-lg text-white w-full min-w-[180px] max-w-[200px] flex items-center justify-center gap-2"
              px-8 py-3
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4m-9 9h10" />
              </svg>
              Resume
            </a>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white w-full min-w-[180px] max-w-[200px] flex items-center justify-center gap-2"
            px-8 py-3
        >
          Learn more
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white w-full min-w-[180px] max-w-[200px] flex items-center justify-center gap-2"
            px-8 py-3
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white w-full min-w-[180px] max-w-[200px] flex items-center justify-center gap-2"
            px-8 py-3
        >
          Contact me
        </Link>
        <a
          href="/Lavi_Resume.pdf"
          download
          className="rounded-[20px] group bg-green-500 px-5 py-3 text-lg text-white w-full min-w-[180px] max-w-[200px] flex items-center justify-center gap-2"
            px-8 py-3
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4m-9 9h10" />
          </svg>
          Download Resume
        </a>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/Ani.webp"
          alt="horse"
          height={375}
          width={470}
          className="absolute right- top-60 rounded-[20px] shadow-lg shadow-black/50 transition-transform hover:scale-105"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
