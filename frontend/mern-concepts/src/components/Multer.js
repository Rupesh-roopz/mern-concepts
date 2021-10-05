import React, { useState } from 'react';
import axios from 'axios'
function Multer(props) {
    const[fileData, setFileData] = useState();

    const fileChangeHandler = (e) => {
        setFileData(e.target.files[0])
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = new FormData();

        data.append('image',fileData);

        axios.post('http://localhost:3000/single', data)
            .then((res) => console.log(res))
            .catch((error) => console.log(error.response))
    }
    return (
        <div>
            <h1>React app File uploading using multer</h1>
            <form onSubmit={onSubmitHandler}> 
                <input type='file' onChange={fileChangeHandler} />
                <button type='submit'>Submit to backend</button>
            </form>
           
            
        </div>
    );
}

export default Multer;