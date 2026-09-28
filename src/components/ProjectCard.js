import React from "react";
// import { ReactDOM } from "react-dom";

function ProjectCard(props) {
  return (
    <>
      {/* image */}
      <div className='group relative overflow-hidden border-2
      border-white/50 rounded-xl'>
        {/* overlay */}
        <div className='group-hover:bg-black/70 w-full h-full
        absolute z-40 transition-all duration-300'></div>
        {/* image */}
        <img className='group-hover:scale-125 transition-all duration-500' src={props.img} alt="{props.imgAlt}" />
        {/* pre title */}
        <div className='absolute -bottom-full left-12 group-hover:bottom-24
        transition-all duration-500 z-50'>
          <span className='text-gradient'>{ props.imgPreTitle }</span>
        </div>
        {/* title */}
        <div className='absolute -bottom-full left-12 group-hover:bottom-14
        transition-all duration-700 z-50'>
          <span className='text-3xl text-white'>{ props.imgTitle }</span>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;