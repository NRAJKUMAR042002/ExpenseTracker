import React, { useState } from 'react';
 import './Login.css';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
 import { Link } from 'react-router-dom';
// import Signup from '../Signup/Signup';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/DailyTransaction", formData); // Send data to backend
      if (response.data.success) {
        alert("Login successful!");
        navigate("/Home"); 
      } else {
        alert("Invalid credentials.");
      }
    } catch (error) {
      alert("Error logging in.");
      console.error(error);
    }
   
  };

  const navigate =useNavigate();

  
  
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      
      
      <form
        onSubmit={handleSubmit}
        
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: 'rgba(255, 255 ,255, 0.4)',
          boxShadow: '14px 14px 26px  black',
          margin:'100px 0px 0px 0px'
          
        }}
      
      >
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <label style={{ marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
        <input
          type="email"
          name='email'
          value={formData.email}
          onChange={handleChange}
          style={{ marginBottom: '15px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          required
        />
        <label style={{ marginBottom: '5px', fontWeight: 'bold' }}>Password:</label>
        <input
          type="password"
          name='password'
          value={formData.password}
          onChange={handleChange}
          style={{ marginBottom: '15px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          required
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
        <a href='/' style={{margin:'10px 0px 0px 90px'}}>Forgot Password</a>
        <div>

          <a href='https://mail.google.com/mail/u/0/#inbox'><img src={require('./search.png')} alt='search' style={{height:'30px',width:'30px',margin:'30px 0px 0px 40px'}} ></img></a>
          <a href='/'><img src={require('./twitter.png')} alt='twitter' style={{height:'30px',width:'30px',margin:'30px 0px 0px 60px'}} ></img></a>
          <a href='/'><img src={require('./facebook.png')} alt='facebook' style={{height:'30px',width:'30px',margin:'30px 0px 0px 60px'}} ></img></a>
        </div>

        <Link to='/Signup' class='btn-primary'>Signup</Link>

       
       
      </form>
      
      
      



      <div class="ocean" style={{height:'5%', width:'100%',position:'absolute',bottom:'0',left:'0',background:'#015871'}}>
  <div class="wave" style={{background:'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg") repeat-x',position:'absolute',top:'-198px',width:'6400px',height:'198px',animation:'wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite',transform:'translate3d(0, 0, 0)'}}></div>
  <div class="wave" style={{top:'-175px',animation:'wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite',opacity:'1'}}></div>
</div>

    </div>
    
    
  );
};

export default LoginPage;
