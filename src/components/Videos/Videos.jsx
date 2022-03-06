import React from "react";
import './Videos.css'


const Videos = () => {
    return(
        <div className="Videos">
            <h1>Videos</h1>
            <iframe width="1000" height="600" src="https://www.youtube.com/embed/GBs-vSwOTAE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Videos;