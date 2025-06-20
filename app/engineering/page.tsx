import type { Metadata } from 'next';
import ServicesSections from '@/components/engineering/ServicesSections';
import IndustriesCTA from '@/components/engineering/IndustriesCTA';

export const metadata: Metadata = {
  title: 'Engineering Services - MSK Precision Engineering Group',
  description: 'Advanced CFD analysis, FEA simulation, and AI-driven optimization services. Comprehensive engineering solutions for complex design challenges.',
  keywords: 'CFD analysis, FEA simulation, computational fluid dynamics, finite element analysis, AI optimization, engineering consulting',
};

export default function EngineeringPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-6">
          Engineering Services
        </h1>
        <p className="text-xl text-muted-foreground">
          Advanced computational analysis and AI-driven optimization for complex engineering challenges.
        </p>
      </div>
      
      <ServicesSections />
      <IndustriesCTA />
      
      {/* Content for subsequent tasks will be added here */}
    </div>
  );
} 