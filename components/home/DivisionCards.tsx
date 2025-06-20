"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cog, Calculator, GraduationCap } from "lucide-react";

const divisions = [
  {
    id: "precision-works",
    title: "Precision Works",
    description: "Advanced CNC machining with 5-axis capabilities, industrial 3D printing, and comprehensive quality assurance. Delivering precision components with tolerances down to ±5 µm.",
    href: "/precision-works",
    icon: Cog,
    features: ["CNC Turning & VMC", "3D Printing", "CMM Quality Control", "±5 µm Tolerance"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "engineering",
    title: "Engineering Services",
    description: "Cutting-edge computational fluid dynamics, finite element analysis, and AI-driven design optimization. Transforming concepts into optimized engineering solutions.",
    href: "/engineering",
    icon: Calculator,
    features: ["CFD Analysis", "FEA Simulation", "AI Optimization", "Multi-Physics Modeling"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "training",
    title: "Technical Training",
    description: "Comprehensive training programs in CAD/CAM, CNC operations, 3D printing, and Python programming. Building the next generation of precision engineering professionals.",
    href: "/training",
    icon: GraduationCap,
    features: ["CAD/CAM Training", "CNC Workshop", "3D Print Mastery", "Python for Engineers"],
    gradient: "from-green-500 to-emerald-500"
  }
];

export default function DivisionCards() {
  return (
    <section id="divisions" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Divisions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three specialized divisions working in harmony to deliver comprehensive precision engineering solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => {
            const IconComponent = division.icon;
            return (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={division.href}>
                  <div className="relative bg-card border rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 overflow-hidden">
                    {/* Gradient background overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${division.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${division.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {division.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {division.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {division.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${division.gradient} mr-3`} />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Button 
                        variant="ghost" 
                        className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                      >
                        Learn More
                        <svg 
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 