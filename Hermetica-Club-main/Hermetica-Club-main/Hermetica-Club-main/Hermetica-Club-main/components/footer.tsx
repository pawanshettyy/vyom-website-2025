"use client"

import { motion } from "framer-motion"
import { Instagram, Linkedin, Youtube } from "lucide-react"
import { Button } from "./ui/Button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { FormEvent, useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { addSuggestions } from "@/actions/addSuggestion"

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/teamhermetica", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/teamhermetica/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@teamhermetica4195/", label: "YouTube" },
]

const workLinks = [
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Guest Lectures",
    link: "/guest-lectures",
  },
  {
    name: "Team",
    link: "/members",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "About Us",
    link: "/about",
  },
]

export default function Footer() {
  const [name, setName] = useState("")
  const [suggestion, setSuggestion] = useState("")
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (!name && !suggestion) {
      toast({
        title: "All Fields Required",
        description: "Please provide all the information !",
        variant: "destructive"
      })
      return
    }
    const formData = {
      name,
      suggestion
    }
    try {
      await addSuggestions(formData)
      toast({
        title: "Send Successfully",
        description: "We have received your suggestion !"
      })
    } catch (e) {
      toast({
        title: "Error",
        description: "Unexpected Error occured. Try again !",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }

  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-black via-indigo-900/30 bg-opacity-30 to-black">
      {/* Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 text-gray-400">
          {/* Team Info */}
          <div>
            <motion.h2
              className="text-2xl font-bold mb-4 text-indigo-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Hermetica</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              "We React to What Matters!" Team Hermetica, was established as the departmental team of Chemical Engineering, at the National Institute of Technology, Hamirpur in the year 2014.
            </motion.p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center hover:bg-purple-600 transition-colors hover:scale-110 duration-200"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Team Work */}
          <div>
            <motion.h2
              className="text-2xl font-bold mb-4 text-indigo-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Work</span>
            </motion.h2>
            <ul className="space-y-2">
              {workLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.link}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <motion.h2
              className="text-2xl font-bold mb-4 text-indigo-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Us</span>
            </motion.h2>
            <motion.form
              onSubmit={onSubmitHandler}
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Input
                type="text"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500"
              />
              <Textarea
                placeholder="Suggestions"
                onChange={(e) => setSuggestion(e.target.value)}
                className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500 min-h-[100px]"
              />
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >

                {loading ? "Sending..." : "Send"}
              </Button>
            </motion.form>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>Copyright © 2025 Hermetica All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer >
  )
}

