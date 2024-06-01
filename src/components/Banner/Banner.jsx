import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../axios";
import { Trending, image_url } from "../../urls/url";

const Banner = () => {
   const [movie, setMovie] = useState();

   useEffect(() => {
      axios
         .get(Trending)
         .then((res) => {
            const random = Math.floor(Math.random() * 20);
            setMovie(res.data.results[random]);
         })
         .catch((err) => {
            console.log(err);
         });

      return () => {};
   }, []);

   return (
      <div
         style={{
            backgroundImage: `url(${movie && image_url + movie.backdrop_path})`,
         }}
         className="banner"
      >
         <div className="content">
            <h1 className="title">{movie && movie.title}</h1>
            <div className="buttons-parent">
               <button className="buttons">play</button>
               <button className="buttons">my list</button>
            </div>
            <h1 className="description">{movie && movie.overview}</h1>
         </div>
         <div className="fade-bottom"></div>
      </div>
   );
};

export default Banner;
