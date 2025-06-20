"use client";

import { motion } from "framer-motion";
import { Cog, Printer, Search, Settings } from "lucide-react";

const services = [
  {
    id: "cnc-turning",
    title: "CNC Turning",
    count: "5 Machines",
    description: "High-precision turning operations with live tooling capabilities. Suitable for complex rotational components.",
    icon: Cog,
    specifications: [
      "Max diameter: 320mm",
      "Max length: 600mm", 
      "Tolerance: ±5 µm",
      "Live tooling available"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "cnc-vmc",
    title: "CNC VMC 3-Axis",
    count: "3 Machines",
    description: "Vertical machining centers for precision milling, drilling, and complex geometries with excellent surface finish.",
    icon: Settings,
    specifications: [
      "Work envelope: 1000×500×500mm",
      "Spindle speed: 12,000 RPM",
      "Tolerance: ±5 µm",
      "24-tool ATC"
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "3d-printing",
    title: "Industrial 3D Printers",
    count: "3 Machines",
    description: "Advanced additive manufacturing for rapid prototyping and production of complex geometries.",
    icon: Printer,
    specifications: [
      "Build volume: 300×300×400mm",
      "Layer resolution: 0.1mm",
      "Materials: PLA, ABS, PETG, Nylon",
      "Support removal service"
    ],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: "cmm-qa",
    title: "CMM & QA Lab",
    count: "1 Lab",
    description: "Comprehensive quality assurance with coordinate measuring machine and advanced inspection equipment.",
    icon: Search,
    specifications: [
      "Measuring range: 700×500×400mm",
      "Accuracy: ±2.5 µm",
      "Temperature controlled",
      "Full dimensional reports"
    ],
    gradient: "from-orange-500 to-red-500"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            State-of-the-art equipment delivering precision manufacturing solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card border rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${service.gradient} text-white mt-1`}>
                          {service.count}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Specifications */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Specifications:</h4>
                    {service.specifications.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`} />
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tolerance Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full">
            <div className="w-3 h-3 rounded-full bg-primary mr-3 animate-pulse" />
            <span className="text-primary font-semibold">
              Achieving tolerances down to ±5 µm across all machining operations
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 