"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Rocket, Users, Building, FileText, Globe } from "lucide-react";

const projects = [
  {
    icon: Rocket,
    title: "Prequity",
    subtitle: "Founder",
    period: "Jul 2025 - Ongoing",
    description: "Decoding startup success through retrospective seed-stage analysis",
    highlights: [
      "Recognised by Karthik Reddy (MD, Blume Ventures); collaborating with AVP, Blume for Purplle analysis",
      "Garnered investor interest from GradCapital",
      "Led story design and research for 3+ deep-dive case studies (60+ pages)",
      "Scaled to 100K+ organic impressions & 600+ members in ~1 month",
    ],
    tags: ["Venture Capital", "Startup Analysis", "Content Creation", "Community Building"],
  },
  {
    icon: Users,
    title: "The Debating Society, SRCC",
    subtitle: "Senior Coordinator",
    period: "Oct 2023 - May 2025",
    description: "Led team of 65+ to 270+ credentials with 200% YoY growth",
    highlights: [
      "Led highest ever amount raised (₹11.5L+, 200%↑ YoY); directly secured ₹4.5L/6L by S&P Global, Cello",
      "Organized SR Debating Masterclass: ₹5.5L+ Revenue (41%↑ YoY); 1000+ students; 5 Global Mentors",
      "Ideated & Led Social Media campaigns stimulating 600K+ reach (140% ↑ YoY)",
      "Core Committee for India's Largest Debate Festival; onboarded 2K+ international participants",
    ],
    tags: ["Leadership", "Event Management", "Fundraising", "Social Media", "Team Building"],
  },
  {
    icon: Building,
    title: "The Placement Cell, SRCC",
    subtitle: "Junior Coordinator",
    period: "Oct 2023 - May 2024",
    description: "Facilitated 500+ offers, 135+ recruiters, ₹43.4+ Cr annual value",
    highlights: [
      "Supported Consulting Mentorship Program (15+ Mentors from McKinsey, BCG, Bain & Co)",
      "Managed 300+ mentees for interview preparations",
      "Spearheaded end-to-end recruitment for Bain Capability Network (3 rounds)",
      "Solely handled 500+ applicants across multiple recruitment processes",
    ],
    tags: ["Recruitment", "Consulting", "Mentorship", "Operations"],
  },
  {
    icon: FileText,
    title: "Apple Data Analytics Extern",
    subtitle: "Beats by Dre - Wearable Audio Devices",
    period: "Sep 2024 - Oct 2024",
    description: "Consumer sentiment analysis and product insights",
    highlights: [
      "Leveraged Python (Pandas, NumPy, NLTK) & Gemini API for sentiment analysis on 900+ reviews",
      "Applied EDA & NLP techniques on 10K+ data points to identify consumer behaviour",
      "Developed SWOT frameworks using analysis-based visualised trends",
    ],
    tags: ["Python", "Data Analytics", "NLP", "Sentiment Analysis", "Product Research"],
  },
  {
    icon: Globe,
    title: "UN Millennium Campus Fellow",
    subtitle: "Project Nephra",
    period: "Aug 2025 - Ongoing",
    description: "Top 4% selected among 60k+ for social leadership program",
    highlights: [
      "Leading initiative tackling CKD awareness, access & advocacy in India",
      "Conceptualised Kidney Care Playbook and DU Kidney Health Summit",
      "Designing creative donor campaigns using AR booths & fest partnerships",
      "Addressing kidney donation stigma through innovative outreach",
    ],
    tags: ["Social Impact", "Healthcare", "Advocacy", "Program Design", "UNAI"],
  },
];

const publications = [
  {
    title: "Libertarian Dreams or Anarchic Nightmares: The Silk Road Story",
    venue: "Vitta (50,000+ readership, inaugurated by CRO, NSE)",
    year: "2024",
  },
  {
    title: "The Illusion of Consumer Choice",
    venue: "Co-authored with Ms. Malavika Jinaraj, UNSW, Sydney",
    year: "2023",
    description: "Multivariate regression analysis on 5 retail chains revealing brand control",
  },
  {
    title: "Cash, Clicks & Campaign",
    venue: "Policy Report for Economics Society, SRCC",
    year: "2024",
    description: "Reviewed 17+ scholarly reports on digital campaign financing",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-accent/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-serif mb-4">Projects & Leadership</h2>
          <p className="text-xl text-muted-foreground">Entrepreneurship, Society Leadership & Research</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 bg-card/80 backdrop-blur">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <project.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                      <CardDescription className="text-sm font-semibold text-foreground/70">
                        {project.subtitle}
                      </CardDescription>
                      <p className="text-xs text-muted-foreground mt-1">{project.period}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 italic">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-gold mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Publications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold font-serif mb-8 text-center">Research & Publications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-border/50 bg-card/50 backdrop-blur hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight">{pub.title}</CardTitle>
                    <CardDescription className="text-xs">{pub.venue}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{pub.description}</p>
                    <Badge variant="outline" className="text-xs">{pub.year}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
