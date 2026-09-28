import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  const [status, setStatus] = useState('');
  const submit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (window.sendPortfolioMessage) {
      window.sendPortfolioMessage(data);
      setStatus('Your email app has been opened with the message pre-filled.');
    }
  };
  return (
    <section className='section-auto pb-32' id='contact'>
      <div className="container mx-auto">
        <div className='grid lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView='show' viewport={{ once: true }}>
            <p className='eyebrow'>Contact</p><h2 className='text-[48px] lg:text-[76px] leading-[0.95] mb-7'>Let's build something <span className='text-gradient'>useful.</span></h2>
            <p className='text-white/65 max-w-lg mb-8'>Have a role, project or engineering problem worth discussing? Send me a note and the site will prepare an email directly to me — no server required.</p>
            <a className='text-xl text-accent' href='mailto:harshbisht113322@gmail.com'>harshbisht113322@gmail.com</a>
          </motion.div>
          <motion.form onSubmit={submit} variants={fadeIn('left', 0.3)} initial='hidden' whileInView='show' viewport={{ once: true }} className='glass-card p-7 lg:p-9 flex flex-col gap-y-5'>
            <label className='form-label'>Name<input required name='name' className='form-field' type="text" placeholder='Your name' /></label>
            <label className='form-label'>Email<input required name='email' className='form-field' type="email" placeholder='you@example.com' /></label>
            <label className='form-label'>Message<textarea required name='message' rows='5' className='form-field resize-none' placeholder='Tell me what you would like to discuss'></textarea></label>
            <button className='btn btn-lg self-start' type='submit'>Send Message</button>
            {status && <p className='text-sm text-white/60'>{status}</p>}
          </motion.form>
        </div>
        <div className='border-t border-white/10 mt-20 pt-7 text-sm text-white/40 flex flex-col sm:flex-row justify-between gap-2'><span>© {new Date().getFullYear()} Harsh Bisht</span><span>Java · Spring Boot · Microservices · Full Stack</span></div>
      </div>
    </section>
  )
};
export default Contact;
