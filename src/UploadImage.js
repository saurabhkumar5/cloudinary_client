import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UploadImage() {
    const [file,setFile] = useState("");

    const navigate = useNavigate();
    
    const addUserData = async(e)=>{
         e.preventDefault();

         const formData = new FormData();
         formData.append("photo",file);
         
         const config = {
            headers:{
                "Content-Type":"multipart/form-data"
            }
         }
         const res = await axios.post("http://localhost:5500/register",formData,config);
        //  console.log(res)
        if(res.status===200){
            navigate("/")
        }else{
            alert("error")
        }
    }

  return (
    <div>
        <form>
        <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
        <button type="submit" onClick={addUserData}>Upload Image</button>
      </form>
    </div>
  )
}

export default UploadImage