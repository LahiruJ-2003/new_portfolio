// "use client"

// import { motion } from "framer-motion"
// import { useState, useEffect } from "react"

// const navLinks = [
//   { label: "Work", href: "#work" },
//   { label: "About", href: "#about" },
//   { label: "Contact", href: "#contact" },
// ]

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isVisible, setIsVisible] = useState(true)
//   const [lastScrollY, setLastScrollY] = useState(0)
//   const [isMounted, setIsMounted] = useState(false)

//   useEffect(() => {
//     // Mark component as mounted on client
//     setIsMounted(true)
//     setLastScrollY(window.scrollY)

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY
//       const scrollDirection = currentScrollY > lastScrollY ? "down" : "up"

//       // Show navbar when scrolling up or at the top
//       if (scrollDirection === "up" || currentScrollY < 50) {
//         setIsVisible(true)
//       } else if (scrollDirection === "down" && currentScrollY > 100) {
//         // Hide navbar when scrolling down past 100px
//         setIsVisible(false)
//       }

//       setLastScrollY(currentScrollY)
//     }

//     window.addEventListener("scroll", handleScroll, { passive: true })
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <motion.header
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: isMounted && !isVisible ? -120 : 0, opacity: isMounted && !isVisible ? 0 : 1 }}
//       transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//       className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 sm:py-5 lg:px-12"
//     >
//       <nav className="mx-auto flex max-w-7xl items-center justify-between">
//         <a href="#" className="group flex items-center gap-2">
//           <motion.div
//             whileHover={{ rotate: 90 }}
//             transition={{ duration: 0.3 }}
//             className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary"
//           >
//             <span className="text-lg font-bold text-primary-foreground">A</span>
//           </motion.div>
//           <span className="text-lg font-medium text-foreground">Lahiru Jayasinghe</span>
//         </a>

//         {/* Desktop nav */}
//         <div className="hidden items-center gap-1 md:flex">
//           {navLinks.map((link) => (
//             <motion.a
//               key={link.label}
//               href={link.href}
//               whileHover={{ y: -2 }}
//               className="relative rounded-lg px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
//             >
//               {link.label}
//             </motion.a>
//           ))}
//           <motion.a
//             href="/cv.pdf"
//             download
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
//           >
//             Download CV
//           </motion.a>
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="ml-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground"
//           >
//             Get in Touch
//           </motion.a>
//         </div>

//         {/* Mobile toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
//           aria-label="Toggle navigation menu"
//         >
//           <motion.span
//             animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
//             className="block h-0.5 w-6 bg-foreground"
//           />
//           <motion.span
//             animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
//             className="block h-0.5 w-6 bg-foreground"
//           />
//           <motion.span
//             animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
//             className="block h-0.5 w-6 bg-foreground"
//           />
//         </button>

//         {/* Mobile menu */}
//         <motion.div
//           initial={false}
//           animate={isOpen ? { x: 0 } : { x: "100%" }}
//           transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//           className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background md:hidden"
//         >
//           {navLinks.map((link, i) => (
//             <motion.a
//               key={link.label}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               initial={{ opacity: 0, y: 20 }}
//               animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
//               className="text-4xl font-medium text-foreground"
//             >
//               {link.label}
//             </motion.a>
//           ))}
//           <motion.a
//             href="/cv.pdf"
//             download
//             onClick={() => setIsOpen(false)}
//             initial={{ opacity: 0, y: 20 }}
//             animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ delay: 0.5, duration: 0.5 }}
//             className="rounded-full border border-border px-8 py-3 text-lg font-medium text-foreground"
//           >
//             Download CV
//           </motion.a>
//           <motion.a
//             href="#contact"
//             onClick={() => setIsOpen(false)}
//             initial={{ opacity: 0, y: 20 }}
//             animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ delay: 0.6, duration: 0.5 }}
//             className="rounded-full bg-primary px-8 py-3 text-lg font-medium text-primary-foreground"
//           >
//             Get in Touch
//           </motion.a>
//         </motion.div>
//       </nav>
//     </motion.header>
//   )
// }
"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image" // Added Next.js Image import

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setLastScrollY(window.scrollY)

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDirection = currentScrollY > lastScrollY ? "down" : "up"

      if (scrollDirection === "up" || currentScrollY < 50) {
        setIsVisible(true)
      } else if (scrollDirection === "down" && currentScrollY > 100) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isMounted && !isVisible ? -120 : 0, opacity: isMounted && !isVisible ? 0 : 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 sm:py-5 lg:px-12"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#" className="group flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 90 }} // Note: you might want to change this to 'scale: 1.1' if 90 degrees looks weird with your specific logo!
            transition={{ duration: 0.3 }}
            className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg"
          >
            {/* Replaced 'A' with the Image component */}
            <Image 
              src="/logo.png" // Make sure to put your logo file in the 'public' folder
              alt="Lahiru Jayasinghe Logo" 
              width={40} 
              height={40} 
              className="h-full w-full object-contain" 
            />
          </motion.div>
          <span className="text-lg font-medium text-foreground">Lahiru Jayasinghe</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ y: -2 }}
              className="relative rounded-lg px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="/cv.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Download CV
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Get in Touch
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-foreground"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-foreground"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-foreground"
          />
        </button>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { x: 0 } : { x: "100%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background md:hidden"
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              className="text-4xl font-medium text-foreground"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="/cv.pdf"
            download
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="rounded-full border border-border px-8 py-3 text-lg font-medium text-foreground"
          >
            Download CV
          </motion.a>
          <motion.a
            href="#contact"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="rounded-full bg-primary px-8 py-3 text-lg font-medium text-primary-foreground"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </nav>
    </motion.header>
  )
}