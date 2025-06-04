import React from 'react';
import { cn } from '@/lib/utils';

interface BackgroundImageProps {
  imageUrl: string;
  altText?: string;
  className?: string;
  children?: React.ReactNode; // To allow content overlay like text or gradient
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageUrl,
  altText = 'Scenic background image',
  className,
  children,
}) => {
  return (
    <div className={cn('absolute inset-0 -z-10', className)}>
      <img
        src={imageUrl}
        alt={altText}
        className="object-cover w-full h-full"
      />
      {/* Overlay for better text contrast or visual effect */}
      <div className="absolute inset-0 bg-black/40" />
      {children}
    </div>
  );
};

export default BackgroundImage;
