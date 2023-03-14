        "use client";
        import {
        faArrowCircleLeft,
        faArrowCircleRight,
        faHeart,
        } from "@fortawesome/free-solid-svg-icons";
        import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
        import { User, Video, VideoComment } from "@prisma/client";
import axios from "axios";
        import React, { useState, useRef, useEffect } from "react";
import uuid from "react-uuid";
        import TopOfPage from "../TopOfPage/TopOfPage";
import VideoAddCommentsAndLikes from "./VideoAddCommentsAndLikes";
import VideoCommentComponent from "./VideoCommentComponent";
        import VideoComponent from "./VideoComponent";
import VideoPlayBTNS from "./VideoPlayBTNS";
import VideoProfiels from "./VideoProfiels";
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

        interface VideoElement extends HTMLVideoElement {
            timeout?: ReturnType<typeof setTimeout>;
          }
          

        function VideosContainer({user, userId, videos }: props) {



        const [Videos, setVideos] = useState<video[]>();
        const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
        const [videoComments,setVideoComments] = useState<VideoComment[]>([])
        const [videoDescription,setVideoDescription] = useState<string>(videos[0].video.description)
        const [videoCategory,setVideoCategory] = useState<string>(videos[0].video.Category)
        const [text,setText] = useState<string>("")
        const [Liked,setLiked] = useState<boolean>(false)
        const [Play,setPlay] = useState<boolean>(false)
        const videoRefs = useRef<VideoElement[]>([]);
        const [AddingComment,setAddingComment] = useState<boolean>(false)
        useEffect(() => {
            setVideos(videos);
            axios.post("http://localhost:3000/api/getVideoComments",{videoId:videos[0].video.id}).then((res)=>
            {
                setVideoComments(res.data)
            })
            if(videos[0].video.likes.includes(userId))
            {
                setLiked(true)
            }
        }, []);
        const playNextVideo = () => {
            console.log("AAAAAA")
            if (Videos && currentVideoIndex < Videos.length - 1) {
            setCurrentVideoIndex(currentVideoIndex + 1);
            setVideoDescription(Videos[currentVideoIndex + 1].video.description)
            setVideoCategory(Videos[currentVideoIndex  + 1].video.Category)
            if(Videos[currentVideoIndex + 1].video.likes.includes(userId))
            {
                setLiked(true)
            }
            else
            {
                setLiked(false)
            }
                    axios.post("http://localhost:3000/api/getVideoComments",{videoId:Videos[currentVideoIndex + 1].video.id}).then((res)=>
                    {
                        setVideoComments(res.data)
                    })


            } else {
            setCurrentVideoIndex(0);
            const currentVideo = videoRefs.current[0];
            if(Videos)
            {
                if(Videos[0].video.likes.includes(userId))
                {
                    setLiked(true)
                }
                 
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
                if(Videos[currentVideoIndex + 1].video.likes.includes(userId))
                {
                    setLiked(true)
                }
                else
                {
                    setLiked(false)
                }
                 
                setVideoDescription(Videos[currentVideoIndex + 1].video.description)
                setVideoCategory(Videos[currentVideoIndex  + 1].video.Category)
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
            if(Videos[currentVideoIndex - 1].video.likes.includes(userId))
            {
                setLiked(true)
            }
            else
            {
                setLiked(false)
            }
             
            setVideoDescription(Videos[currentVideoIndex  - 1].video.description)
            setVideoCategory(Videos[currentVideoIndex  - 1].video.Category)
                    axios.post("http://localhost:3000/api/getVideoComments",{videoId:Videos[currentVideoIndex - 1].video.id}).then((res)=>
                    {
                        setVideoComments(res.data)
                    })

            } else {
            if (Videos) {
                setCurrentVideoIndex(Videos.length - 1);
                if(Videos[currentVideoIndex - 1].video.likes.includes(userId))
                {
                    setLiked(true)
                }
                else
                {
                    setLiked(false)
                }
                setVideoDescription(Videos[Videos.length - 1].video.description)
                setVideoCategory(Videos[currentVideoIndex  - 1].video.Category)
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
            setVideoCategory(Videos[currentVideoIndex  - 1].video.Category)
            if(Videos[currentVideoIndex - 1].video.likes.includes(userId))
                {
                    setLiked(true)
                }
                else
                {
                    setLiked(false)
                }
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
            if(text.length > 1 && AddingComment === false) 
            {
                setAddingComment(true)
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
                    axios.post("http://localhost:3000/api/createVideoComment",newComment).then((res)=>{
                        setAddingComment(false)
                    })
                    
                }

            }
            
        }

        useEffect(() => {
            if (Play) {
                const intervalId = setInterval(() => {
                    playNextVideo();
                }, 4000);
                return () => clearInterval(intervalId);
            }
        }, [Play, currentVideoIndex]);
        function like()
        {
            if(Liked)
            {
                setLiked(false)
                let arr:video[] = []
                Videos?.map((video,index)=>{
                    if(index === currentVideoIndex)
                    {
                        axios.post("http://localhost:3000/api/unLikeVideo",{postId:Videos[currentVideoIndex].video.id,userId:userId})

                        let likes:string[]=[]
                        video.video.likes.map((like)=>{
                            if(like !== userId)
                            {
                                likes.push(like)
                            }
                        })

                        let newVideo:Video ={Category:video.video.Category,created_at:video.video.created_at,description:video.video.description,id:video.video.id,likes:likes,userId:video.video.userId,video:video.video.video}
                        arr.push({user:video.user,video:newVideo})
                    }
                    else
                    {
                        arr.push(video)
                    }

                })
                setVideos(arr)
            }
            else
            {
                setLiked(true)
                let arr:video[] = []
                Videos?.map((video,index)=>{
                    if(index === currentVideoIndex)
                    {
                        axios.post("http://localhost:3000/api/likeVideo",{postId:Videos[currentVideoIndex].video.id,userId:userId})
                        let likes:string[]= video.video.likes
                        likes.push(userId)
                    
                        let newVideo:Video ={Category:video.video.Category,created_at:video.video.created_at,description:video.video.description,id:video.video.id,likes:likes,userId:video.video.userId,video:video.video.video}
                        arr.push({user:video.user,video:newVideo})
                    }
                    else
                    {
                        arr.push(video)
                    }
                })
                setVideos(arr)
            }

        }


        return (
            <div className="w-full h-screen ">
             <TopOfPage showSearch userId="" />

            <div className="w-full VideoHeight flex ">
                <div className="h-full w-1/5 flex-col pb-5 justify-between overflow-y-hidden  overflow-x-hidden">

                    <div className="w-full h-5/6 ">
                        <VideoProfiels Videos={Videos} currentVideoIndex={currentVideoIndex} slideshowWidth={slideshowWidth}/>

                        <div className="w-full flex flex-col items-center justify-center h-1/4">
                            <p className="text-3xl font-semibold text-white">Video Description</p>
                        <p  className="bg-transparent  text-white font-semibold text-2xl focus:border-none focus:outline-none  text-center   w-8/12 h-36 rounded flex items-center justify-center resize-none ">{videoDescription}</p>

                        </div>
                        <div className="w-full flex flex-col items-center justify-center h-1/4">
                            <p className="text-3xl font-semibold text-white">Category</p>
                            <p className="bg-transparent  text-white font-semibold text-2xl focus:border-none focus:outline-none  text-center   w-8/12 h-36 rounded flex items-center justify-center resize-none ">{videoCategory}</p>

                        </div>

                        <VideoAddCommentsAndLikes AddingComment={AddingComment} Liked={Liked} addComment={addComment} like={like} setText={setText} />

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