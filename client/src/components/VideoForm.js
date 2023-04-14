import React, { useEffect, useState, } from "react";
import { addVideo } from "../modules/videoManager";
import  { useNavigate } from "react-router-dom";

const VideoForm = ({getAllVidsWithComments}) => {
    const [video, setVideo] = useState({
        title: '',
        url: '',
        description: ''
    })

    

    const handleSubmit = (event) => {
        event.preventDefault(); 
        addVideo(video)
    }


    return (
        <form className="formContainer" onSubmit={handleSubmit}>
            <h2>Add New Video</h2>
            <input type="text"
                placeholder="Title"
                required
                onChange={
                    (event) => {
                        const copy = { ...video }
                        copy.title = event.target.value
                        setVideo(copy)
                    }
                } />
            <input type="url"
                placeholder="Url"
                required
                onChange={
                    (event) => {
                        const copy = { ...video }
                        copy.url = event.target.value
                        setVideo(copy)
                    }
                } />
            <input type="text"
                placeholder="Description..."
                onChange={
                    (event) => {
                        const copy = { ...video }
                        copy.description = event.target.value
                        setVideo(copy)
                    }
                } />
            <input type="submit"/>
            <br/>
            <br/>
            <br/>
        </form>
    )
}

export default VideoForm;