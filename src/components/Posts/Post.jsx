import React, { useEffect, useState } from "react";
import "./post.css";
import axios from "../../axios";
import { Originals, image_url } from "../../urls/url";
import YouTube from "react-youtube";
import { API_KEY } from "../../constants/constant";

const Post = (props) => {
   const [genre, setGenre] = useState([]);
   const [trailer, setTrailer] = useState("");

   useEffect(() => {
      axios
         .get(props.genre)
         .then((res) => {
            setGenre(res.data.results);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   const opts = {
      height: "390",
      width: "100%",
      playerVars: {
         autoplay: 1,
         origin: window.location.origin,
      },
   };

   const handleTrailer = (id) => {
      axios
         .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
         .then((res) => {
            if (res.data.results.length > 0) {
               setTrailer(res.data.results[0]);
            }
         })
         .catch((err) => {
            console.log(err);
         });
   };
   const handleCloseButton = () => {
      setTrailer(null);
   };

   return (
      <div className="postMaindiv">
         <h1 className="Title">{props.genre === Originals ? "Netflix Originals" : props.title}</h1>
         <div className="posters">
            {genre.map((item, ind) => {
               return (
                  <div
                     key={item.id}
                     className={props.genre === Originals ? "originalsPoster" : "otherPoster"}
                     style={{
                        backgroundImage: `url(${image_url + (props.genre === Originals ? item.backdrop_path : item.poster_path)})`,
                     }}
                     onClick={() => handleTrailer(item.id)}
                  >
                     {props.genre === Originals && (
                        <div className="card-content">
                           <h1>{item.title}</h1>
                           <p>{item.overview}</p>
                        </div>
                     )}
                  </div>
               );
            })}
         </div>
         <div className="trailer">
            {trailer && <YouTube videoId={trailer.key} opts={opts} style={{ width: "80%", marginLeft: "3%" }} />}
            {trailer && (
               <button onClick={handleCloseButton}>
                  <i className="fa-regular fa-circle-xmark closeButton "></i>
               </button>
            )}
         </div>
      </div>
   );
};

export default Post;
