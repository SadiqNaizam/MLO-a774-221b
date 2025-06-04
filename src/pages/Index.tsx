import React from 'react';
import HomepageLayout from '../components/templates/HomepageLayout'; // Assuming HomepageLayout is in src/components/templates/

/**
 * IndexPage serves as the main landing page for the WoodNest application.
 * It renders the HomepageLayout, which includes the Navbar and HeroSection
 * along with all their nested components and functionality.
 */
const IndexPage: React.FC = () => {
  return <HomepageLayout />;
};

export default IndexPage;
