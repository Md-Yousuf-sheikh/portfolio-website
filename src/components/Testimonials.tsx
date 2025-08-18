import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Alex delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are outstanding. The project was completed on time and within budget.',
      project: 'E-Commerce Platform',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO, DataFlow Systems',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Working with Alex was a game-changer for our startup. He built our entire backend infrastructure and helped us scale from 0 to 100K users seamlessly. Highly recommended!',
      project: 'Backend Infrastructure',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Product Manager, CreativeAgency',
      avatar: '👩‍🎨',
      rating: 5,
      text: 'Alex transformed our design concepts into a beautiful, responsive website. His communication throughout the project was excellent, and he provided valuable technical insights.',
      project: 'Corporate Website',
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Founder, MobileTech Solutions',
      avatar: '👨‍🚀',
      rating: 5,
      text: 'The mobile app Alex developed for us has been a huge success. His expertise in React Native and attention to user experience resulted in a 4.8-star rating on the app stores.',
      project: 'Mobile Application',
    },
    {
      id: 5,
      name: 'Lisa Park',
      position: 'Marketing Director, GrowthCo',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Alex created a powerful analytics dashboard that gives us real-time insights into our business. The visualizations are intuitive and the performance is exceptional.',
      project: 'Analytics Dashboard',
    },
    {
      id: 6,
      name: 'James Wilson',
      position: 'VP Engineering, ScaleUp',
      avatar: '👨‍🔬',
      rating: 5,
      text: 'Alex helped us modernize our legacy system with a microservices architecture. His DevOps expertise and clean code practices have significantly improved our development workflow.',
      project: 'System Modernization',
    },
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
    <section id="testimonials" className="py-section bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
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
            Client Reviews
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 font-poppins"
            variants={itemVariants}
          >
            What Clients <span className="text-gradient-primary">Say</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Don't just take my word for it. Here's what clients and colleagues 
            have to say about working with me.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="card-gradient p-6 h-full hover:shadow-glow transition-all duration-300 relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <Quote className="h-8 w-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Project Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {testimonial.project}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 bg-gradient-primary flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          className="mt-16 text-center card-gradient rounded-3xl p-8 max-w-2xl mx-auto"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-accent text-accent" />
            ))}
          </div>
          <div className="text-3xl font-bold text-gradient-primary mb-2">5.0 / 5.0</div>
          <p className="text-muted-foreground">
            Average rating from <span className="font-semibold text-foreground">25+ projects</span> and satisfied clients
          </p>
          <div className="grid grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient-accent">100%</div>
              <div className="text-sm text-muted-foreground">Project Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient-primary">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient-accent">95%</div>
              <div className="text-sm text-muted-foreground">On-Time Delivery</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;