import type { Metadata } from 'next';
import ServicesGrid from '@/components/precision-works/ServicesGrid';

export const metadata: Metadata = {
  title: 'Precision Works - MSK Precision Engineering Group',
  description: 'Advanced CNC machining, 3D printing, and quality assurance services. Delivering precision components with tolerances down to ±5 µm.',
  keywords: 'CNC machining, precision manufacturing, 3D printing, quality control, CMM inspection',
};

export default function PrecisionWorksPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-6">
          Precision Works
        </h1>
        <p className="text-xl text-muted-foreground">
          Advanced CNC machining with 5-axis capabilities, industrial 3D printing, and comprehensive quality assurance.
        </p>
      </div>
      
      <ServicesGrid />
      
      {/* Content for subsequent tasks will be added here */}
    </div>
  );
} 