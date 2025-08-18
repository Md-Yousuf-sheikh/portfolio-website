import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, MapPin, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      company: 'Beatnik Technology Pvt. Ltd',
      logo: '🏢',
      position: 'Software Developer',
      duration: 'Dec 2022 - Present',
      location: 'Bangladesh',
      type: 'Full-time',
      description: 'Spearheaded the end-to-end development of multiple cutting-edge mobile applications using React Native and Expo, consistently delivering projects on time and exceeding client expectations.',
      achievements: [
        'Developed and deployed multiple React Native apps to App Store and Play Store',
        'Optimized application performance and ensured exceptional user satisfaction',
        'Collaborated with cross-functional teams to design and ship innovative features',
        'Contributed to world-class solutions with rigorous testing and iterative improvements'
      ],
      technologies: ['React Native', 'Expo', 'Firebase', 'Redux', 'TypeScript', 'JavaScript'],
    },
    {
      id: 2,
      company: 'Mimothi Solutions Pvt. Ltd',
      logo: '🚀',
      position: 'Software Developer',
      duration: 'Jun 2022 - Aug 2022',
      location: 'India',
      type: 'Full-time',
      description: 'Contributed to the development of MedLink, a comprehensive digital platform designed to connect healthcare professionals with recruiters.',
      achievements: [
        'Optimized recruitment processes by implementing key features',
        'Streamlined candidate search and matching functionalities',
        'Demonstrated commitment to efficient and effective software solutions',
        'Enhanced user experience through thoughtful feature development'
      ],
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-section bg-background-secondary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4"
            variants={itemVariants}
          >
            Career Journey
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 font-poppins"
            variants={itemVariants}
          >
            Professional <span className="text-gradient-primary">Experience</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            A timeline of my professional growth and the impact I've made 
            at various organizations throughout my career.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2"></div>

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-primary rounded-full transform -translate-x-1/2 border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <Card className="card-gradient p-6 hover:shadow-glow transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                            {experience.logo}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{experience.position}</h3>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Building className="h-4 w-4" />
                              <span className="font-medium">{experience.company}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline">{experience.type}</Badge>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {experience.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="h-4 w-4 text-accent" />
                          <span className="text-sm font-medium">Key Achievements</span>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <div className="text-sm font-medium mb-2">Technologies Used</div>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {[
            { label: 'Years Experience', value: '3+', icon: '📅' },
            { label: 'Projects Completed', value: '14+', icon: '🚀' },
            { label: 'Apps Published', value: '10+', icon: '📱' },
            { label: 'Technologies', value: '15+', icon: '⚡' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center text-2xl">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gradient-primary mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;