"use client"

import { motion } from "framer-motion"
import { AnimatedCircle } from "./AnimatedCircle"
import { AnimatedTitle } from "./AnimatedTitle"
import { signIn, useSession } from "next-auth/react"
import Image from "next/image"
import { Button } from "../ui/Button"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import AnimatedGradientText from "../ui/animated-gradient"
import Particles from "./Stars"

const HeroSection = () => {
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSignIn = async () => {
    setLoading(true)
    try {
      await signIn("google")
    } catch (SignInError) {
      console.log("Error during signin: ", SignInError)
      toast({
        title: "Error !",
        description: "Failed to signin."
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative h-screen bg-black overflow-hidden flex items-center">
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <AnimatedCircle />

      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        className="md:hidden relative z-10 max-md:px-6 flex flex-col justify-center items-center"
      >
        <AnimatedGradientText>
          We React to What Matters!
        </AnimatedGradientText>

        {/* Description */}
        <div className="md:hidden my-16 max-w-3xl mx-auto text-center">
          <p className="text-gray-300 text-lg">
            Team Hermetica, established in 2014, represents the Department of Chemical Engineering in the annual tech-fest NIMBUS at National Institute of Technology, Hamirpur.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-4 max-w-5xl mx-auto relative">
          {/* Card 2 */}
          <div className="bg-gradient-to-r from-indigo-700/30 to-purple-900/30 rounded-3xl p-8 flex flex-col items-center justify-center transform transition-transform hover:scale-105 overflow-hidden">
            {session?.user ? (
              <>
                <p className="text-2xl text-white font-bold mb-4">
                  Welcome,
                </p>
                <Button
                  className="bg-gradient-to-tr from-indigo-600 via-purple-700 to-indigo-600 text-white hover:bg-gray-800 text-2xl px-8 py-6 rounded-full group relative overflow-hidden"
                >
                  <span className="relative z-10">
                    {session?.user?.name}
                  </span>
                  <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform" />
                </Button>
              </>
            ) : (
              <>
                <p className="text-2xl font-bold mb-4 text-white">
                  Join Our Team
                </p>
                <Button
                  className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-full group relative overflow-hidden"
                  onClick={handleSignIn}
                  disabled={loading}
                >
                  <span className="flex gap-2 items-center relative z-10">
                    {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                    SIGN UP NOW
                  </span>
                  <div className="absolute inset-0 bg-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform" />
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="max-md:hidden mt-16 max-w-3xl mx-auto text-center">
          <p className="text-gray-300 text-lg">
            Team Hermetica, established in 2014, represents the Department of Chemical Engineering in the annual tech-fest NIMBUS at National Institute of Technology, Hamirpur.
          </p>
        </div>
      </motion.div>


      {/* Desktop */}
      <div className="max-md:hidden container relative z-10 mt-16 mx-auto">
        <div className="mx-auto text-center md:space-y-12 space-y-36">
          <motion.h1
            initial={{ translateY: 100, scale: 0.8, opacity: 0.5 }}
            animate={{ translateY: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="relative text-3xl md:text-5xl font-semibold inline-block text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-300 bg-clip-text">
            <AnimatedGradientText>
              We React to What Matters!
            </AnimatedGradientText>
          </motion.h1>
          <AnimatedTitle />
          <div className="flex flex-col gap-6 justify-center items-center">
            <motion.p
              className="text-gray-300 md:font-semibold md:text-xl md:px-40 lg:px-72"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Team Hermetica, established in 2014, represents the Department of Chemical Engineering in the annual tech-fest NIMBUS at National Institute of Technology, Hamirpur.
            </motion.p>
            {session?.user && (
              <motion.div
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex justify-center items-center text-xl">
                <button className="rounded-xl text-white py-2 px-6 flex flex-col justify-center items-center gap-2 group">
                  Welcome,{""}
                  <div className="relative px-6 font-semibold py-2 flex justify-center items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-indigo-400 to-pink-400 overflow-hidden">
                    <Image
                      src={session?.user?.image as string}
                      width={200}
                      height={200}
                      alt="Profile Image"
                      className="rounded-full w-6 h-6 z-20"
                    />
                    <p className="z-20">
                      {session?.user?.name}
                    </p>
                    <div className="absolute inset-0 bg-indigo-600 transform translate-y-full group-hover:translate-y-0 transition-transform" />
                  </div>
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>

  )
}

export default HeroSection
