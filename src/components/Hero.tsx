"use client";

import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/10"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="text-sm font-medium text-primary">Private Equity • Venture Capital • Strategy</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold font-serif mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent"
          >
            Kartikay Mendiratta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto"
          >
            PE Intern at <span className="text-gold font-semibold">Bain Capability Network</span> (PPO) • VC Intern at <span className="text-gold font-semibold">Kairon Capital</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Economics @ SRCC • CUET AIR 1 • 8x Case Competition Finalist • 2x National Winner
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="group px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all"
              onClick={() => window.location.href = 'mailto:kartikay.srcc@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold border-2 hover:bg-accent transition-all"
              onClick={() => window.open('https://linkedin.com/in/kartikay-mendiratta', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-20"
          >
            <Button
              variant="ghost"
              className="animate-bounce"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
