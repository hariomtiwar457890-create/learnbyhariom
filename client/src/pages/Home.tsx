import { Helmet } from 'react-helmet-async';

// Import all section components
import HeroSection from '../components/HeroSection';
import StatisticsSection from '../components/StatisticsSection';
import LearningCategoriesSection from '../components/LearningCategoriesSection';
import FeaturedCoursesSection from '../components/FeaturedCoursesSection';
import RoadmapsSection from '../components/RoadmapsSection';
import ProjectShowcaseSection from '../components/ProjectShowcaseSection';
import AIAssistantSection from '../components/AIAssistantSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import FAQSection from '../components/FAQSection';
import NewsletterSection from '../components/NewsletterSection';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Learn By Hariom | Master Web Development, AI, and Career Growth</title>
        <meta
          name="description"
          content="Learn by Hariom - India's #1 ed-tech platform for software engineers, AI engineers, and full-stack developers. Courses, roadmaps, projects, and AI mentorship."
        />
        <meta name="keywords" content="coding, programming, web development, AI, machine learning, software engineering, career growth" />
      </Helmet>

      {/* Main Sections */}
      <HeroSection />
      <StatisticsSection />
      <LearningCategoriesSection />
      <FeaturedCoursesSection />
      <RoadmapsSection />
      <ProjectShowcaseSection />
      <AIAssistantSection />
      <SkillsSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <NewsletterSection />
    </>
  );
}
