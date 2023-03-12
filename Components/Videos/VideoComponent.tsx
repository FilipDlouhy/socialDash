import React from 'react'

interface props
{
    videoRefs: React.MutableRefObject<(HTMLVideoElement | null)[]>
    currentVideoIndex:number
    video:string
    index:number
}


function VideoComponent({currentVideoIndex,index,video,videoRefs}:props) {
  return (
        <div className='video h-full' >
        <video 
            ref={(el) => (videoRefs.current[index] = el)}
            onClick={(e) => {
            if (e.currentTarget.paused) {
                e.currentTarget.play();
            } else {
                e.currentTarget.pause();
            }
            }}
            className={`video w-full h-full object-cover object-center ${
            index === currentVideoIndex ? 'active' : ''
            }`}
            style={{ transform: `translateY(-${currentVideoIndex * 100}%)` }}
            src={video}
            autoPlay={index === currentVideoIndex}
            loop
        ></video>
    </div>
  )
}

export default VideoComponent