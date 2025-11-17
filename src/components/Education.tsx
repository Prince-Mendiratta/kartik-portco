"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy, Star } from "lucide-react";

const achievements = [
  {
    title: "Academic Excellence",
    items: [
      "CUET (DU): AIR 1 in 3 subjects among 1.5L+ candidates",
      "CUET: AIR 59 in B.A. (Hons.) Economics",
      "Featured in Times of India, Jagran Josh & Shiksha (47 crore readers p.m.)",
      "DU Rank 1 in 9 subjects • Obtained O/A+/A in 27/28 subjects",
      "8.95 CGPA at SRCC (9.36 SGPA in Sem 4)",
    ],
  },
  {
    title: "Case Competitions",
    items: [
      "2x National Winner: Microsoft x MVP, PCE (180DC, SRCC) - ₹75K+ prizes",
      "DU Winner & National Rank 4: PwC Atlas NextGen Leaders - ₹3L+ prizes, 4K+ registrations",
      "Global Rank 3: Global Microfinance Case Competition (Univ. of Melbourne & 180DC)",
      "National Semi Finalist: Accenture Strategy Connect (8.6K+ registrations)",
      "8x National Finalist across top competitions",
    ],
  },
  {
    title: "Debating Achievements",
    items: [
      "National Winner: Manzar 2024 (Novice), Top 1/55+ Teams",
      "2x Open Semi Finalist: CBSPD 2025, Manzar 2025 (Top 8/100+ Teams)",
      "Quarter Finalist: IITR PD (6th/108 Best Speaker), HPD'24 (Top 8/66 Teams)",
      "3x Invited Adjudicator (Paid) for Indian Debate League",
      "Grand Finals Judge: Indo Pacific WSDO",
    ],
  },
  {
    title: "Recognition & Honors",
    items: [
      "7+ Gold Medals, 50+ Accolades & Roll of Honour in ECA & Academics",
      "Goenkan Excellence Scholarship of ₹20K (1/200+ awarded)",
      "1/6 GDG alumni invited to lead career counselling forum for 300+ students",
      "Hosted live interactions with G20 Sherpa Amitabh Kant & Ambassador Nagesh Singh",
      "Grade 3 Electric Guitar certification from Trinity College, London",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-serif mb-4">Education & Achievements</h2>
          <p className="text-xl text-muted-foreground">Academic Excellence & National Recognition</p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="border-2 bg-gradient-to-br from-card to-accent/10 hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-3xl mb-2 font-serif">Shri Ram College of Commerce</CardTitle>
                  <p className="text-xl text-foreground/90 mb-2">B.A. (Hons.) Economics</p>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-gold" />
                      8.95 CGPA
                    </span>
                    <span>•</span>
                    <span>Expected 2026/27</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-accent/30 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Previous Education</p>
                  <p className="font-semibold">G.D. Goenka Public School</p>
                  <div className="mt-2 space-y-1 text-sm">
                    <p>Grade XII (CBSE): <span className="font-semibold text-gold">93.2%</span> (2023)</p>
                    <p>Grade X (CBSE): <span className="font-semibold text-gold">94.8%</span> (2021)</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-2">Key Highlights</p>
                  <div className="space-y-1 text-sm">
                    <p>• CUET AIR 1 in 3 subjects</p>
                    <p>• Featured in Times of India</p>
                    <p>• 7+ Gold Medals</p>
                    <p>• 50+ Academic Accolades</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border border-border/50 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gold/10 text-gold">
                      {index === 0 && <Award className="h-5 w-5" />}
                      {index === 1 && <Trophy className="h-5 w-5" />}
                      {index === 2 && <Star className="h-5 w-5" />}
                      {index === 3 && <Badge className="h-5 w-5" />}
                    </div>
                    <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {achievement.items.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
