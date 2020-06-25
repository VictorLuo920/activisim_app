import React from 'react';
import './Resources.css'
import { Link } from 'react-router-dom';

const Resources = (props) => {
    return (
        <div className="resources-page-background">
            <div className="resources">
                <h1 className="dresources-text">Resources</h1>
            </div>
            <div className="blmkp1-text-header">
                <h1>Black lives Matter Founders</h1>
            </div>
            <div className="discussion-bar">
            </div>
            <div className="row">
                <div>
                    <div className="founders">

                        <div className="">
                            <img className="founders-content" src="https://i.postimg.cc/26cTYpqr/Screen-Shot-2020-06-24-at-1-41-09-PM.png" alt="" />
                        </div>

                        <h2 className="founders-text">Patrisse Khan-Cullors</h2>
                        <p className="founders-text">Co-Founder and Strategic Advisor</p>
                        <h4 className="founders-text"> Patrisse Khan-Cullors is an artist, organizer, and freedom fighter from Los Angeles, CA.</h4>
                    </div>
                </div>
                <div>
                    <div className="founders">

                        <div className="">
                            <img className="founders-content" src="https://i.postimg.cc/G3TSR2jf/Screen-Shot-2020-06-24-at-1-43-00-PM.png" alt="" />
                        </div>

                        <h2 className="founders-text">Opal Tometi</h2>
                        <p className="founders-text">Co-Founder</p>
                        <h4 className="founders-text">Opal Tometi is a New York-based Nigerian-American writer, strategist, and community organizer</h4>
                    </div>
                </div>
                <div>
                    <div className="founders">

                        <div className="">
                            <img className="founders-content" src="https://i.postimg.cc/7LbnNssR/Screen-Shot-2020-06-24-at-1-44-11-PM.png" alt="" />
                        </div>

                        <h2 className="founders-text">Alicia Garza</h2>
                        <p className="founders-text">Co-Founder</p>
                        <h4 className="founders-text">Alicia Garza is an Oakland-based organizer, writer, public speaker, and freedom dreamer.</h4>
                    </div>
                </div>

            </div>
            <br/><br/> <br/><br/>
            <div className="link-div">
                <a href="https://blacklivesmatter.com/our-co-founders/?__cf_chl_jschl_tk__=9b37a61e41daf1fd50c627f2405f4f4954a14b8a-1593044709-0-Af_3A3PJEkrW8CnhDbAbN_SBytF0UbOgIpaeQmYhXGCCpn91GNHK2kVJNgx5adXYQ8Y5GrqU-g8rPAAuNbS5ZOwiylwa0JgMm8jL9mYLugC_VkDAk1EEmabztsf-cBbSSR6Tt3uKdSRHqVLV57xubzH0uNHenCS32uU0G_ViBGExLlgrM0UYzY2H0my6QQauk7GIe-aSP9FeyUNvY9TZ8vbluHvBAf_onJhMqwbII1q3GfJaB1v5As-7IrK12Rqbe62BQyl_ScE20W_RMXGHqr5vJR2BpBZKiBB0YVKyg5d4yVCqGIkvIPc4hsJwGHBufUwJZ8guB_INpDtGmT6Hw9D06nDKRXDNAs1zLe9wcdJO" target="_blank" className="resource-link">Learn more on the BLM website</a>
            </div>


            <div className="blmkp1-text-header">
                <h1>Newest Articles</h1>
            </div>
            <div className="discussion-bar">
            </div>

            <div className="row">
                <div className="news-container">
                    <img className="news-content" src="https://i.postimg.cc/VvSNGMQm/Screen-Shot-2020-06-24-at-1-58-59-PM.png" alt="" />
                    <div>
                        <h2 className="founders-text">The House on Fire </h2>
                        <h4 className="founders-text">n this thought experiment, someone’s house is on fire and they call 911. When the firefighters show up, their neighbors ask, “but what about our houses?” even though their houses are not actually on fire.</h4>
                        <h4 class="read-article-news"><a href="https://lifehacker.com/why-saying-all-lives-matter-is-a-problem-1843880667" target="_blank" className="read">Read Article</a></h4>
                    </div>
                </div>


                <div className="news-container">
                    <img className="news-content" src="https://i.postimg.cc/ZqV3Xrgd/Screen-Shot-2020-06-24-at-2-02-16-PM.png" alt="" />
                    <div>
                        <h2 className="founders-text">The ER visit</h2>
                        <h4 className="founders-text">If a patient being rushed to the ER after an accident were to point to their mangled leg and say, “This is what matters right now,” and the doctor saw the scrapes and bruises of other areas...</h4>
                        <h4 class="read-article-news"><a href="https://www.harpersbazaar.com/culture/politics/a27075028/black-lives-matter-explained/" target="_blank" className="read">Read Article</a></h4>
                    </div>
                </div>

            </div>

            <div className="blmkp1-text-header">
                <h1>Videos</h1>
            </div>
            <div className="discussion-bar">
            </div>
            <div className="row">
                <div className="news-container">
                    <img className="news-content" src="https://i.postimg.cc/XYZdtGWH/Screen-Shot-2020-06-24-at-2-13-58-PM.png" alt="" />
                    <div className="double-row">
                        <h2 className="founders-text">All Plates Matter </h2>
                        <h4 className="founders-text">A group of activist filmmakers called Peace House created this video using the analogy of eating at a restaurant, where one person doesn’t get what he ordered or close to what the rest of the group is served.</h4>
                        <h4 class="read-article-news"><a href="https://www.youtube.com/watch?v=NtAAeyswlHM&feature=youtu.be" target="_blank" className="read">Watch Video</a></h4>
                    </div>
                </div>


                <div className="news-container">
                    <img className="news-content" src="https://i.postimg.cc/kgxXVqvM/Screen-Shot-2020-06-24-at-2-16-12-PM.png" alt="" />
                    <div className="double-row">
                        <h2 className="founders-text">Why Color Blindness WON’T End Racism</h2>
                        <h4 className="founders-text">If you listen to people talk about race you'll eventually hear someone say "I don't see race" or even "Race doesn't actually exist biologically, so we should just ignore it" as way to stop racism.</h4>
                        <h4 class="read-article-news"><a href="https://www.youtube.com/watch?v=H4LpT9TF_ew&feature=youtu.be" target="_blank" className="read">Watch Video</a></h4>
                    </div>
                </div>
            </div>
            <div className="thanks">
                <h1 className="thanks-text">Thanks for learning and listening!</h1>
            </div>
            <div className="discussion-bar-2">
            </div>
            <div className="end-buttons">
                <div className="end-back">
                    <Link to="/blmcommonresponses" className="pkp1-back-link">Back to review</Link>
                </div>
                <div className="right-end-buttons"></div>
                <div className="red">
                    <Link to="/blmcommentspage" className="link">Discussion</Link>
                </div>
                <div className="green">
                    <Link to="/launchscreen" className="link">New Topic</Link>
                </div>
            </div>

            <div className="resources-footer"></div>
        </div>
    );
}
export default Resources;