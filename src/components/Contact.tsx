"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold font-serif mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interested in discussing private equity, venture capital, or consulting opportunities? Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 md:p-12 border-2 bg-gradient-to-br from-card to-accent/10">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:kartikay.srcc@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      kartikay.srcc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/kartikay-mendiratta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/kartikay-mendiratta
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">Delhi, India</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <div className="p-6 rounded-lg bg-accent/30 border border-border">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Quick Facts
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Currently: VC Intern at Kairon Capital</li>
                    <li>• PPO: Bain Capability Network</li>
                    <li>• Education: Economics @ SRCC</li>
                    <li>• Interests: PE, VC, Strategy Consulting</li>
                    <li>• Age: 18 | He/Him</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-border">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90"
                onClick={() => window.location.href = 'mailto:kartikay.srcc@gmail.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-semibold border-2"
                onClick={() => window.open('https://linkedin.com/in/kartikay-mendiratta', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-muted-foreground text-sm"
        >
          <p>© 2025 Kartikay Mendiratta. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
