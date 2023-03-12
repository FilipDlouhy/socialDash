        "use client";
        import {
        faArrowCircleLeft,
        faArrowCircleRight,
        } from "@fortawesome/free-solid-svg-icons";
        import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
        import { User, Video, VideoComment } from "@prisma/client";
import axios from "axios";
        import React, { useState, useRef, useEffect } from "react";
import uuid from "react-uuid";
        import TopOfPage from "../TopOfPage/TopOfPage";
import VideoCommentComponent from "./VideoCommentComponent";
        import VideoComponent from "./VideoComponent";
import VideoPlayBTNS from "./VideoPlayBTNS";
        import VideoProfile from "./VideoProfile";

        interface video {
        user: friendWithImg;
        video: Video;
        }
        interface friendWithImg {
        id: string;
        userName: string;
        img: string | null;
        }

        interface props {
        userId: string;
        videos: video[];
        user:User
        }

        function VideosContainer({user, userId, videos }: props) {
        useEffect(() => {
            setVideos(videos);
            axios.post("http://localhost:3000/api/getVideoComments",{videoId:videos[0].video.id}).then((res)=>
            {
                setVideoComments(res.data)
            })

        }, []);

    
        
        


        const [Videos, setVideos] = useState<video[]>();
        const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
        const [videoComments,setVideoComments] = useState<VideoComment[]>([])
        const [videoDescription,setVideoDescription] = useState<string>(videos[0].video.description)
        const [text,setText] = useState<string>("")
        const [Play,setPlay] = useState<boolean>(true)
        const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

        const playNextVideo = () => {
            if (Videos && currentVideoIndex < Videos.length - 1) {
            setCurrentVideoIndex(currentVideoIndex + 1);
            setVideoDescription(Videos[currentVideoIndex + 1].video.description)
                    axios.post("http://localhost:3000/api/getVideoComments",{videoId:Videos[currentVideoIndex + 1].video.id}).then((res)=>
                    {
                        setVideoComments(res.data)
                    })


            } else {
            setCurrentVideoIndex(0);
            const currentVideo = videoRefs.current[0];
            if(Videos)
            {
                setVideoDescription(Videos[0].video.description)
                    axios.post("http://localhost:3000/api/getVideoComments",{videoId:Videos[0].video.id}).then((res)=>
                    {
                        setVideoComments(res.data)
                    })


            }
            if (currentVideo) {
                currentVideo.play();
            }
            }
            if (Videos && currentVideoIndex < Videos.length - 1) {
            const currentVideo = videoRefs.current[currentVideoIndex];
            const nextVideo = videoRefs.current[currentVideoIndex + 1];

            if (currentVideo && nextVideo) {
                currentVideo.pause();
                nextVideo.play();
                setCurrentVideoIndex(currentVideoIndex + 1);
                setVideoDescription(Videos[currentVideoIndex + 1].video.description)
                    axios.post("http://localhost:3000/api/getVideoComments",{videoId:Videos[currentVideoIndex + 1].video.id}).then((res)=>
                    {
                        setVideoComments(res.data)
                    })

            }
            }
        };

        const playPreviousVideo = () => {
            if (currentVideoIndex > 0&& Videos) {
            setCurrentVideoIndex(currentVideoIndex - 1);
            setVideoDescription(Videos[currentVideoIndex  - 1].video.description)
                    axios.post("http://localhost:3000/api/getVideoComments",{videoId:Videos[currentVideoIndex - 1].video.id}).then((res)=>
                    {
                        setVideoComments(res.data)
                    })

            } else {
            if (Videos) {
                setCurrentVideoIndex(Videos.length - 1);
                setVideoDescription(Videos[Videos.length - 1].video.description)
                    axios.post("http://localhost:3000/api/getVideoComments",{videoId:Videos[currentVideoIndex - 1].video.id}).then((res)=>
                    {
                        setVideoComments(res.data)
                    })

            }
            }
            if (currentVideoIndex > 0 && Videos) {
            const currentVideo = videoRefs.current[currentVideoIndex];
            const previousVideo = videoRefs.current[currentVideoIndex - 1];
            setVideoDescription(Videos[currentVideoIndex  - 1].video.description)
                    axios.post("http://localhost:3000/api/getVideoComments",{videoId:Videos[currentVideoIndex - 1].video.id}).then((res)=>
                    {
                        setVideoComments(res.data)
                    })


            if (currentVideo && previousVideo) {
                currentVideo.pause();
                previousVideo.play();
                setCurrentVideoIndex(currentVideoIndex - 1);
            }
            }
        };
        let slideshowWidth = (340 + 2 * 20) * videos.length; // pr

        function addComment() {
            if(text.length > 1) 
            {
                let date= new Date()
                let id = uuid()
                if(Videos && user.img)
                {
                    let newComment:VideoComment={
                        created_at:date,id:id,postId:Videos[currentVideoIndex].video.id,text:text,userId:user.id,userImg:user.img,userName:user.userName
                    }
                    let arr = videoComments
                    arr?.push(newComment)
                    setVideoComments(arr)
                    axios.post("http://localhost:3000/api/createVideoComment",newComment)
                    
                }

            }
            
        }


        


        return (
            <div className="w-full h-screen">
             <TopOfPage showSearch userId="" />

            <div className="w-full VideoHeight flex">
                <div className="h-full w-1/5 flex-col justify-between  overflow-x-hidden">

                    <div className="w-11/12 h-36   overflow-x-hidden ">
                        <div style={{ width: `${slideshowWidth}px` }} className="w-full h-full flex   overflow-x-hidden ">
                        {Videos && Videos.map((video, index) => (
                            <VideoProfile  currentVideoIndex={currentVideoIndex}  index={index}  user={video.user}  />
                            ))}
                        </div>
                    </div>


                    <div className="w-full h-5/6 ">


                        <div className="w-full flex items-end justify-center h-2/4">
                        <textarea value={videoDescription} className="bg-transparent  text-white font-semibold text-2xl focus:border-none focus:outline-none  text-center   w-11/12 h-52 rounded flex items-center justify-center resize-none "></textarea>

                        </div>


                        <div className="w-full h-2/4 flex flex-col justify-end items-center">
                            <textarea onChange={(e)=>{setText(e.target.value)}} className="text-white font-semibold text-lg ChatDeleteBtn focus:border-none focus:outline-none  text-center bg-emerald-400  w-11/12 h-40 rounded flex items-center justify-center resize-none "></textarea>
                            <button onClick={()=>{addComment()}} className=" w-8/12 h-10 hvr-pop bg-cyan-300 text-lg font-semibold  ChatDeleteBtn my-8 text-white">Add Comments</button>
                        </div>


                    </div>            

                    
                </div>

                <div className="h-full w-3/5 relative overflow-hidden">
                {Videos && Videos.map((video, index) => (
                        <VideoComponent currentVideoIndex={currentVideoIndex} index={index} video={video.video.video} videoRefs={videoRefs} />
                        ))}
                </div>
                <div className="h-full w-1/5">
                     <VideoPlayBTNS setPlay={setPlay} Play={Play} currentVideoIndex={currentVideoIndex} playNextVideo={playNextVideo} playPreviousVideo={playPreviousVideo}/> 
         
                    <div className="w-full border-t-2 overflow-x-hidden  overflow-y-auto;  border-b-2  border-white h-4/5">
                        {
                            videoComments?.map((comment)=>{
                                return <VideoCommentComponent comment={comment}/>

                            })
                        }

                    </div>    


 

                </div>
            </div>
            </div>
        );
        }

        export default VideosContainer;