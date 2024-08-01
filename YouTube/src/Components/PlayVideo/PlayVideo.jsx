import React from 'react'
import './PlayVideo.css'
import Video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import abhi from '../../assets/abhi.jpeg'
import user_profile from '../../assets/user_profile.jpg'

function PlayVideo() {
  return (
    <>
    <div className='play-video'>
        <video src={Video1} controls autoPlay muted></video>
        <h3>Web Development</h3>
        <div className="play-video-info">
            <p>1535 Views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt="" /> 125</span>
                <span><img src={dislike} alt="" /> 12</span>
                <span><img src={share} alt="" /> Share</span>
                <span><img src={save} alt="" /> Save</span>
            </div>
            
        </div>
            <hr />
            <div className="publisher">
                <img src={abhi} alt="" />
                <div>
                    <p>GreatStack</p>
                    <span>1M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
                <div className="vid-description">
                    <p>Channel that makes learning Easy</p>
                    <p>Subscribe GreatStack to Watch More Tutorials on web Development</p>
                    <hr />
                    <h4>130 Comments</h4>
                    <div className="comment">
                        <img src={user_profile} alt="" />
                        <div>
                            <h3>Hitler <span>1 day ago</span></h3>
                            <p>The Jews are definitely a race, but they are not human.</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>1M</span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={user_profile} alt="" />
                        <div>
                            <h3>Hitler <span>1 day ago</span></h3>
                            <p>The Jews are definitely a race, but they are not human.</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>1M</span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={user_profile} alt="" />
                        <div>
                            <h3>Hitler <span>1 day ago</span></h3>
                            <p>The Jews are definitely a race, but they are not human.</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>1M</span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={user_profile} alt="" />
                        <div>
                            <h3>Hitler <span>1 day ago</span></h3>
                            <p>The Jews are definitely a race, but they are not human.</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>1M</span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={user_profile} alt="" />
                        <div>
                            <h3>Hitler <span>1 day ago</span></h3>
                            <p>The Jews are definitely a race, but they are not human.</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>1M</span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    </>
  )
}

export default PlayVideo