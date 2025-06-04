import React from 'react';
import { cn } from '@/lib/utils';
import BackgroundImage from '../HeroSection/BackgroundImage';
import TitleBlock from '../HeroSection/TitleBlock';
import BookingCard from '../HeroSection/BookingCard';

const HeroSection: React.FC = () => {
  return (
    <section 
      className={cn(
        "relative", // For BackgroundImage positioning and content overlay
        "h-screen min-h-[700px]", // Ensure a minimum height, especially on mobile
        "bg-background", // Fallback background, covered by BackgroundImage
        "flex flex-col items-center justify-center", // Center content vertically and horizontally
        "overflow-hidden" // Prevent content overflow issues
      )}
    >
      <BackgroundImage 
        imageUrl="https://images.unsplash.com/photo-1518737003708-5a5e858c1945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // A scenic, misty forest/cabin image
        altText="Luxury cabin in a serene, misty forest setting"
      />
      <div 
        className={cn(
          "relative z-10 w-full", // z-10 to ensure content is above BackgroundImage's default z-index or -z-10
          "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", // Content container sizing from Layout Requirements
          "flex flex-col md:flex-row items-center md:items-end justify-between",
          "gap-8 md:gap-12 lg:gap-16", // Spacing between TitleBlock and BookingCard
          "pt-[70px] pb-8 md:pb-16" // Padding to avoid overlap with navbar and provide bottom space
        )}
      >
        <div className="w-full md:w-auto md:flex-grow text-center md:text-left">
          <TitleBlock />
        </div>
        <div className="w-full md:w-auto md:flex-shrink-0">
          <BookingCard /> 
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
