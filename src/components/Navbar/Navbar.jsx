import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
   const [color, setColor] = useState(false);

   addEventListener("scroll", () => {
      if (window.scrollY > 100) {
         setColor(true);
      } else {
         setColor(false);
      }
   });

   return (
      <div className={`navbarMain ${color && "blackclass"}`}>
         <img className="h-12" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
         <div className="flex gap-8">
            <div>Home</div>
            <div>Movies</div>
            <div>Tv Shows</div>
            <div>Recently Added</div>
         </div>
         <div className="flex gap-10 m-3 align-centre">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-bell"></i>
            <img className="h-6" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
         </div>
      </div>
   );
}

export default Navbar;
