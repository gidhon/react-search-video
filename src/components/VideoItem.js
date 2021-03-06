import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {

    return (
        <div onClick={ () => onVideoSelect(video) } className="video-item item">
            <img
                className="ui image"
                src={ video.snippet.thumbnails.medium.url }
                alt={ video.snippet.thumbnails.description }
            />
            <div className="content">
                <span className="header">{ video.snippet.title }</span>
                <span className="description" dangerouslySetInnerHTML={{ __html: video.snippet.title }}></span>
            </div>
        </div>
    )
}

export default VideoItem;
