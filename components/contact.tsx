"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const socials = [
  { name: "Dribbble", href: "#" },
  { name: "Behance", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "X / Twitter", href: "#" },
]

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-3 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-primary" />
              <span className="font-mono text-sm uppercase tracking-widest text-primary">Contact</span>
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {"Let's create"}
              <br />
              something{" "}
              <span className="text-primary">great</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground"
            >
              Have a project in mind or just want to chat about design?
              I am always open to discussing new opportunities and creative ideas.
            </motion.p>

            <motion.a
              href="mailto:hello@alexrivera.design"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="mt-6 inline-block break-all text-xl font-semibold text-foreground underline decoration-primary underline-offset-8 transition-colors hover:text-primary sm:mt-8 sm:break-normal sm:text-2xl md:text-3xl"
            >
              hello@alexrivera.design
            </motion.a>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12"
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Find me on
              </h3>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ y: -3, borderColor: "hsl(138 94% 41%)" }}
                    className="rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:text-primary"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-border bg-card p-8 lg:p-10"
          >
            <h3 className="mb-8 text-xl font-semibold text-foreground">Send a message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Project inquiry"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
