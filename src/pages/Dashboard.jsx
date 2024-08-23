import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
     
    useEffect(() => {

        if(sessionStorage.getItem("user")){
            setUsername(JSON.parse(sessionStorage.getItem("user")).username)
        }else{
            setUsername("")
        }

    }, [])

    const handleLogout = () => {
        sessionStorage.clear();

        navigate("/");
      };
  return (
    <div className='bg-light' style={{borderTop:'1px solid #000000'}}>
        <div className="w-100 d-flex justify-content-end"><button type='button' onClick={handleLogout} style={{ border:'1px #000000', borderRadius:'12px',padding:'6px 16px 6px 16px'}} className='mt-3 me-3 bg-danger text-light  '>Logout</button></div>
    <div  className="vh-100 w-100 d-flex justify-content-center align-items-center bg-light">
        
        <div><h2>Hi <span style={{color:'#BC9B5D'}}>{username},</span></h2> <h1>Welcome to CastME</h1></div>

    </div>
      
    </div>
  )
}

export default Dashboard
