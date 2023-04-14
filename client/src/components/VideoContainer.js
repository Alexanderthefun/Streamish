// import React, { useState, useEffect } from "react";
// import VideoList from "./videoList.js";
// import VideoForm from "./VideoForm.js";
// import { getAllVideos, addVideo } from "../modules/videoManager";

// const VideoContainer = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     getAllVideos().then((videos) => {
//       setVideos(videos);
//     });
//   }, []);

//   const handleAddVideo = async (video) => {
//     await addVideo(video);
//     getAllVideos().then((videos) => {
//       setVideos(videos);
//     });
//   };

//   return (
//     <div className="videoContainer">
//       <VideoForm onAddVideo={handleAddVideo} />
//       <VideoList videos={videos} />
//     </div>
//   );
// };

// export default VideoContainer;


//IGNORE ALL THIS FOR NOW. MIGHT IMPLEMENT LATER