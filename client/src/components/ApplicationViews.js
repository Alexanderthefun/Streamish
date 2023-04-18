import React from "react";
import { Routes, Route } from "react-router-dom";
import VideoList from "./videoList";
import VideoForm from "./VideoForm";
import VideoDetails from "./VideoDetails";
import UserVideos from "./UserVideos";
import Login from "./Login";
import Register from "./Register";
import { Navigate, useNavigate } from "react-router-dom";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={isLoggedIn ? <VideoList /> : <Navigate to="/login" />} />
        <Route path="videos">
          <Route index element={<VideoList />} />
          <Route path="add" element={isLoggedIn ? <VideoForm /> : <Navigate to="/login" />} />
          <Route path=":id" element={isLoggedIn ? <VideoDetails /> : <Navigate to="/login" />} />
        </Route>
        <Route path="users/:id" element={isLoggedIn ? <UserVideos /> : <Navigate to="/login" />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<p>Whoops, nothing here...</p>} />
    </Routes>
  );
};
