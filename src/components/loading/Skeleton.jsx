// Skeleton.jsx

import React from 'react';

const Skeleton = ({ width, height, className }) => {
  return (
    <div
      className={`bg-[#798291] dark:bg-[#9ba6b8] relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#798291] via-[#9ba6b8] to-[#798291] dark:from-[#9ba6b8] dark:via-[#798291] dark:to-[#9ba6b8] animate-wave">

      </div>
      <style>{`
        @keyframes
        wave {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }
        .animate-wave {
          animation: wave 1.5s infinite;
        }
      `}</style>
    </div >
  );
};

export default Skeleton;
