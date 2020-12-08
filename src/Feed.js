import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilepic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}

      {/* <Post
        profilePic="https://i.pinimg.com/236x/ce/2a/95/ce2a95e99faceaf7af19c273b10ebcc1.jpg"
        message="Wow this works"
        timestamp="This is a timestamp"
        username="Squidward"
        image="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
      />
      <Post
        profilePic="https://i.pinimg.com/736x/db/5a/34/db5a3470b9f8ae8ea391215891f61292.jpg"
        message="Wow this works"
        timestamp="This is a timestamp"
        username="Squidward"
        image="https://i.pinimg.com/originals/cc/18/8c/cc188c604e58cffd36e1d183c7198d21.jpg"
      /> */}
    </div>
  );
}

export default Feed;
