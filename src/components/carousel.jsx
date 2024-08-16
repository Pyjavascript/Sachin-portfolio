import React, { useEffect, useState } from 'react';

const Carousel = () => {
    const imgs = [
        { name: "Item 1", bg: "red" },
        { name: "Item 2", bg: "green" },
        { name: "Item 3", bg: "blue" },
        { name: "Item 4", bg: "yellow" },
      ];
      const [index, setIndex] = useState(0);
    
      useEffect(() => {
          const interval = setInterval(() => {
              setIndex((prevIndex) => (prevIndex + 1) % imgs.length);
          }, 3000);
  
          return () => clearInterval(interval);
      }, [imgs.length]);
      
  return (
    <div className="relative w-full h-[70vh] overflow-hidden bg-slate-400 flex">
            {imgs.map((item, idx) => (
                <div 
                    key={idx} 
                    className={`flex-shrink-0 w-full h-full flex items-center justify-center text-white text-4xl transition-transform duration-500 ease-in-out`}
                    style={{
                        backgroundColor: item.bg,
                        transform: `translateX(-${index * 100}%)`
                    }}>
                    {item.name}
                </div>
            ))}
        </div>
  );
};

export default Carousel;
