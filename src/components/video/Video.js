import {useState} from 'react';
import React from 'react';
import ReactPlayer from 'react-player';


function Video(){
    const [current, setCurrent] = useState(0);
    const [videoCondition, setVideoCondition] = useState(false);
    

    const videos = [
        {title: 'Item 1', url: 'https://www.youtube.com/watch?v=nhPaWIeULKk'},
        {title: 'Item 2', url: 'https://www.youtube.com/watch?v=cLnkQAeMbIM'},
        {title: 'Item 3', url: 'https://www.youtube.com/watch?v=5qJp6xlKEug'}
    ];

    let playThisIndexedVideo = (current > videos.length - 1) ? 0 : (current === -1) ? videos.length - 1 : current;
    
    return (
        <div className="container centered">
            <div className="row">
                <div className='col-12'>
                    <ReactPlayer url={videos[playThisIndexedVideo].url} playing={videoCondition} controls={true}/>
                </div>
                <div className='col-4'>
                    <ul className="list-group">
                        {videos.map((video, index) => (
                            <li
                                className={index === playThisIndexedVideo ? 'list-group-item active' : 'list-group-item'}
                                onClick={() => setCurrent(index)}
                                key={index} >
                                    {video.title}
                            </li>
                        ))}
                    </ul>   
                    <div className='col-sm'>
                        <button className="btn btn-secondary" onClick={() => setCurrent(current - 1)}>Prev</button>
                        <button className="btn btn-danger" onClick={() => setVideoCondition(!videoCondition)}>Play/Pause</button>
                        <button className="btn btn-success" onClick={() => setCurrent(current + 1)}>Next</button>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default Video;