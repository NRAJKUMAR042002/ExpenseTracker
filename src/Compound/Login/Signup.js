
import React, { useState } from 'react';
import "./Login.css";
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';


const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        
      });
      const navigate = useNavigate(); // Hook for navigation
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:5000/api/user", formData); 
          alert("Signup successful!");
          navigate("/Login");
        } catch (error) {
          alert("Error signing up.");
          console.error(error);
        }
      };
  return (
    <div style={{display:'flex', justifyContent:'center',alignItems:'center',height:'100%',margin:'100px 0px 0px 0px',
    }}>
        <form
              onSubmit={handleSubmit}
              style={{
                display:'flex',
                flexDirection:'column',
                width:'500px',
                padding:'20px',
                borderRadius:'8px',
                backgroundColor:'rgba(255,255,255,0.4)',
                boxShadow:'4px 4px 6px black',
                margin:'0px 0px 100px 0px'
                
              }} >
        <h2 style={{textAlign:'center'}}>Signup</h2>
        <label style={{marginBottom:'5px ', fontWeight:'bold'}}>USERNAME</label>
        <input 
            type='username'
            name='username'
            value={formData.username}
            onChange={handleChange }
            style={{marginBottom:'15px', padding:'10px', borderRadius:'40px',border:'1px solid #cfc'}}
            required
            />
        <label style={{marginBottom:'5px ', fontWeight:'bold'}}>Email</label>
        <input 
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange }
            style={{marginBottom:'15px', padding:'10px', borderRadius:'40px',border:'1px solid #cfc'}}
            required
            />
        <label style={{marginBottom:'5px ', fontWeight:'bold'}}>PASSWORD</label>
        <input 
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            style={{marginBottom:'15px', padding:'10px', borderRadius:'40px',border:'1px solid #cfc'}}
            required
            />
        
        <button
           type='submit'
           style={{
            padding:'10px',
            borderRadius:'4px',
            border:'none',
            backgroundColor:'#007bff',
            color:"#fff",
            fontWeight:'bold',
            cursor:'pointer',

           }}
        
        >
            Signup
        </button>
       
           <div> 
            <button style={{margin:'30px 0px 0px 160px',background:'#007bff',color:'white'}}>
            <Link to='/Login' style={{textDecoration:'none',color:'white'}} >Already Have An Account</Link>
            </button>
           </div>
        
        

        </form>
        <div class="ocean" style={{height:'5%', width:'100%',position:'absolute',bottom:'0',left:'0',background:'#015871'}}>
  <div class="wave" style={{background:'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg") repeat-x',position:'absolute',top:'-198px',width:'6400px',height:'198px',animation:'wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite',transform:'translate3d(0, 0, 0)'}}></div>
  <div class="wave" style={{top:'-175px',animation:'wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite',opacity:'1'}}></div>
</div>

    
    </div>
  )
  
}

export default Signup