import DropdownDownload from '@/components/DropdownDownload'
import ThemeImage from '@/components/ThemeImage'
import { totalDownload } from '@/utils/format'
import Link from 'next/link'
import { useData } from 'nextra/data'
import { useEffect, useState } from 'react'

const Hero = () => {
  const { lastVersion, lastRelease, release } = useData()

  return (
    <div className="nextra-wrap-container">
      <div className="mt-10 text-center">
        <Link
          href="https://github.com/janhq/jan/releases"
          target="_blank"
          className="hidden lg:inline-block"
        >
          <div className="inline-flex my-2 py-2 pl-2 pr-4 rounded-lg mb-10 bg-indigo-500 text-white">
            <div className="flex items-center rounded bg-white px-2">
              <span className="font-bold uppercase text-blue-600">new</span>
            </div>
            &nbsp;✨&nbsp; <b>{lastVersion}</b>&nbsp;is now live on
            GitHub.&nbsp;Check it out!
          </div>
        </Link>
        <h1 className="text-6xl lg:text-[80px] !font-normal leading-tight lg:leading-tight mt-2 font-serif">
          Rethink the Computer
        </h1>
        <p className="text-xl -mt-1 leading-relaxed text-black/60 dark:text-white/60">
          Turn your computer into an AI computer
        </p>
        <div className="mb-4 mt-10">
          <DropdownDownload lastRelease={lastRelease} />
        </div>
        <p className="mt-6 text-black/60 dark:text-white/60">
          {totalDownload(release)}+ Downloads | Free & Open Source
        </p>
        <div className="w-4/5 mx-auto mt-10">
          <ThemeImage
            className="object-cover w-full object-center mx-auto h-full relative"
            source={{
              light: '/assets/images/homepage/app-frame-light-fixed.webp',
              dark: '/assets/images/homepage/app-frame-dark-fixed.webp',
            }}
            priority
            alt="App screenshots"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
