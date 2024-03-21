import React from 'react';

function Sidebar() {
  return (
    <div className="pt-20 mt-6 hidden sm:block w-60 h-full bg-black fixed top-0 left-0 overflow-y-auto">
      <div>
        <a className="font-semibold pl-6 text-white ">Recommended Channels</a>
      </div>
      <div className="flex mt-5 ml-3 ">
        <div className="w-8 h-8 rounded-full overflow-hidden ">
        <img src="https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?w=900&t=st=1710827404~exp=1710828004~hmac=26946323a57018c8d24db0a18e44e90d59fed4f3727c33c471bd1623c73b3813" alt="Your Image" className="w-full h-full object-cover" />
        </div>
        <div className="pt-1">
        <a className="font-semibold pl-4  text-white">Channel 1</a>
        </div>
      </div>
      <div className="flex mt-5 ml-3 ">
        <div className="w-8 h-8 rounded-full overflow-hidden ">
        <img src="https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?w=900&t=st=1710827404~exp=1710828004~hmac=26946323a57018c8d24db0a18e44e90d59fed4f3727c33c471bd1623c73b3813" alt="Your Image" className="w-full h-full object-cover" />
        </div>
        <div className="pt-1">
        <a className="font-semibold pl-4  text-white">Channel 2</a>
        </div>
      </div>
      <div className="flex mt-5 ml-3 ">
        <div className="w-8 h-8 rounded-full overflow-hidden ">
        <img src="https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?w=900&t=st=1710827404~exp=1710828004~hmac=26946323a57018c8d24db0a18e44e90d59fed4f3727c33c471bd1623c73b3813" alt="Your Image" className="w-full h-full object-cover" />
        </div>
        <div className="pt-1">
        <a className="font-semibold pl-4  text-white">Channel 3</a>
        </div>
      </div>
      <div className="flex mt-5 ml-3 ">
        <div className="w-8 h-8 rounded-full overflow-hidden ">
        <img src="https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?w=900&t=st=1710827404~exp=1710828004~hmac=26946323a57018c8d24db0a18e44e90d59fed4f3727c33c471bd1623c73b3813" alt="Your Image" className="w-full h-full object-cover" />
        </div>
        <div className="pt-1">
        <a className="font-semibold pl-4  text-white">Channel 4</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;