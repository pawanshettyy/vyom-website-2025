"use client"

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { SpaceBackground } from '@/components/SpaceBackground'
import { Button } from '@/components/ui/Button'
import { members } from '@/data/Members'
import MemberCard from '@/components/MemberCard'

const MembersPage = () => {
  const finalYear = members.filter(member => member.position === "Final Year Member")
  const [filteredMembers, setFilteredMembers] = useState(finalYear)

  const filterHandler = (position: string) => {
    const filter = members.filter(member => member.position === position)
    setFilteredMembers(filter)
  }

  return (
    <section className="min-h-screen bg-black relative overflow-hidden animate-appear">
      <SpaceBackground />

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1
          }}
          transition={{ duration: 0.6 }}
          className='text-sm relative flex items-center flex-wrap gap-2 md:gap-4 my-6'
        >
          <Button
            onClick={() => filterHandler("Final Year Member")}
            className='text-sm bg-gradient-to-b from-indigo-400 duration-300 hover:from-indigo-600 to-indigo-700 rounded-full'
          >
            Final Year
          </Button>
          <Button
            onClick={() => filterHandler("Coordinator")}
            className='bg-gradient-to-b from-indigo-400 hover:from-indigo-600 to-indigo-700 rounded-full'
          >
            3rd Year
          </Button>
          <Button
            onClick={() => filterHandler("Executive Member")}
            className='bg-gradient-to-b from-indigo-400 hover:from-indigo-600 to-indigo-700 rounded-full'
          >
            2nd Year
          </Button>
          <Button
            onClick={() => filterHandler("Volunteer Member")}
            className='bg-gradient-to-b from-indigo-400 hover:from-indigo-600 to-indigo-700 rounded-full'
          >
            1st Year
          </Button>
        </motion.div>
      </div>

      {/* Members List */}
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center max-w-7xl mx-auto">
        {filteredMembers.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </section >
  )
}

export default MembersPage
