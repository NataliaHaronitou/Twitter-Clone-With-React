import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";


function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1295943937262325761"} />

        <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="haronitou"
            options={{ height: 400 }}
            />
        
        <TwitterShareButton
            url={"https://www.youtube.com/haronitouharonitou"}
            options={{ text: "I su*k at Premiere Pro! Wah!", via: "haronitou" }} />

      </div>
    </div>
  );
}

export default Widgets;
