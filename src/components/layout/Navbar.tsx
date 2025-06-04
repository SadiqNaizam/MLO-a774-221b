import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { TreePine, Menu } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Locations", href: "#locations" },
  { label: "Rooms", href: "#rooms" },
  { label: "Experiences", href: "#experiences" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  // Mobile menu state would go here if a full mobile menu was implemented
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

  return (
    <header
      className={cn(
        "absolute top-0 left-0 w-full h-[70px]",
        "flex items-center justify-between",
        "px-4 sm:px-8", // Responsive padding
        "bg-transparent z-50" // z-50 to ensure navbar is above other content
      )}
    >
      <a href="/" className="flex items-center gap-2">
        <TreePine className="h-7 w-7 text-accent" />
        <span className="text-xl sm:text-2xl font-bold text-white">WoodNest</span>
      </a>
      
      <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm lg:text-base text-gray-200 hover:text-white transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <Button 
          variant="default"
          className="bg-primary text-primary-foreground hover:bg-primary/90 hidden md:inline-flex px-6 py-2.5 text-sm font-semibold rounded-lg"
        >
          Book Now
        </Button>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/10 focus-visible:ring-accent"
            // onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>
      {/* A full mobile menu would typically be an absolutely positioned div below the header */}
      {/* e.g., if (isMobileMenuOpen) { ...mobile menu JSX... } */}
    </header>
  );
};

export default Navbar;
