"use client"
import { SpaceBackground } from '@/components/SpaceBackground'
import React from 'react'
import { GuestLectures } from '@/data/GuestLectures'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { Star } from 'lucide-react'

const GuestLecturesPage = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden animate-appear">
      <SpaceBackground />

      {/* Search Section */}
      <div className="container mx-auto px-4 py-8 mt-12">
        {/* <div className='relative flex items-center gap-4 my-6'> */}
        {/* </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GuestLectures.map((project) => (
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Card className="min-h-96 group relative overflow-hidden rounded-xl border-transparent bg-gradient-to-tr from-gray-900 via-indigo-900/50 to-gray-900 bg-opacity-20 transition-all duration-300">
                <button>
                  {/* Project Image */}
                  <div className="aspect-square overflow-hidden w-full">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  {/* Project Info */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <StarRating
                        rating={5}
                      />
                      <span className="text-gray-500 text-sm">
                        (0)
                      </span>
                    </div>
                    <h3 className="text-gray-300 text-start text-lg font-medium line-clamp-2 group-hover:text-purple-600 transition-colors">
                      {project?.name}
                    </h3>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300" />
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div >
  )
}

export default GuestLecturesPage

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
            }`}
        />
      ))}
    </div>
  )
}

