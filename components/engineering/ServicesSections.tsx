"use client";

import { motion } from "framer-motion";
import { Wind, Zap, Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "cfd",
    title: "Computational Fluid Dynamics (CFD)",
    description: "Advanced fluid flow analysis and thermal simulation to optimize designs for maximum efficiency and performance.",
    features: [
      "Turbulent and laminar flow analysis",
      "Heat transfer and thermal management",
      "Multi-phase flow simulations",
      "Aerodynamic optimization",
      "Pressure drop calculations",
      "Flow visualization and reporting"
    ],
    applications: [
      "HVAC system optimization",
      "Automotive aerodynamics",
      "Heat exchanger design",
      "Pump and fan performance"
    ],
    icon: Wind,
    gradient: "from-blue-500 to-cyan-500",
    imageAlt: "CFD Analysis Visualization"
  },
  {
    id: "fea",
    title: "Finite Element Analysis (FEA)",
    description: "Comprehensive structural analysis and simulation to ensure design integrity under real-world loading conditions.",
    features: [
      "Static and dynamic stress analysis",
      "Modal and frequency analysis",
      "Fatigue and durability assessment",
      "Non-linear material behavior",
      "Contact and assembly analysis",
      "Optimization-driven design"
    ],
    applications: [
      "Structural component validation",
      "Vibration and resonance analysis",
      "Safety factor determination",
      "Weight optimization studies"
    ],
    icon: Zap,
    gradient: "from-purple-500 to-pink-500",
    imageAlt: "FEA Stress Analysis Visualization"
  },
  {
    id: "ai-optimization",
    title: "AI-Driven Design Optimization",
    description: "Leveraging artificial intelligence and machine learning to discover optimal design solutions and predict performance outcomes.",
    features: [
      "Topology optimization algorithms",
      "Multi-objective design optimization",
      "Parametric design exploration",
      "Performance prediction models",
      "Automated design iterations",
      "Data-driven insights and recommendations"
    ],
    applications: [
      "Lightweight structure design",
      "Cost-performance optimization",
      "Material usage minimization",
      "Manufacturing constraint integration"
    ],
    icon: Brain,
    gradient: "from-green-500 to-emerald-500",
    imageAlt: "AI Optimization Process Visualization"
  }
];

export default function ServicesSections() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Engineering Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge computational analysis and AI-powered optimization to solve complex engineering challenges
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isReversed = index % 2 === 1;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
                  
                  {/* Content Section */}
                  <div className={`space-y-6 ${isReversed ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-foreground">Key Capabilities:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: (index * 0.2) + (featureIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`} />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-foreground">Typical Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.applications.map((app, appIndex) => (
                          <span
                            key={appIndex}
                            className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${service.gradient} text-white`}
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button variant="outline" className="group/btn">
                        Learn More About {service.title.split(' ')[0]}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </div>
                  </div>

                  {/* Image Placeholder Section */}
                  <div className={`${isReversed ? 'lg:col-start-1' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: (index * 0.2) + 0.3 }}
                      viewport={{ once: true }}
                      className="group/image"
                    >
                      <div className={`relative h-80 rounded-2xl bg-gradient-to-br ${service.gradient} p-1 group-hover/image:shadow-2xl transition-all duration-500`}>
                        <div className="w-full h-full bg-card rounded-xl flex items-center justify-center border border-border/50">
                          <div className="text-center space-y-4">
                            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-20`}>
                              <IconComponent className="w-10 h-10 text-white" />
                            </div>
                            <div className="space-y-2">
                              <p className="text-sm font-medium text-muted-foreground">
                                {service.imageAlt}
                              </p>
                              <p className="text-xs text-muted-foreground/70">
                                Visualization Coming Soon
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-muted/30 rounded-3xl p-8 border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Optimize Your Design?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our engineering team combines decades of experience with cutting-edge computational tools to deliver insights that drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 