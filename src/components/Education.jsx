import { motion } from "framer-motion";
import { EDUCATIONS, EXPERIENCES } from "../constants";

const Education = () => {
   return (
      <div className="pb-4">
         <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl mix-blend-difference"
         >
            Education
         </motion.h2>
         <div>
            {EDUCATIONS.map((education, index) => (
               <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                  <motion.div
                     whileInView={{ opacity: 1, x: 0 }}
                     initial={{ opacity: 0, x: -100 }}
                     transition={{ duration: 1 }}
                     className="w-full lg:w-1/4"
                  >
                     <p className="mb-2 text-sm text-stone-400 mix-blend-difference">
                        {education.period}
                     </p>
                  </motion.div>
                  <motion.div
                     whileInView={{ opacity: 1, x: 0 }}
                     initial={{ opacity: 0, x: 100 }}
                     transition={{ duration: 1 }}
                     className="w-full max-w-xl lg:w-3/4"
                  >
                     <h3 className="mb-2 font-semibold mix-blend-difference">
                        {education.degree} -{" "}
                        <span className="text-sm text-stone-500 mix-blend-difference">
                           {education.institution}
                        </span>
                     </h3>
                     <p className="mb-4 text-stone-400 mix-blend-difference">
                        {education.description}
                     </p>
                  </motion.div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Education;
