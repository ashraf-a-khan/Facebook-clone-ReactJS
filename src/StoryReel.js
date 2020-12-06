import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://photojournal.jpl.nasa.gov/jpeg/PIA23689.jpg"
        profileSrc="https://miro.medium.com/max/554/1*Ld1KM2WSfJ9YQ4oeRf7q4Q.jpeg"
        title="Batman"
      />
      <Story
        image="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
        profileSrc="https://previews.123rf.com/images/yupiramos/yupiramos2001/yupiramos200118150/137471566-face-young-man-in-frame-circular-avatar-character-icon-vector-illustration-design.jpg"
        title="Robin"
      />
      <Story
        image="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
        profileSrc="https://storage2.timheuer.com/boratcircle.png"
        title="Aladeen"
      />
      <Story
        image="https://images.freeimages.com/images/small-previews/5c6/sunset-jungle-1383333.jpg"
        profileSrc="https://p1.hiclipart.com/preview/793/504/966/avatar-icon-ninja-samurai-icon-design-red-smile-circle-png-clipart.jpg"
        title="Ninja"
      />
      <Story
        image="https://media.gettyimages.com/photos/charminar-picture-id142605497?s=612x612"
        profileSrc="https://thumbs.dreamstime.com/z/circular-metallic-gradient-businessman-glasses-avatar-icon-ring-blue-background-isolated-white-113135287.jpg"
        title="Agent Vinod"
      />
    </div>
  );
}

export default StoryReel;
