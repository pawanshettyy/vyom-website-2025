"use client"

import React, { useState } from 'react'
import { SpaceBackground } from '@/components/SpaceBackground'
import { Button } from '@/components/ui/Button'
import { hermeticaGallery } from '@/data/Gallery'
import { motion } from 'framer-motion'
import Image from 'next/image'

const GalleryPage = () => {
  const [filteredGallery, setFilteredGallery] = useState(hermeticaGallery.previous_nimbus)

  return (
    <section className="min-h-screen bg-black relative overflow-hidden animate-appear">
      <SpaceBackground />

      {/* Filter Section */}
      <div className="container mx-auto px-2 md:px-4 mt-24">
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1
          }}
          transition={{ duration: 0.6 }}
          className='max-md:text-xs relative flex items-center flex-wrap gap-2 md:gap-4 my-6'>
          <Button
            size={"sm"}
            onClick={() => setFilteredGallery(hermeticaGallery.previous_nimbus)}
            className='bg-gradient-to-b from-indigo-400 duration-300 hover:from-indigo-600 to-indigo-700 rounded-full'
          >
            Nimbus 2k24
          </Button>
          <Button
            size={"sm"}
            onClick={() => setFilteredGallery(hermeticaGallery.pre_nimbus)}
            className='bg-gradient-to-b from-indigo-400 hover:from-indigo-600 to-indigo-700 rounded-full'
          >
            Pre-Nimbus
          </Button>
          <Button
            size={"sm"}
            onClick={() => setFilteredGallery(hermeticaGallery.hermetica_day)}
            className='bg-gradient-to-b from-indigo-400 hover:from-indigo-600 to-indigo-700 rounded-full'
          >
            Hermetica Day
          </Button>
          {/* <Button */}
          {/*   size={"sm"} */}
          {/*   onClick={() => setFilteredGallery(hermeticaGallery.workshops)} */}
          {/*   className='bg-gradient-to-b from-indigo-400 hover:from-indigo-600 to-indigo-700 rounded-full' */}
          {/* > */}
          {/*   Workshops */}
          {/* </Button> */}
          <Button
            size={"sm"}
            onClick={() => setFilteredGallery(hermeticaGallery.awareness)}
            className='bg-gradient-to-b from-indigo-400 hover:from-indigo-600 to-indigo-700 rounded-full'
          >
            Awareness
          </Button>
        </motion.div>
      </div>

      {
        filteredGallery.length >= 1 ? (
          <div className="relative px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center max-w-7xl mx-auto">
            {filteredGallery?.map((image: any) => (
              <motion.div
                key={image}
                className='aspect-[5/3] bg-gray-600/60 rounded-2xl'
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={image}
                  alt='hermetida day'
                  width={500}
                  height={500}
                  priority
                  className='h-full rounded-xl hover:scale-105 duration-300'
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className='flex justify-center items-center'>
            <h2 className='md:text-7xl text-4xl text-center mt-[30vh] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 inline-block via-purple-300 to-indigo-300'>
              Coming soon...
            </h2>
          </div>
        )
      }
    </section >
  )
}

export default GalleryPage
