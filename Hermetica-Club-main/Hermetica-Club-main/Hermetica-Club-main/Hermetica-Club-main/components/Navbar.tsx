"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FlaskRoundIcon as Flask, Instagram, Linkedin, Loader2, LogOut, Menu, Plus, Youtube } from "lucide-react";
import Image from "next/image";
import logo from "../public/hermetica-logo.jpg";
import { signIn, signOut, useSession } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ShimmerButton } from "./magicui/shimmer-button";

export function Navbar() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signIn("google");
    } catch (SignInError) {
      console.log("Error during signin: ", SignInError);
      toast({
        title: "Error !",
        description: "Failed to signin.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setLogoutLoading(true);
    try {
      await signOut();
      toast({
        title: "Logout Success !",
        description: "You are logged out successfully",
      });
    } catch (SignOutError) {
      console.log("Error during signout: ", SignOutError);
      toast({
        title: "Error !",
        description: "Unexpected error during signout.",
      });
    } finally {
      setLogoutLoading(false);
    }
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/teamhermetica", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/teamhermetica/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@teamhermetica4195/", label: "YouTube" },
  ];

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { link: "/", name: "Home" },
    { link: "/projects", name: "Projects" },
    { link: "/events", name: "Events" },
    { link: "/members", name: "Team" },
    { link: "/gallery", name: "Gallery" },
    { link: "/guest-lectures", name: "Guest Lectures" },
    { link: "/about", name: "About Us" },
  ];

  const lineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  };

  const line2Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  };

  const navigateToInstagram = () => {
    window.location.href = "https://instagram.com/teamhermetica"
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`inset-0 left-0 top-0 min-h-screen min-w-screen bg-black/10 fixed z-50 gap-4 p-6 shadow-lg ${isOpen ? "" : "hidden"}`}
        onClick={toggleNavbar}
      />
      <motion.div
        initial={{ translateX: "-300px" }}
        animate={{ translateX: isOpen ? "0px" : "-300px" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="inset-y-0 left-0 h-screen w-[300px] bg-indigo-800/30 backdrop-blur-xl fixed z-50 gap-4 p-6 shadow-lg"
      >
        <div className="h-full flex flex-col gap-10 justify-center items-center text-white">
          {links.map((link, index) => (
            <motion.div
              key={link.link}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: isOpen ? 0 : -30, opacity: isOpen ? 1 : 0 }}
              transition={{ ease: 'easeIn', delay: 0.2 }}
              className="group"
              onClick={toggleNavbar}
            >
              <Link
                href={link.link}
                className="text-lg hover:border-b-2 group-hover:border-b-indigo-600 border-transparent font-medium group-hover:text-purple-300 transition-colors text-center py-[3px] duration-300"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <div className="flex gap-8 mt-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full group font-bold flex items-center justify-center hover:scale-125 duration-300"
              >
                <social.icon className="w-10 h-10 group-hover:text-indigo-600 duration-300 text-white" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.header
        initial={{ translateY: -100, scaleX: 0.8, opacity: 40 }}
        animate={{ translateY: 0, opacity: 100, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 flex justify-between gap-2 z-50 py-2 px-4"
      >
        <nav className="flex items-center justify-between md:px-3 px-1 md:py-2 text-black backdrop-blur-md rounded-full">
          <button
            onClick={toggleNavbar}
            className="z-[1000] bg- relative w-10 h-10 focus:outline-none bg-indigo-600 rounded-full"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              className="absolute w-6 h-[2.5px] bg-white left-2 top-3 rounded-full"
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={lineVariants}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute w-8 h-[2.5px] bg-white left-1 rounded-full top-[18.7px]"
              initial="closed"
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute w-6 h-[2.5px] bg-white left-2 bottom-3 rounded-full"
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={line2Variants}
              transition={{ duration: 0.3 }}
            />
          </button>
        </nav>
        <ShimmerButton onClick={navigateToInstagram}>
          <nav className="flex hover:scale-105 duration-300 hover:bg-black/60 items-center justify-between md:px-8 py-2 bg-black/40 text-black backdrop-blur-md rounded-full">
            <div className="flex items-center gap-2">
              <Image src={logo} alt="Hermetica Logo" width={100} height={100} className="w-5 h-5 rounded-full" />
              <span className=" md:text-xl font-bold text-white">Team Hermetica</span>
            </div>
          </nav>
        </ShimmerButton>

        <nav className="flex items-center justify-between px-1 md:px-3 md:py-2 bg-black/40 text-black backdrop-blur-md rounded-full">
          {session?.user ? (
            <Button
              className="bg-indigo-700 text-white hover:bg-gray-800 px-6 md:py-5 py-3 rounded-full group relative overflow-hidden"
              onClick={handleSignOut}
              disabled={logoutLoading}
            >
              <span className="relative z-10 flex gap-2">
                <Image
                  src={session.user.image as string}
                  alt={session.user.name as string}
                  width={100}
                  height={100}
                  className="w-5 h-5 rounded-full"
                />
                <LogOut className="h-4 w-4" />
              </span>
              <div className="absolute inset-0 bg-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform" />
            </Button>
          ) : (
            <Button
              className="bg-indigo-600 text-white hover:bg-gray-800 px-4 md:px-6 md:py-5 py-3 rounded-full group relative overflow-hidden"
              disabled={loading}
              onClick={handleSignIn}
            >
              <span className="relative z-10 flex gap-2">
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                SIGN IN
              </span>
              <div className="absolute inset-0 bg-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform" />
            </Button>
          )}
        </nav>
      </motion.header>
    </>
  );
}
