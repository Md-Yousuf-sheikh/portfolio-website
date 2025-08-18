import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ExternalLink, Github, Code, Smartphone, Database, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web', 'Mobile', 'Backend', 'NPM'];
  const categoryIcons = {
    'Web': Code,
    'Mobile': Smartphone,
    'Backend': Database,
    'NPM': Package,
  };

  const projects = [
    {
      id: 1,
      title: 'Waadaa.Insure',
      description: 'Comprehensive digital platform for insurance management, enabling users to effortlessly purchase, claim, and manage insurance policies. Successfully published on both App Store and Google Play Store.',
      image: '/api/placeholder/600/400',
      category: 'Mobile',
      tags: ['React Native', 'Expo', 'Firebase', 'SSL', 'Redux'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Water Watch',
      description: 'Community-focused mobile application for the Flood Forecasting and Warning Center (FFWC) and Bangladesh Water Development Board (BWDB) to facilitate collection of water-level data for early warning capabilities.',
      image: '/api/placeholder/600/400',
      category: 'Mobile',
      tags: ['React Native', 'Expo', 'Firebase', 'SSL', 'Redux'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Pick And Ride',
      description: 'User-friendly mobile application for car rental services in Qatar, simplifying the process of searching and renting vehicles with integrated payment processing.',
      image: '/api/placeholder/600/400',
      category: 'Mobile',
      tags: ['React Native', 'Expo', 'Firebase', 'NativeBase', 'Stripe', 'Redux', 'TypeScript'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
    },
    {
      id: 4,
      title: 'Show Talent',
      description: 'Next-generation talent promotion platform developed by Beatnik Technology. Users can publish news, express thoughts, upload media, and sell E-Books.',
      image: '/api/placeholder/600/400',
      category: 'Mobile',
      tags: ['React Native', 'Firebase', 'SSL', 'Redux'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
    },
    {
      id: 5,
      title: 'MedLink',
      description: 'Comprehensive digital platform designed to connect healthcare professionals with recruiters, optimizing recruitment processes with streamlined candidate search and matching functionalities.',
      image: '/api/placeholder/600/400',
      category: 'Web',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-section bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-4"
            variants={itemVariants}
          >
            Portfolio
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 font-poppins"
            variants={itemVariants}
          >
            Featured <span className="text-gradient-primary">Projects</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            A showcase of my React Native and mobile development projects, including 
            apps published on App Store and Google Play Store.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="flex flex-wrap gap-2 p-2 bg-background-secondary rounded-2xl border border-border">
            {categories.map((category) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons];
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-primary text-primary-foreground shadow-glow'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          key={activeFilter} // Re-trigger animation on filter change
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="card-gradient overflow-hidden h-full hover:shadow-glow transition-all duration-300">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-6xl opacity-50">🚀</span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-accent text-accent-foreground">
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-gradient-primary transition-all duration-300">
                      {project.title}
                    </h3>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="flex-1" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;