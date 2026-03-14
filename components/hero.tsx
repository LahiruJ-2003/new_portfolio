"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const letterAnimation = {
  hidden: { y: 100, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.04,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
}

function AnimatedText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={`inline-flex flex-wrap overflow-hidden ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          custom={i}
          variants={letterAnimation}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 sm:px-6 lg:px-12">
      {/* Background grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating accent orb */}
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        initial={{ background: "hsl(138 94% 41%)" }}
        animate={{ background: "hsl(138 94% 41%)" }}
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full opacity-10 blur-[120px]"
        initial={{ background: "hsl(138 94% 41%)" }}
        animate={{ background: "hsl(138 94% 41%)" }}
      />

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl w-full">
        <div className="flex flex-col gap-8">
          {/* Tag line */}
          <motion.div
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3"
          >
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary sm:text-sm">UI/UX Designer & Graphic Designer</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
            <AnimatedText text="I craft digital" />
            <br />
            <span className="flex items-center gap-4 lg:gap-6">
              <AnimatedText text="experiences" />
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="hidden h-2 origin-left flex-1 rounded-full bg-primary sm:block"
              />
            </span>
            <AnimatedText text="that matter" />
          </h1>

          {/* Bottom row */}
          <div className="mt-8 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-md text-lg leading-relaxed text-muted-foreground"
            >
              Blending aesthetics with functionality to create interfaces
              and visual identities that resonate with people.
            </motion.p>

            <motion.div
              custom={1.2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4"
            >
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground sm:px-8 sm:py-4"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground sm:px-8 sm:py-4"
              >
                About Me
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-12 w-px bg-muted-foreground/30"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
