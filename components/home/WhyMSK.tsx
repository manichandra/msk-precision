"use client";

import { motion } from "framer-motion";
import { CheckCircle, Brain, Users } from "lucide-react";

const reasons = [
  {
    id: "quality-first",
    title: "Quality-First ISO Workflow",
    description: "Rigorous quality management systems ensuring consistent precision and reliability in every component we manufacture.",
    icon: CheckCircle,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: "ai-driven",
    title: "AI-Driven Design Insight",
    description: "Leveraging artificial intelligence and advanced simulation to optimize designs and deliver superior engineering solutions.",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "integrated-training",
    title: "Integrated Training Pipeline",
    description: "Comprehensive skill development programs that bridge the gap between academic learning and industry requirements.",
    icon: Users,
    gradient: "from-blue-500 to-cyan-500"
  }
];

export default function WhyMSK() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">MSK</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three core strengths that set us apart in the precision engineering landscape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="flex flex-col items-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${reason.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed max-w-sm">
                    {reason.description}
                  </p>
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
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience precision engineering excellence?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 px-8 py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.a>
            <motion.a
              href="/about"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 