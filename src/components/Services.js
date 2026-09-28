import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const expertise = [
  { name: 'Backend & Microservices', description: 'Java 17/21, Spring Boot, Spring Cloud, REST APIs, service discovery, API Gateway, JWT/RBAC and persistence with JPA/Hibernate.' },
  { name: 'Application Modernization', description: 'Legacy Java/Spring upgrades, deprecated API refactoring, dependency and runtime compatibility fixes, automated testing and migration support.' },
  { name: 'Full-Stack Engineering', description: 'ReactJS frontends backed by Node.js/Express or Spring services, with MySQL/MongoDB persistence and API-driven workflows.' },
  { name: 'DevOps & Reliability', description: 'Docker, Kubernetes, GitHub Actions, CI/CD, Maven/Gradle and Linux infrastructure modernization with a focus on repeatable delivery.' }
];

const Services = () => (
  <section className='section-auto' id='services'>
    <div className="container mx-auto">
      <motion.div variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show' viewport={{ once: true }} className='max-w-3xl mb-12'>
        <p className='eyebrow'>Engineering toolkit</p><h2 className='h2 text-accent'>What I Do.</h2>
        <p className='text-white/70'>I work across backend engineering, modernization and product development — from service architecture and security to deployment-ready applications.</p>
      </motion.div>
      <div className='grid md:grid-cols-2 gap-5'>
        {expertise.map((item, i) => <motion.div key={item.name} variants={fadeIn(i % 2 ? 'left' : 'right', 0.25)} initial='hidden' whileInView='show' viewport={{ once: true }} className='glass-card p-7 group'>
          <div className='text-accent text-sm tracking-[3px] mb-3'>0{i+1}</div><h3 className='text-2xl font-semibold mb-3'>{item.name}</h3><p className='text-white/65 leading-relaxed'>{item.description}</p>
        </motion.div>)}
      </div>
    </div>
  </section>
);
export default Services;
