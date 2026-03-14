"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  "UI Design",
  "UX Research",
  "Brand Identity",
  "Design Systems",
  "Prototyping",
  "Typography",
  "Visual Identity",
  "User Testing",
  "Video Editing",
]

export function Marquee() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-border py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="animate-marquee flex w-max gap-8">
          {[...skills, ...skills].map((skill, i) => (
            <div key={`${skill}-${i}`} className="flex items-center gap-8">
              <span className="whitespace-nowrap font-mono text-sm uppercase tracking-widest text-muted-foreground">
                {skill}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
