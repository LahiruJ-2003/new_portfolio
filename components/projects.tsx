"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"

const allProjects = [

  {
    title: "Horizon Banking",
    category: "UI/UX Design",
    description: "A modern fintech experience for personal banking with card management and spending analytics.",
    tags: ["Mobile App", "Fintech", "Design System"],
    image: "/projects/project-1.jpg",
    year: "2025",
  },
  {
    title: "Maison Noir",
    category: "Web Design",
    description: "Luxury e-commerce redesign for a high-end fashion brand with immersive product experiences.",
    tags: ["E-commerce", "Fashion", "Responsive"],
    image: "/projects/project-2.jpg",
    year: "2025",
  },
  {
    title: "Solara Studio",
    category: "Brand Identity",
    description: "Complete visual identity system including logo, typography, color palette, and print collateral.",
    tags: ["Branding", "Print", "Identity"],
    image: "/projects/project-3.jpg",
    year: "2024",
  },
  {
    title: "Mindful App",
    category: "UI/UX Design",
    description: "Health and wellness app with meditation tracking, habit building, and calming visual design.",
    tags: ["Health", "Mobile", "Wellness"],
    image: "/projects/project-4.jpg",
    year: "2024",
  },
  {
    title: "Resonance Festival",
    category: "Graphic Design",
    description: "Bold typographic poster series for an annual music festival with experimental visual language.",
    tags: ["Poster", "Typography", "Festival"],
    image: "/projects/project-5.jpg",
    year: "2024",
  },
  {
    title: "DataPulse Dashboard",
    category: "UI/UX Design",
    description: "Analytics dashboard for SaaS product featuring data visualization and dark mode interface.",
    tags: ["Dashboard", "SaaS", "Data Viz"],
    image: "/projects/project-6.jpg",
    year: "2023",
  },
  {
    title: "Aurora App",
    category: "UI/UX Design",
    description: "Minimalist note-taking app with AI-powered organization and cloud synchronization.",
    tags: ["Productivity", "Mobile", "AI"],
    image: "/projects/project-1.jpg",
    year: "2023",
  },
  {
    title: "Nexus Brand",
    category: "Brand Identity",
    description: "Complete branding package for a tech startup including logo, guidelines, and digital assets.",
    tags: ["Branding", "Tech", "Digital"],
    image: "/projects/project-2.jpg",
    year: "2023",
  },
  {
    title: "Apex Studio",
    category: "Web Design",
    description: "Portfolio website redesign for a creative agency with interactive galleries and animations.",
    tags: ["Web", "Animation", "Portfolio"],
    image: "/projects/project-3.jpg",
    year: "2022",
  },
  {
    title: "Stellar App",
    category: "UI/UX Design",
    description: "Social platform redesign focused on user engagement and community building features.",
    tags: ["Social", "Community", "Mobile"],
    image: "/projects/project-4.jpg",
    year: "2022",
  },
  {
    title: "Harmony Campaign",
    category: "Graphic Design",
    description: "Multi-media campaign design for a wellness brand including social, print, and digital assets.",
    tags: ["Campaign", "Wellness", "Multi-media"],
    image: "/projects/project-5.jpg",
    year: "2022",
  },
  {
    title: "Vertex Analytics",
    category: "UI/UX Design",
    description: "Business intelligence dashboard with real-time data visualization and reporting tools.",
    tags: ["Analytics", "Dashboard", "B2B"],
    image: "/projects/project-6.jpg",
    year: "2022",
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof allProjects)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      {/* Image container */}
      <div className="relative mb-5 overflow-hidden rounded-2xl bg-card aspect-[4/3]">
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-end bg-background/60 p-6 backdrop-blur-sm"
        >
          <div className="flex w-full items-end justify-between">
            <p className="max-w-sm text-sm leading-relaxed text-foreground">
              {project.description}
            </p>
            <motion.div
              animate={{ x: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-primary-foreground"
              >
                <path
                  d="M5.83337 14.1667L14.1667 5.83337M14.1667 5.83337H5.83337M14.1667 5.83337V14.1667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Info */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.category}</p>
        </div>
        <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
      </div>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [visibleCount, setVisibleCount] = useState(6)
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" })
  const displayedProjects = allProjects.slice(0, visibleCount)

  return (
    <section id="work" className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div ref={headingRef} className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={headingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-3 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-primary" />
              <span className="font-mono text-sm uppercase tracking-widest text-primary">
                Selected Work
              </span>
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Featured Projects
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-sm text-sm leading-relaxed text-muted-foreground"
          >
            A curated selection of projects spanning UI/UX design, brand identity, and graphic design.
          </motion.p>
        </div>

        {/* Project grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:gap-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Load more button */}
        {visibleCount < allProjects.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex justify-center sm:mt-16"
          >
            <motion.button
              onClick={() => setVisibleCount(visibleCount + 3)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-border px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:border-primary sm:px-10 sm:py-4 sm:text-base"
            >
              Load More Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
