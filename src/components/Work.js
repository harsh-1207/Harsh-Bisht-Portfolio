import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const projects = [
  { tag:'Enterprise Platform', title:'Reconciliation Platform', stack:'Java · Spring Boot · MySQL · ReactJS', body:'Scalable reconciliation platform processing 1M+ records from SQL, Excel and CSV sources with a pluggable parser architecture. Designed to reduce manual reconciliation effort by ~80%.' },
  { tag:'Microservices', title:'Online Exam Platform', stack:'Spring Boot · Spring Cloud · MySQL · Docker · Kubernetes', body:'Microservices-based exam platform with Auth, User, Exam and Result services behind an API Gateway and Eureka, secured with JWT and role-based access for students, teachers and admins.' },
  { tag:'Full Stack', title:'Sarthi — College Placement Portal', stack:'ReactJS · Node.js · Express.js · MongoDB', body:'Placement portal connecting students and recruiters through role-based job posting, application and placement workflows with responsive interfaces and REST APIs.' }
];

const Work = () => (
  <section className='section-auto' id='work'>
    <div className="container mx-auto">
      <motion.div variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show' viewport={{ once: true }} className='flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-12'>
        <div><p className='eyebrow'>Selected work</p><h2 className='h2 leading-tight text-accent mb-2'>Projects & Impact.</h2><p className='text-white/65 max-w-2xl'>A few systems that represent my backend, microservices and full-stack experience.</p></div>
        <a href="https://github.com/harsh-1207" target="_blank" rel="noreferrer" className='text-gradient'>Explore GitHub →</a>
      </motion.div>
      <div className='grid lg:grid-cols-3 gap-5'>
        {projects.map((p, i) => <motion.article key={p.title} variants={fadeIn('up', 0.25 + i*0.08)} initial='hidden' whileInView='show' viewport={{ once: true }} className='project-card'>
          <div className='text-accent text-xs uppercase tracking-[3px]'>{p.tag}</div><h3 className='text-2xl font-semibold mt-4 mb-3'>{p.title}</h3><div className='text-sm text-white/50 mb-5'>{p.stack}</div><p className='text-white/65 leading-relaxed'>{p.body}</p>
        </motion.article>)}
      </div>
    </div>
  </section>
);
export default Work;
