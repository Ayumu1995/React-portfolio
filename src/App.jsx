import Background3D from "./components/Background3D";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import LoadingCircle from "./components/LoadingCircle";

import { useEffect, useState, useRef, Suspense } from "react";
import { useProgress } from "@react-three/drei";

const App = () => {
   const [phase, setPhase] = useState("idle");
   const [hasPassedTech, setHasPassedTech] = useState(false);
   const [showLoading, setShowLoading] = useState(true);
   const { progress } = useProgress();
   const techRef = useRef(null);
   const expRef = useRef(null);
   const contactRef = useRef(null);

   useEffect(() => {
      if (progress === 100) {
         const timeout = setTimeout(() => setShowLoading(false), 300);
         return () => clearTimeout(timeout);
      }
   }, [progress]);

   useEffect(() => {
      const sections = [
         { ref: techRef, key: "tech" },
         { ref: expRef, key: "exp" },
         { ref: contactRef, key: "contact" },
      ];

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  const found = sections.find((s) => s.ref.current === entry.target);
                  if (found) {
                     setPhase(found.key);
                     if (found.key === "tech") setHasPassedTech(true);
                  }
               }

               // 上に戻った時に hasPassedTech を false にする
               if (
                  !entry.isIntersecting &&
                  entry.target === techRef.current &&
                  window.scrollY < entry.boundingClientRect.y
               ) {
                  setPhase("idle");
                  setHasPassedTech(false);
               }
            });
         },
         { threshold: 0.5 }
      );

      sections.forEach(({ ref }) => {
         if (ref.current) observer.observe(ref.current);
      });

      return () => observer.disconnect();
   }, []);

   return (
      <div className="overflow-x-hidden text-stone-300 antialiased">
         {showLoading && <LoadingCircle />}
         <div className="fixed inset-0 -z-10">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
         </div>
         <div className="container mx-auto px-8">
            <Background3D phase={phase} hasPassedTech={hasPassedTech} />
            <Navbar />
            <Hero />
            <Technologies ref={techRef} />
            <Projects />
            <Experience ref={expRef} />
            <Education />
            <Contact ref={contactRef} />
         </div>
      </div>
   );
};

export default App;
