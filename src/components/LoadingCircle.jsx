import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

const LoadingCircle = () => {
   const { progress } = useProgress();
   const [hide, setHide] = useState(false);

   useEffect(() => {
      if (progress === 100) {
         setTimeout(() => setHide(true), 500); // 少し遅延でフェードアウト風
      }
   }, [progress]);

   if (hide) return null;

   const radius = 90;
   const circumference = 2 * Math.PI * radius;
   const offset = circumference - (progress / 100) * circumference;

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950">
         <div className="relative w-48 h-48">
            <svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 150 150">
               <circle
                  cx="75"
                  cy="75"
                  r={radius}
                  stroke="#333"
                  strokeWidth="4"
                  fill="transparent"
               />
               <circle
                  cx="75"
                  cy="75"
                  r={radius}
                  stroke="#ffffff"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  className="transition-all duration-200 ease-out"
               />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl font-semibold tracking-wide">
               <span>Loading...</span>
               <span className="text-sm opacity-60">{Math.floor(progress)}%</span>
            </div>
         </div>
      </div>
   );
};

export default LoadingCircle;
