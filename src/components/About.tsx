import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Globe, Smartphone, Cloud, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Mobile Development', icon: Smartphone, description: 'React Native, Expo, React' },
    { name: 'Frontend Development', icon: Code2, description: 'JavaScript/TypeScript, HTML/CSS, Next.js' },
    { name: 'Backend Development', icon: Database, description: 'Node.js, Express.js, Nest.js, MongoDB, MySQL' },
    { name: 'State Management', icon: Globe, description: 'Redux/RTK Query, Context API' },
    { name: 'UI/UX Libraries', icon: Zap, description: 'TailwindCSS, NativeWind, NativeBase, Material UI' },
    { name: 'Tools & Platforms', icon: Cloud, description: 'Git/GitHub, Firebase, Xcode, Android Studio' },
  ];

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
    <section id="about" className="py-section bg-background-secondary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/6 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
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
            About Me
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 font-poppins"
            variants={itemVariants}
          >
            Passionate About{' '}
            <span className="text-gradient-primary">Creating</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            I'm a dedicated MERN Stack Developer with over 3 years of experience specializing in 
            cutting-edge mobile application development using React Native and Expo.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-6 text-gradient-accent"
              variants={itemVariants}
            >
              My Journey
            </motion.h3>
            <motion.div className="space-y-4 text-muted-foreground" variants={itemVariants}>
              <p>
                Highly motivated and detail-oriented MERN Stack Developer with a proven track record 
                of successfully deploying robust, world-class applications to both the Apple App Store 
                and Google Play Store.
              </p>
              <p>
                I specialize in React Native and Expo development, with strong expertise in 
                optimizing application performance and integrating complex APIs to enhance functionality 
                across the full stack. My commitment is to creating seamless, high-performance, 
                and user-centric digital experiences.
              </p>
              <p>
                Adept at collaborating with cross-functional teams and driven by a passion for 
                innovation and pushing technological boundaries in mobile application development.
              </p>
            </motion.div>
            <motion.div className="mt-8" variants={itemVariants}>
              <Button variant="hero" size="lg" className="group">
                <span className="mr-2">📄</span>
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image Placeholder */}
          <motion.div
            className="relative"
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="relative card-gradient rounded-2xl p-8 text-center">
              <div className="w-48 h-48 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                <span className="text-6xl text-primary-foreground">👨‍💻</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Md Yousuf Sheikh</h4>
              <p className="text-muted-foreground mb-4">React Native Developer</p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-primary">14+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-accent">3+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Success</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h3
            className="text-3xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Skills & <span className="text-gradient-primary">Expertise</span>
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="card-gradient p-6 text-center h-full hover:shadow-glow transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;