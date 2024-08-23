import React, { useState } from 'react'
import './Content.css'
import cameraPic from '../assets/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../services/allAPI';


function Content({Register}) {

  const navigate = useNavigate()

  const isRegisterForm = Register?true:false

  const [userData, setUserData] = useState({
    username:"", email:"", password:""
  })

  //console.log(userData);

  //register
  const handleRegister = async (e) => {
    e.preventDefault()
    if(userData.username && userData.email && userData.password){
        try{
          const result = await registerAPI(userData)
          console.log(result);
          if(result.status == 200){
            toast.success(`Welcome ${result.data?.username}... Please login to explore our website!!`)
            setUserData({username: "", email: "", password: ""}
            )

            navigate('/')
          }else{
            if(result.response.status == 406){
              toast.info(result.response.data)

              setUserData({username:"", email:"", password: ""}
              )
            }
          }
          
        }catch(err){
          console.log(err);
          
        }

    }else{
      toast.warning("Please fill the form completely!!")
    }
  }

  //login
  const handleLogin = async (e) => {
    e.preventDefault()
    if(userData.email && userData.password){

      try{
        const result = await loginAPI(userData)

        if(result.status == 200){

          sessionStorage.setItem('user',JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
          toast.success(`Welcome ${result.data.user.username}...`)
          setUserData({
             username:"", email:"", password:""
          })
          setTimeout(() => {
            navigate('/dashboard')
          }, 2000);
        }else{
          if(result.response.status == 404){
            toast.warning(result.response.data)
          }
        }
        

      }catch(err){
        console.log(err);
        
      }
     

    }else{
      toast.warning("Please fill the form completely!!")
    }
  }
  

 
  return (
    <>
    
    <div className="c-row w-100 d-flex flex-row  align-items-center flex-wrap">
     <div className="c-col col-md-6 col-sm-12 d-flex justify-content-center " >
     <form className='p-5'>
     {
      isRegisterForm? <div class="form-floating mb-3 ">
      <input value={userData.username} onChange={e => setUserData({...userData,username:e.target.value})} type="text" class="form-control" id="floatingUsername"  />
      <label for="Username">Username</label>
    </div> : <></>
     }
            <div class="form-floating mb-3 ">
              <input value={userData.email} onChange={e => setUserData({...userData,email:e.target.value})} type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input value={userData.password} onChange={ e => setUserData({...userData, password:e.target.value})} type="password" class="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Password</label>
            </div>
            {
              isRegisterForm? <></> : <p className=" d-flex justify-content-between pb-3 " style={{fontSize:'15px'}}>
              <span>
                <Link style={{textDecoration:'none',color:'#000000'}} to={'/register'} >
                <p>Sign Up</p>
                </Link>
                 </span>
                  <span>
                      <a href="#" style={{textDecoration:'none', color:'#000000'}}>Forgot Password?</a>
                  </span>
          </p>
            }
          <div className='d-flex justify-content-center'>
       
          {
            isRegisterForm ? 
            <button type='button' onClick={handleRegister} className="btn btn-lg  fw-bold text-light" >
            REGISTER
          </button>
            :<button type='button' onClick={handleLogin} className="btn btn-lg  fw-bold text-light" >
            LOGIN
          </button>
          }
          </div>
          <p className="pt-4 text-center " style={{fontWeight:'500'}}>
            OR
        </p>

        <div className="icons w-100 d-flex justify-content-center">
            <a href="#" className='me-3'><i class="fa-brands fa-facebook c-icon"></i></a>
            <a href="#" className='me-3' ><i class="fa-brands fa-google c-icon"></i></a>
            <a href="#"><i class="fa-brands fa-apple c-icon"></i></a>
          </div>
          
          </form>
     
     </div>
     <div className="c-col col-md-6 col-sm-12 d-flex justify-content-center align-items-center  ">
     <div>
     <img  src={cameraPic} alt="camera picture" />
     <h1 className="text-center" style={{fontSize:'6em', fontWeight:'800'}}>
        CastME
     </h1>
     </div>
     </div>
    </div>
    <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Content
