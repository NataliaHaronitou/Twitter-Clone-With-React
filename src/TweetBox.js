import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";



function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
  
    const sendTweet = (e) => {
      e.preventDefault();
  
      db.collection("posts").add({
        displayName: "Natalia Haronitou",
        username: "haronitou",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          "https://lh3.googleusercontent.com/-CRGXw8--1MY/XiAmcbTpO2I/AAAAAAAAApw/QcHqvMT8STkL9zLkmEjVqWJQCuFn5e1CgCEwYBhgLKtQDAL1OcqzMf2EwdRTca6r7NJKzeVxlWPqA0ZwUZTa7RhHIP07RD6Y_XUFypItVcbywvRvkDHJie0otmn1kGNzevU_8sP7OZNKlEnR4w6XvgKEgTmKd57lb-KbMb5wg1tjIRSTsDPTgrA8998AUufUnzOE0r7RKtnn_vIysOvp5t8a8-MnAPuNbEcHUu1okHwffkDeaU4LrLuKaxLb39oTpSkkaKIo6FFaIqDfzb-l8E-vgz3qNaHygGWreLc08Jsl-1chK4F8GsZ3jUsJOlG8OsFuD_gdcOkI6XtE_Q7zeb1FuMHxFOQDfWpACaSAp8Qr0-S1QoUo4josluPq3Phgawp3qtfDxfmowVpAFkGV92htwS-p3xwVi760Mk1iT3Q9QPCdElbIh_JllUG79aFEjEnfFxqmPdeH81q7yHT4FojOIVkYxLV7tZbT6ZMQCli4V3dQUdijcrY5yZ2ppKtl_CbTUaHAnNTab8v_F---4Hs33zz58eWdUz6OMomP8YMWpT-1dp3r-dU2xkL_7pB67vA8LPV3cMgPrelbzQ9PnbOEjzdP6n8k7oSMaoYytTF-VKDlfS0lGNu0v6LQz2fLY141n25d3brpJE2pz-mdjd6JSeizNMODlvf0F/w280-h280-p/2020-01-16.jpg",
      });
  
      setTweetMessage("");
      setTweetImage("");
    };

    return (
        <div className="tweetBox">
          <form>
            <div className="tweetBox__input">
              <Avatar src="https://lh3.googleusercontent.com/-CRGXw8--1MY/XiAmcbTpO2I/AAAAAAAAApw/QcHqvMT8STkL9zLkmEjVqWJQCuFn5e1CgCEwYBhgLKtQDAL1OcqzMf2EwdRTca6r7NJKzeVxlWPqA0ZwUZTa7RhHIP07RD6Y_XUFypItVcbywvRvkDHJie0otmn1kGNzevU_8sP7OZNKlEnR4w6XvgKEgTmKd57lb-KbMb5wg1tjIRSTsDPTgrA8998AUufUnzOE0r7RKtnn_vIysOvp5t8a8-MnAPuNbEcHUu1okHwffkDeaU4LrLuKaxLb39oTpSkkaKIo6FFaIqDfzb-l8E-vgz3qNaHygGWreLc08Jsl-1chK4F8GsZ3jUsJOlG8OsFuD_gdcOkI6XtE_Q7zeb1FuMHxFOQDfWpACaSAp8Qr0-S1QoUo4josluPq3Phgawp3qtfDxfmowVpAFkGV92htwS-p3xwVi760Mk1iT3Q9QPCdElbIh_JllUG79aFEjEnfFxqmPdeH81q7yHT4FojOIVkYxLV7tZbT6ZMQCli4V3dQUdijcrY5yZ2ppKtl_CbTUaHAnNTab8v_F---4Hs33zz58eWdUz6OMomP8YMWpT-1dp3r-dU2xkL_7pB67vA8LPV3cMgPrelbzQ9PnbOEjzdP6n8k7oSMaoYytTF-VKDlfS0lGNu0v6LQz2fLY141n25d3brpJE2pz-mdjd6JSeizNMODlvf0F/w280-h280-p/2020-01-16.jpg" />
              <input
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage}
                placeholder="What's happening?"
                type="text"
              />
            </div>
            <input
              value={tweetImage}
              onChange={(e) => setTweetImage(e.target.value)}
              className="tweetBox__imageInput"
              placeholder="Optional: Enter image URL"
              type="text"
            />
    
            <Button
              onClick={sendTweet}
              type="submit"
              className="tweetBox__tweetButton"
            >
              Tweet
            </Button>
          </form>
        </div>
      );
    }
    
    export default TweetBox;