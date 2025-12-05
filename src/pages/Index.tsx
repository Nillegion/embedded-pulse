import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sudhir Bussa | Embedded Systems Engineer & IoT Developer</title>
        <meta
          name="description"
          content="Portfolio of Sudhir Bussa - Senior Embedded Systems Engineer specializing in ESP32, ESP8266, firmware development, and IoT solutions with 14+ years of experience."
        />
        <meta
          name="keywords"
          content="Embedded Systems, IoT, ESP32, ESP8266, Firmware Developer, Embedded C, RTOS, Hardware Engineer"
        />
        <meta property="og:title" content="Sudhir Bussa | Embedded Systems Engineer" />
        <meta
          property="og:description"
          content="Senior Embedded Systems Engineer specializing in IoT firmware development with ESP32, ESP8266, and industrial protocols."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sudhirbussa.dev" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
