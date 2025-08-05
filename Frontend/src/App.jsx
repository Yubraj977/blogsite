import { useState } from "react";
import "./App.css";
import Post from "./components/Post";
import Nav from "./components/Nav";
function App() {
  return (
    <>
      <Nav />
      <div className="px-20 py-20">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}

export default App;
