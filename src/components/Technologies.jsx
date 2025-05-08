import { FaNodeJs, FaVuejs } from "react-icons/fa";
import { RiFlutterFill, RiReactjsLine } from "react-icons/ri";
import { SiDjango, SiThreedotjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import { GrMysql } from "react-icons/gr";
import React, { forwardRef } from "react";

const iconVariants = (duration) => ({
   initial: { y: -10 },
   animate: {
      y: [10, -10],
      transition: {
         duration: duration,
         ease: "linear",
         repeat: Infinity,
         repeatType: "reverse",
      },
   },
});
const Technologies = forwardRef((props, ref) => {
   return (
      <div className="pb-24" ref={ref}>
         <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl mix-blend-difference"
         >
            Technologies
         </motion.h2>
         <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
         >
            <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
               <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(2.5)}
               className="p-4"
            >
               <TbBrandNextjs className="text-7xl " />
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(3)}
               className="p-4"
            >
               <SiDjango className="text-7xl text-green-800" />
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(2)}
               className="p-4"
            >
               <RiFlutterFill className="text-7xl text-cyan-500" />
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(6)}
               className="p-4"
            >
               <FaNodeJs className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(4)}
               className="p-4"
            >
               <GrMysql className="text-7xl text-sky-400" />
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(3)}
               className="p-4"
            >
               <SiThreedotjs className="text-7xl text-stone-200" />
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(5)}
               className="p-4"
            >
               <FaVuejs className="text-7xl text-green-700" />
            </motion.div>
         </motion.div>
      </div>
   );
});

export default Technologies;
