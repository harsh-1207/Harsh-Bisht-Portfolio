import React from "react";
import Image from "../assets/profile_main.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="min-h-[82vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-14">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/15 bg-white/5 text-sm text-white/80">
              <span className="w-2 h-2 rounded-full bg-green-400"></span> Software Engineer · KPMG India
            </motion.div>
            <motion.h1 variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-[54px] font-bold leading-[0.9] lg:text-[92px] tracking-tight">
              HARSH <span className="text-gradient">BISHT</span>
            </motion.h1>
            <motion.div variants={fadeIn("up", 0.4)} initial="hidden" whileInView="show" viewport={{ once: true }} className="my-6 text-[27px] lg:text-[38px] font-semibold leading-[1.15]">
              <span className="text-white mr-3">I build</span>
              <TypeAnimation sequence={["Java Microservices", 1800, "Backend Systems", 1800, "Full-Stack Products", 1800]} speed={50} className="text-accent" wrapper="span" repeat={Infinity} />
            </motion.div>
            <motion.p variants={fadeIn("up", 0.5)} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-8 max-w-2xl mx-auto lg:mx-0 text-white/75">
              Software Engineer with 2 years of experience across Java, Spring Boot, microservices and application modernization. I work on scalable backend systems, legacy migrations and full-stack products with a strong focus on reliability and clean engineering.
            </motion.p>
            <motion.div variants={fadeIn("up", 0.6)} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap justify-center lg:justify-start gap-4 items-center mb-10">
              <a href="#contact" className="btn btn-lg inline-flex items-center">Contact me</a>
              <a href="#work" className="border border-white/20 rounded-full h-[56px] px-8 text-base inline-flex items-center hover:border-accent transition-colors">View projects</a>
              <a href={`${process.env.PUBLIC_URL}/Harsh_Bisht_CV.pdf`} target="_blank" rel="noreferrer" className="text-gradient btn-link">View résumé →</a>
            </motion.div>
            <motion.div variants={fadeIn("up", 0.7)} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex text-[22px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a aria-label="GitHub" target="_blank" rel="noreferrer" href="https://github.com/harsh-1207"><FaGithub /></a>
              <a aria-label="LinkedIn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/harsh-bisht-7532b4202/"><FaLinkedin /></a>
            </motion.div>
          </div>
          <motion.div variants={fadeIn("down", 0.5)} initial="hidden" whileInView="show" viewport={{ once: true }} className="hidden lg:flex flex-1 justify-center">
            <div className="relative max-w-[430px]">
              <div className="absolute inset-8 rounded-full bg-accent/20 blur-3xl"></div>
              <img className="relative w-full max-h-[600px] object-contain" src={Image} alt="Harsh Bisht" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
