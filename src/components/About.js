import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });
  const stats = [
    { end: 10, suffix: '+', label: 'Java/Spring apps modernized' },
    { end: 15, suffix: '+', label: 'RHEL hosts upgraded' },
    { end: 700, suffix: '+', label: 'LeetCode problems' },
    { end: 80, suffix: '%', label: 'Manual reconciliation reduced' },
  ];
  return (
    <section className="section-auto" id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center'>
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView='show' viewport={{ once: true }} className='glass-card p-8 lg:p-10'>
            <p className='eyebrow'>Current focus</p>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>Backend-first engineer who likes making complex systems simpler.</h3>
            <p className='text-white/70 mb-6'>At KPMG India, I work on enterprise modernization for Goldman Sachs, including Java and Spring Boot upgrades, JMS workflows and RHEL infrastructure migration. I also built a reconciliation platform designed to process 1M+ records across SQL, Excel and CSV sources.</p>
            <div className='flex flex-wrap gap-2'>
              {['Java 17/21','Spring Boot','Microservices','Spring Security','MySQL','Docker','Kubernetes','ReactJS'].map(x => <span key={x} className='skill-pill'>{x}</span>)}
            </div>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.4)} initial='hidden' whileInView='show' viewport={{ once: true }}>
            <div className='grid sm:grid-cols-2 gap-4'>
              {stats.map((s) => <div key={s.label} className='stat-card'>
                <div className='text-[42px] font-terirary text-gradient mb-2'>{inView ? <CountUp start={0} end={s.end} duration={2.2} /> : 0}{s.suffix}</div>
                <div className='text-sm tracking-wide text-white/70'>{s.label}</div>
              </div>)}
            </div>
            <div className='mt-4 glass-card p-6'>
              <div className='text-sm uppercase tracking-[3px] text-accent mb-2'>Problem solving</div>
              <div className='text-xl font-semibold'>LeetCode rating 1717 · 700+ problems</div>
              <div className='text-white/60 mt-1'>Plus 400+ problems on GeeksforGeeks.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};
export default About;
