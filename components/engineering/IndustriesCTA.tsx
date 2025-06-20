"use client";

import { motion } from "framer-motion";
import { Plane, Car, Ship, Heart, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    id: "aerospace",
    name: "Aerospace & Defense",
    description: "Critical components for aviation and defense systems requiring the highest precision and reliability standards.",
    applications: [
      "Turbine blade optimization",
      "Structural component analysis",
      "Thermal management systems",
      "Aerodynamic performance enhancement"
    ],
    icon: Plane,
    gradient: "from-blue-600 to-indigo-600",
    imageAlt: "Aerospace Component Analysis"
  },
  {
    id: "automotive",
    name: "Automotive & Transportation",
    description: "Advanced engineering solutions for next-generation vehicles and transportation systems.",
    applications: [
      "Engine performance optimization",
      "Crash simulation and safety",
      "Electric vehicle thermal systems",
      "Lightweight design solutions"
    ],
    icon: Car,
    gradient: "from-red-500 to-orange-500",
    imageAlt: "Automotive Engineering Solutions"
  },
  {
    id: "marine",
    name: "Marine & Offshore",
    description: "Robust engineering analysis for marine vessels and offshore structures in challenging environments.",
    applications: [
      "Hull stress analysis",
      "Propulsion system optimization",
      "Offshore platform design",
      "Corrosion resistance analysis"
    ],
    icon: Ship,
    gradient: "from-cyan-500 to-blue-500",
    imageAlt: "Marine Engineering Analysis"
  },
  {
    id: "medical",
    name: "Medical Device Manufacturing",
    description: "Precision engineering for life-critical medical devices and biomedical applications.",
    applications: [
      "Implant stress analysis",
      "Biocompatibility assessment",
      "Surgical instrument design",
      "Drug delivery system optimization"
    ],
    icon: Heart,
    gradient: "from-green-500 to-emerald-500",
    imageAlt: "Medical Device Engineering"
  }
];

export default function IndustriesCTA() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Industries We <span className="text-primary">Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our engineering expertise spans critical industries where precision, reliability, and innovation are paramount
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card border rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  
                  {/* Industry Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${industry.gradient} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                        {industry.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </div>

                  {/* Applications List */}
                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-semibold text-foreground">Key Applications:</h4>
                    <div className="space-y-1">
                      {industry.applications.map((application, appIndex) => (
                        <motion.div
                          key={appIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (appIndex * 0.05) }}
                          viewport={{ once: true }}
                          className="flex items-center text-xs text-muted-foreground"
                        >
                          <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          {application}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Image Placeholder */}
                  <div className="mt-4">
                    <div className={`relative h-32 rounded-xl bg-gradient-to-br ${industry.gradient} p-0.5 group-hover:shadow-lg transition-all duration-300`}>
                      <div className="w-full h-full bg-card rounded-lg flex items-center justify-center border border-border/30">
                        <div className="text-center space-y-2">
                          <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${industry.gradient} opacity-30`}>
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-muted-foreground">
                              {industry.imageAlt}
                            </p>
                            <p className="text-xs text-muted-foreground/60">
                              Case Study Coming Soon
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Engineering Challenges?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you&apos;re developing next-generation aerospace components, optimizing automotive performance, 
                designing marine systems, or creating life-saving medical devices, our engineering team is ready 
                to deliver the computational insights you need.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button size="lg" className="group min-w-[200px]">
                  Contact Our Engineers
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                <Button variant="outline" size="lg" className="min-w-[200px]">
                  View Case Studies
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Industry-Leading Software</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Expert Engineering Team</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 