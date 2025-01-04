
import React, { useState } from 'react';
import './sidenav.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [isOpen, setIsOpen] = useState(true);
        
             const toggleSidebar = () => {
               setIsOpen(!isOpen);
             };
  const [formdata, setFormdata] = useState({
    type: '',
    amount: '',
    category: '',
    description: '',
    tags: '',
    paymentmethod: '',
    priority: '',
    tax: '',
    location: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const handlechange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); 
    
  };


  const validate = () => {
    const newErrors = {};
    if (!formdata.type) newErrors.type = 'Transaction type is required.';
    if (!formdata.amount) newErrors.amount = 'Amount is required.';
    if (!formdata.category) newErrors.category = 'Category is required.';
    if (!formdata.description) newErrors.description = 'Description is required.';
    if (!formdata.paymentmethod) newErrors.paymentmethod = 'Payment method is required.';
    if (!formdata.priority) newErrors.priority = 'Priority is required.';
    return newErrors;
  };

  
  const handlesubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); 
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/DailyTransaction", formdata);
      alert(response.data.message);
      setFormdata({
        type: '',
        amount: '',
        category: '',
        description: '',
        tags: '',
        paymentmethod: '',
        priority: '',
        tax: '',
        location: '',
      });
      navigate("/History", { state: formdata });
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("Failed to submit data.");
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: '#5356FF', width: '100%', height: '100px', marginTop: '80px' }}>
      <div className={isOpen ? "sidebar open" : "sidebar closed"} style={{backgroundColor:'#5356FF'}}>
                <button className="toggle-btn" onClick={toggleSidebar} style={{backgroundColor:'#5356FF'}}>
                      
      
                     <video src={require('./euro.mp4')} alt='euroimage' style={{height:'60px',width:'80px',margin:'10px 0px 0px 10px',}}></video>
                </button>
              
                   {isOpen && (
                       
                      <ul>
                        <li><a href="/Home" style={{fontFamily:'TimesNewRoman',fontSize:'20px',margin:'0px 120px 0px 0px'}}><img src={require('./home-page.png')} alt='home' style={{height:'30px',width:'30px',margin:'0px 5px 0px 0px'}}></img>Home</a></li>
                        <li><a href="/MonthlyTransaction" style={{fontFamily:'TimesNewRoman',fontSize:'20px',}}><img src={require('./piggy-bank.png')} alt='home' style={{height:'30px',width:'30px',margin:'0px 5px 0px 0px'}}></img>Recurring Transaction (Monthly Payment Only)</a></li>
                        <li><a href="/Priority" style={{fontFamily:'TimesNewRoman',fontSize:'20px',margin:'0px 15px 0px 0px'}}><img src={require('./prioritize.png')} alt='home' style={{height:'30px',width:'30px',margin:'0px 5px 0px 0px'}}></img>Priority/Importance</a></li>
                      
                        <li><a href="/History" style={{fontFamily:'TimesNewRoman',fontSize:'20px',margin:'-3px 120px 0px 0px'}} onClick={handlechange}><img src={require('./history.png')} alt='home' style={{height:'30px',width:'30px',margin:'5px 5px -10px 0px'}}></img>History</a></li>
                      </ul>
                      
                    )}
                
                
              

            </div>
            <div style={{margin:'-80px 0px 0px 1400px'}}> 
            <a href='/Login'><img src={require('./profile.png')} alt='profile' style={{height:'80px',width:'80px',marginTop:'10px'}}></img></a>
            </div>
            <div style={{marginTop:'-80px',marginLeft:'1300px'}}>
            <img src={require('./mobile.png')} alt='mobile' style={{height:'80px',width:'80px'}}></img>
            </div>
            
            <div style={{margin:'-60px 0px 0px 1050px',}}>
            <label style={{fontSize:'30px',color:'white'}}>Language</label>
            <select style={{fontSize:'20px'}}>
                <option>--select--</option>
                <option>தமிழ்</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>Russian</option>
            </select>
            </div>
            <div style={{margin:'-33px 0px 0px 860px'}}> 
                <label style={{fontFamily:'TimesNewRoman',fontSize:'30px',color:'white'}}>Currency</label>
                <select style={{fontSize:'20px'}} type='text'>
                    <option>INR</option>
                    <option>USD</option>
                    <option>Euro</option>
                    <option>IDR</option>
                    <option>IQD</option>
                    <option>JPY</option>
                    <option>AUD</option>
                    
                </select>
            </div>
            <div style={{margin:'-33px 0px 0px 620px'}}>
                <label style={{fontFamily:'TimesNewRoman',fontSize:'30px',color:'white'}}>Date</label>
                <input type='date' value={formdata.date} name='date' onChange={handlechange} style={{fontSize:'20px'}}></input>
            </div>
            

        </div>

        <h1 style={{ margin: '10px 0px 0px 700px', fontFamily: 'TimesNewRoman', fontSize: '40px' }}>Daily Transaction Entry</h1>
        <form onSubmit={handlesubmit}>
          <div style={{ boxShadow: '14px 4px 16px 6px black', margin: '50px 0px 0px 280px', padding: '20px' }}>

            {/* Transaction Type */}
            <div style={{ margin: '20px 0px 0px 100px', fontFamily: 'TimesNewRoman', fontSize: '30px' }}>
              <label>Transaction Type:</label>
              <select
                name="type"
                value={formdata.type}
                onChange={handlechange}
                style={{ fontFamily: 'TimesNewRoman', fontSize: '25px', margin: '0px 0px 0px 10px' }}
              >
                <option value="">--Select--</option>
                <option value="Income">Income</option>
                <option value="Expenses">Expenses</option>
              </select>
              {errors.type && <p style={{ color: 'red', fontSize: '16px' }}>{errors.type}</p>}
            </div>

            {/* Amount */}
            <div style={{ margin: '-35px 0px 0px 700px', fontFamily: 'TimesNewRoman', fontSize: '30px' }}>
              <label>Amount:</label>
              <input
                type="number"
                name="amount"
                value={formdata.amount}
                onChange={handlechange}
                placeholder="Enter the Amount"
                style={{ margin: '0px 0px 0px 10px', fontSize: '20px' }}
              />
              {errors.amount && <p style={{ color: 'red', fontSize: '16px' }}>{errors.amount}</p>}
            </div>

            {/* Category */}
            <div style={{ margin: '20px 0px 0px 100px', fontFamily: 'TimesNewRoman', fontSize: '30px' }}>
              <label>Category:</label>
              <select
                name="category"
                value={formdata.category}
                onChange={handlechange}
                style={{ fontFamily: 'TimesNewRoman', fontSize: '25px', margin: '0px 0px 0px 10px' }}
              >
                <option value="">--Select--</option>
                <option value="Foods">Foods</option>
                <option value="Groceries">Groceries</option>
                <option value="Transport">Transport</option>
                <option value="Medicals">Medicals</option>
              </select>
              {errors.category && <p style={{ color: 'red', fontSize: '16px' }}>{errors.category}</p>}
            </div>

            {/* Description */}
            <div style={{ margin: '-30px 0px 0px 700px', fontFamily: 'TimesNewRoman', fontSize: '30px' }}>
              <label>Description:</label>
              <input
                type="text"
                name="description"
                value={formdata.description}
                onChange={handlechange}
                placeholder="Enter What you bought"
                style={{ margin: '0px 0px 0px 10px', fontSize: '20px' }}
              />
              {errors.description && <p style={{ color: 'red', fontSize: '16px' }}>{errors.description}</p>}
            </div>

            {/* Tags */}
            <div style={{ margin: '20px 0px 0px 100px', fontFamily: 'TimesNewRoman', fontSize: '30px' }}>
              <label>Tags:</label>
              <input
                type="text"
                name="tags"
                value={formdata.tags}
                onChange={handlechange}
                placeholder="Enter your tags"
                style={{ fontFamily: 'TimesNewRoman', fontSize: '25px', margin: '0px 0px 0px 10px' }}
              />
            </div>

            {/* Payment Method */}
            <div style={{ margin: '-30px 0px 0px 700px', fontFamily: 'TimesNewRoman', fontSize: '30px' }}>
              <label>Payment Method:</label>
              <select
                name="paymentmethod"
                value={formdata.paymentmethod}
                onChange={handlechange}
                style={{ margin: '0px 0px 0px 10px', fontSize: '20px' }}
              >
                <option value="">--Select--</option>
                <option value="Cash">Cash</option>
                <option value="Online">Online</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Credit Card">Credit Card</option>
                <option value="UPI Transaction">UPI Transaction</option>
              </select>
              {errors.paymentmethod && <p style={{ color: 'red', fontSize: '16px' }}>{errors.paymentmethod}</p>}
            </div>

            {/* Priority */}
            <div style={{ margin: '20px 0px 0px 100px', fontFamily: 'TimesNewRoman', fontSize: '30px' }}>
              <label>Priority:</label>
              <select
                name="priority"
                value={formdata.priority}
                onChange={handlechange}
                style={{ fontFamily: 'TimesNewRoman', fontSize: '25px', margin: '0px 0px 0px 10px' }}
              >
                <option value="">--Select--</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Low">Low</option>
              </select>
              {errors.priority && <p style={{ color: 'red', fontSize: '16px' }}>{errors.priority}</p>}
            </div>

            {/* Tax */}
            <div style={{ margin: '-30px 0px 0px 700px', fontFamily: 'TimesNewRoman', fontSize: '30px' }}>
              <label>Tax/Deduction:</label>
              <input
                type="text"
                name="tax"
                value={formdata.tax}
                onChange={handlechange}
                placeholder="Enter Your Tax"
                style={{ margin: '0px 0px 0px 10px', fontSize: '20px' }}
              />
            </div>

            {/* Location */}
            <div style={{ margin: '30px 0px 0px 700px', fontFamily: 'TimesNewRoman', fontSize: '30px' }}>
              <label>Location:</label>
              <input
                type="text"
                name="location"
                value={formdata.location}
                onChange={handlechange}
                placeholder="Enter location"
                style={{ margin: '0px 0px 0px 10px', fontSize: '20px' }}
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                style={{
                  margin: '30px 0px 30px 450px',
                  fontFamily: 'TimesNewRoman',
                  fontSize: '30px',
                  backgroundColor: '#5356FF',
                  color: 'white',
                }}
              >
                Add Transaction
              </button>
            </div>
          </div>
        </form>
      </div>
    
  );
};

export default Home;
