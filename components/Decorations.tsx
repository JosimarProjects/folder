import React from 'react';

export const OrangeSplash1 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={`absolute fill-orange-600 opacity-90 -z-0 ${className}`} xmlns="http://www.w3.org/2000/svg">
    <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,31.7C59,41.9,47.1,49.5,35.2,55.8C23.3,62.1,11.4,67.1,-1.3,69.4C-14,71.7,-28.3,71.3,-41.2,65.6C-54.1,59.9,-65.6,48.9,-74.1,36.1C-82.6,23.3,-88.1,8.7,-85.8,-4.8C-83.5,-18.3,-73.4,-30.7,-62.4,-40.5C-51.4,-50.3,-39.5,-57.5,-27.2,-66.1C-14.9,-74.7,-2.2,-84.7,6.8,-96.5L15.8,-108.3" transform="translate(100 100)" />
  </svg>
);

export const OrangeSplash2 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={`absolute fill-orange-500 opacity-90 -z-0 ${className}`} xmlns="http://www.w3.org/2000/svg">
    <path d="M41.3,-72.8C54.4,-67.5,66.6,-59.6,76.4,-49.1C86.2,-38.6,93.6,-25.5,92.6,-12.9C91.6,-0.3,82.2,11.8,73.4,23.4C64.6,35,56.4,46.1,46.5,54.8C36.6,63.5,25,69.8,12.7,71.7C0.4,73.6,-12.6,71.1,-24.5,66.3C-36.4,61.5,-47.2,54.4,-57.2,45.4C-67.2,36.4,-76.4,25.5,-80.7,12.8C-85,-0.0,-84.4,-14.7,-77.7,-27.2C-71,-39.7,-58.2,-50.1,-45.5,-55.5C-32.8,-60.9,-20.2,-61.3,-7.4,-59.8L5.4,-58.3" transform="translate(100 100)" />
  </svg>
);

export const PageCorner = () => (
    <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 bg-white/10 w-16 h-16 origin-bottom-left rotate-45 transform translate-x-8 -translate-y-8 shadow-md"></div>
    </div>
);