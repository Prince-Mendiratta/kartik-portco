"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Building2, Rocket } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    company: "Bain Capability Network",
    role: "Private Equity Group Intern - Americas",
    period: "Jun 2025 - Aug 2025",
    location: "PPO Offered | 1/2 Selected on Campus - Highest Category",
    highlights: [
      "Ran survey-based DD on ~$6B energy-data provider, delivering ~20 slides on customer NPS, spend & ARR overlap",
      "Identified 220+ likely to re-transact assets valued $50M+ across 5 Financial Services subsectors",
      "Ideated & Executed Gen AI driven survey QC bot cutting analyst review cycles by ~40% and boosting accuracy by ~70%",
      "Executed 2 survey workstreams for $80B+ AI investment thesis, benchmarking enterprise & consumer AI tools",
    ],
    tags: ["Private Equity", "Due Diligence", "Gen AI", "Survey Analytics", "Alteryx", "Tableau"],
  },
  {
    icon: TrendingUp,
    company: "Kairon Capital",
    role: "Venture Capital Intern",
    period: "Aug 2025 - Ongoing",
    location: "Seed & Pre-seed Consumer Fund | ₹200Cr+ AUM",
    highlights: [
      "Screened & critically evaluated $3M+ startup deal flow (10+ pitch decks), assessing PMF, monetization & defensibility",
      "Led founder calls & diligence discussions, probing GTM strategies, revenue traction & competitive moat",
      "Developed IP across AI and Climate Tech sectors; shortlisted startups based on TAM estimates",
    ],
    tags: ["Venture Capital", "Deal Flow", "Due Diligence", "AI", "Climate Tech", "TAM Analysis"],
  },
  {
    icon: Building2,
    company: "Maier Vidorno Altios",
    role: "Management Consulting Intern",
    period: "Jul 2024 - Aug 2024",
    location: "German Consulting Firm | 8,000+ Projects Worldwide",
    highlights: [
      "Advised 3 Europe-based clients worth $200M+ in Construction, Machinery & RFMW, evaluating India market entry",
      "Solely analysed 500+ shipments (8000+ data points) using Excel for competitor identification",
      "Executed detailed competitor profiling for 5 companies through secondary & primary research",
      "Curated & evaluated M&A long list of 100+ domestic targets",
    ],
    tags: ["Consulting", "Market Entry", "M&A", "Competitor Analysis", "Excel"],
  },
  {
    icon: Rocket,
    company: "Creatr",
    role: "Founder's Office - Strategy Intern",
    period: "May 2024 - Jul 2024",
    location: "AI-Powered Platform | Valued $7M by Accel & All In Capital",
    highlights: [
      "Assessed profitability of pricing tiers through break-even analysis, contributing to 40% increase in sales",
      "Solely generated leads worth $5,000 by pitching to 30+ companies",
      "Improved retention by 15% through targeted feedback loops and product enhancements",
      "Awarded Letter of Recommendation by founders",
    ],
    tags: ["Strategy", "Pricing", "Lead Generation", "Product Analytics", "SaaS"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-accent/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-serif mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground">Private Equity, Venture Capital & Strategic Consulting</p>
        </motion.div>

        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 bg-card/80 backdrop-blur">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <exp.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{exp.company}</CardTitle>
                      <CardDescription className="text-base font-semibold text-foreground/80">
                        {exp.role}
                      </CardDescription>
                      <div className="flex flex-col sm:flex-row gap-2 mt-2 text-sm text-muted-foreground">
                        <span>{exp.period}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2 text-muted-foreground">
                        <span className="text-gold mt-1.5">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
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
      </div>
    </section>
  );
}
