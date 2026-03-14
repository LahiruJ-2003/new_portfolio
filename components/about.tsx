"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const experiences = [
  { period: "2022 - Present", role: "Graphic Designer", company: "Freelancer" },
  { period: "2024 - 2025", role: "UI/UX Designer/ Graphic Designer/ Video Editor", company: "Dockyard Total Solution" },
 
]

const tools = [
  "Figma", "Canva", "Photoshop", "Premier Pro", "After Effects", "Davinci Resolve", "Capcut",
  "Wondershare Filmora", "Framer",
]

export function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-3 flex items-center gap-3"
        >
          <span className="h-px w-12 bg-primary" />
          <span className="font-mono text-sm uppercase tracking-widest text-primary">About</span>
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-3xl font-bold tracking-tight text-foreground sm:mb-16 sm:text-4xl lg:text-5xl"
        >
          Designing with
          <br />
          <span className="text-primary">purpose & passion</span>
        </motion.h2>

        {/* Profile image + bio row */}
        <div className="mb-16 grid gap-10 sm:mb-20 lg:grid-cols-[340px_1fr] lg:gap-16">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:mx-0"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/profile.png"
                alt="Profile photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, 340px"
              />
              {/* Green accent corner decoration */}
              <div className="absolute -bottom-1 -right-1 h-20 w-20 rounded-tl-3xl border-l-2 border-t-2 border-primary" />
            </div>
            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-4 left-4 rounded-full bg-primary px-5 py-2 sm:-bottom-5 sm:left-6 sm:px-6 sm:py-2.5"
            >
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-primary-foreground sm:text-sm">
                Available for work
              </span>
            </motion.div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I am a multidisciplinary designer with over 3 years of experience creating
                digital products and visual identities that connect brands with their audiences.
              </p>
              <p>
                My approach blends user-centered design principles with a strong visual
                aesthetic sensibility. I believe the best design is invisible - it simply works,
                feels natural, and brings joy to the people who interact with it.
              </p>
      
            </div>

            {/* Tools */}
            <div className="mt-8 sm:mt-10">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <motion.span
                    key={tool}
                    whileHover={{ scale: 1.05, borderColor: "hsl(138 94% 41%)" }}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-foreground transition-colors sm:px-4 sm:py-2 sm:text-sm"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience timeline */}
        <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground sm:mb-8"
            >
              Experience
            </motion.h3>

            <div className="space-y-0">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.35 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group border-b border-border py-5 first:border-t sm:py-6"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div>
                      <h4 className="text-base font-semibold text-foreground transition-colors group-hover:text-primary sm:text-lg">
                        {exp.role}
                      </h4>
                      <p className="mt-0.5 text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="flex-shrink-0 font-mono text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
      </div>
    </section>
  )
}
