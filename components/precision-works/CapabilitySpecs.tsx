"use client";

import { motion } from "framer-motion";
import { CheckCircle, Package, Wrench, Building2 } from "lucide-react";

const capabilities = [
  {
    id: "part-sizes",
    title: "Maximum Part Sizes",
    icon: Package,
    items: [
      "CNC Turning: Ø320mm × 600mm length",
      "CNC VMC: 1000mm × 500mm × 500mm",
      "3D Printing: 300mm × 300mm × 400mm",
      "CMM Inspection: 700mm × 500mm × 400mm"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "materials",
    title: "Materials Expertise",
    icon: Wrench,
    items: [
      "Mild Steel (MS) - All grades",
      "Aluminum (Al) - 6061, 7075, 2024",
      "Stainless Steel (SS) - 304, 316, 17-4 PH",
      "Engineering Plastics - ABS, PETG, Nylon"
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "industries",
    title: "Industries Served",
    icon: Building2,
    items: [
      "Aerospace & Defense",
      "Automotive & Transportation",
      "Medical Device Manufacturing",
      "Industrial Equipment & Machinery"
    ],
    gradient: "from-green-500 to-emerald-500"
  }
];

export default function CapabilitySpecs() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive manufacturing capabilities across diverse materials and industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card border rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${capability.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground ml-4 group-hover:text-primary transition-colors duration-300">
                      {capability.title}
                    </h3>
                  </div>

                  {/* Specifications List */}
                  <div className="space-y-3">
                    {capability.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (itemIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <CheckCircle className={`w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0`} />
                        <span className="text-muted-foreground leading-relaxed">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quality Assurance Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center px-6 py-4 bg-primary/10 rounded-2xl border border-primary/20">
            <div className="w-4 h-4 rounded-full bg-primary mr-4 animate-pulse" />
            <div className="text-left">
              <p className="text-primary font-semibold text-lg">
                ISO 9001:2015 Certified Quality Management
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Full traceability and documentation for all manufactured components
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 