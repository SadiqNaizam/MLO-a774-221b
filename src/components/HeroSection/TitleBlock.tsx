import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface TitleBlockProps {
  className?: string;
}

const TitleBlock: React.FC<TitleBlockProps> = ({ className }) => {
  return (
    <div className={cn('text-white', className)}> 
      {/* TitleBlock needs white text to be visible against dark background image */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
        Nature's Perfect<br />
        Hideaways
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-md">
        Discover handpicked luxury cabins in breathtaking locations. Unplug,
        unwind, and reconnect with what matters most.
      </p>
      <div className="mt-6 flex items-center space-x-2">
        <Star className="h-6 w-6 text-accent fill-accent" />
        <span className="text-lg font-semibold text-white">4.7</span>
        <span className="text-base text-gray-300">from 1,800+ stays</span>
      </div>
    </div>
  );
};

export default TitleBlock;
