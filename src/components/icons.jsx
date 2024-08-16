import React, { useState } from 'react';

const Icons = () => {
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);

  const icons = [
    { id: 1, name: "home" },
    { id: 2, name: "person" },
    { id: 3, name: "settings" },
    { id: 4, name: "heart" },
    { id: 5, name: "star" },
    { id: 6, name: "notifications" }
  ];

  const visibleIcons = icons.slice(visibleStartIndex, visibleStartIndex + 2);

  const handleScrollUp = () => {
    setVisibleStartIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleScrollDown = () => {
    setVisibleStartIndex((prevIndex) =>
      prevIndex < icons.length - 2 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div className='bg-[#ffafcc] h-40 w-14 fixed right-0 top-52 rounded-l-lg flex flex-col justify-center items-center icons-box shadow-xl'>
      <div>
      <div className='link_icons up cursor-pointer flex items-start justify-center' onClick={handleScrollUp}>
        <ion-icon name="chevron-up-outline"></ion-icon>
      </div>
      <div className='flex flex-col gap-2'>
        {visibleIcons.map((icon, idx) => (
          <div key={icon.id} className='icons_box w-10 h-10 rounded-full flex justify-center items-center'>
            <ion-icon name={icon.name}></ion-icon>
          </div>
        ))}
      </div>
      <div className='link_icons down cursor-pointer flex items-end justify-center' onClick={handleScrollDown}>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </div>
      </div>
    </div>
  );
}

export default Icons;
