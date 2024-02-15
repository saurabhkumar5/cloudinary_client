import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {

    const [data,setData] = useState([]);
    const getUserData = async()=>{
        const res = await axios.get("http://localhost:5500/getdata",{
            headers:{
                "Content-Type":"application/json"
            }
        });
        if(res.status===200){
            setData(res.data)
        }else{

            alert("error")
        }
    }

    useEffect(()=>{
        getUserData()
    },[])

  return (
    <div >
        <div className='home'>home</div>
        {
            data.length >0 && data.map((element,index)=>{
                return <img src={element.imgpath} />
            })
        }
        <Link to='/image'><button>Add user</button></Link>
    </div>
  )
}

export default Home