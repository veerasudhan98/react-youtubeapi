import React from 'react'
import VideoItem from './VideoItem'

const VideoList = (props)=> {
    const renderedList = props.videoList.map((video)=>{
        return <VideoItem video={video} click={props.click} key={video.id.videoId}/>
    })
return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList