import React,{useState} from 'react';
import './sidenav1.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MonthlyTransaction = () => {
    

    

  
    
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

         const [isOpen, setIsOpen] = useState(true);
    
         const toggleSidebar = () => {
           setIsOpen(!isOpen);
         };
         const handlechange = (e) => {
            const{ name , value} = e.target;
            setFormdata((prev) => ({
                ...prev,
                [name]:value,
            }));
            setErrors({ ...errors, [e.target.name]: '' });
            
        };
       
        
         const [formdata,setFormdata] = useState({
                fromdate:'',
                todate:'',
                type:'',
                amount:'',
                category:'',
                description:'',
                tags:'',
                paymentmethod:'',
                priority:'',
                tax:'',
                receipt:'',
                location:'',
                date:"",
            });
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
                  setErrors(newErrors); // Show validation errors
                  return;
                }
                if (new Date(formdata.todate) < new Date(formdata.fromdate)) {
                    alert("End Date must be after Start Date");
                  } else {
                    alert("Form submitted successfully!");
                  }
            
                try {
                  const response = await axios.post("http://localhost:5000/api/MonthlyTransaction", formdata);
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
         <div style={{backgroundColor:'#5356FF',width:'100%',height:'100px',marginTop:'80px'}}>
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
            <img src={require('./profile.png')} alt='profile' style={{height:'80px',width:'80px',marginTop:'10px'}}></img>
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
                <select style={{fontSize:'20px'}}>
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

        <div>
            <form onSubmit={handlesubmit}>
                <div>
                    <h1 style={{margin:'10px 0px 0px 700px',fontFamily:'TimesNewRoman',fontSize:'25px'}}>Monthly Transaction</h1>
                    <h4 style={{margin:'10px 0px 0px 500px',fontFamily:'TimesNewRoman',fontSize:'20px'}}>Note: This Page Is Only For Your Monthly Transaction Only, If You Have An daily Transaction .<br/> Please Goto Home Page And Enter Your Daily Transaction Details</h4>
                </div>
                <div style={{boxShadow:'14px 4px 16px 6px black',margin:'50px 0px 0px 280px' , padding:'20px'}}>
                    <div style={{margin:'20px 0px 0px 100px',fontFamily:'TimesNewRoman',fontSize:'25px'}}>
                        <label>From Date </label>
                        <input type='date' name='fdate'  value={formdata.fromdate} style={{fontFamily:'TimesNewRoman',fontSize:'25px',margin:'0px 0px 0px 10px'}} />
                    </div>
                    <div style={{margin:'-35px 0px 0px 700px',fontFamily:'TimesNewRoman',fontSize:'25px'}}>
                        <label>To Date</label>
                        <input type='date' name='tdate' value={formdata.todate} style={{margin:'0px 0px 0px 10px',fontSize:'20px'}} />
                    </div>
                <div style={{margin:'20px 0px 0px 100px',fontFamily:'TimesNewRoman',fontSize:'25px'}}>

               <label>Transaction Type:</label>
               <select style={{fontFamily:'TimesNewRoman',fontSize:'25px',margin:'0px 0px 0px 10px'}} name='type' value={formdata.type} onChange={handlechange}required> 
                <option>--Select--</option>
                <option>Income</option>
                <option>Expenses</option>
               </select>
               </div>

            <div style={{margin:'-35px 0px 0px 700px',fontFamily:'TimesNewRoman',fontSize:'25px'}}>
                <label>Amount :</label>
                <input type='number' placeholder='Enter the Amount' name='amount' value={formdata.amount} onChange={handlechange} required style={{margin:'0px 0px 0px 10px',fontSize:'20px'}}></input>
            </div>

            <div style={{margin:'20px 0px 0px 100px',fontFamily:'TimesNewRoman',fontSize:'25px'}}>
                <label>Category:</label>
                <select style={{fontFamily:'TimesNewRoman',fontSize:'25px',margin:'0px 0px 0px 10px'}} name='category' value={formdata.category} onChange={handlechange} required>
                    <option>--Select--</option>
                    <option>Electricity Bill</option>
                    <option>Groceries </option>
                    <option>House Bill</option>
                    <option>Gas Cylinder Bill</option>
                    <option>DTH/Cable Tv Recharge</option>
                    <option>Mobile Recharge</option>
                    <option>Water Bill</option>
                    <option>Postpaid Recharge</option>
                    <option>Fastag Recharge</option>
                    <option>Insurance Recharge</option>
                    <option>Broadband/landline</option>
                    <option>Others</option>
                </select>
            </div>
            <div style={{margin:'-30px 0px 0px 700px',fontFamily:'TimesNewRoman',fontSize:'25px'}}>
                <label>Description :</label>
                <input type='text' placeholder='Enter What are you buyed?' name='description' value={formdata.description} onChange={handlechange} style={{margin:'0px 0px 0px 10px',fontSize:'20px'}} required ></input>
              
            </div>
            <div style={{margin:'20px 0px 0px 100px',fontFamily:'TimesNewRoman',fontSize:'25px'}}>
                <label>Tags :</label>
                <input type='text' placeholder='Enter your identefied tags' name='tags' value={formdata.tags} onChange={handlechange} style={{fontFamily:'TimesNewRoman',fontSize:'25px',margin:'0px 0px 0px 10px'}}></input>
            </div>
            <div style={{margin:'-30px 0px 0px 700px',fontFamily:'TimesNewRoman',fontSize:'25px'}}>
                <label>Payment Method :</label>
                <select style={{margin:'0px 0px 0px 10px',fontSize:'20px'}} name='paymentmethod' value={formdata.paymentmethod} onChange={handlechange}>
                    <option>--Select--</option>
                    <option>Cash</option>
                    <option>Online</option>
                    <option>Debit Card</option>
                    <option>Credit Card</option>
                    <option>UPI Transaction</option>

                </select>
            </div>
            <div style={{margin:'20px 0px 0px 100px',fontFamily:'TimesNewRoman',fontSize:'25px'}}>
                <label>Priority :</label>
                <select style={{fontFamily:'TimesNewRoman',fontSize:'20px',margin:'0px 0px 0px 10px'}} value={formdata.priority} onChange={handlechange} name='priority'>
                    <option>--Select--</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Low</option>
                </select>
            </div>
            <div style={{margin:'-30px 0px 0px 700px',fontFamily:'TimesNewRoman',fontSize:'25px'}}>
                <label>Tax/Deduction :</label>
                <input type='text' placeholder='Enter Your Taxs' name='tax' value={formdata.tax} onChange={handlechange} style={{margin:'0px 0px 0px 10px',fontSize:'20px'}}></input>
            </div>

            <div style={{margin:'20px 0px 0px 100px',fontFamily:'TimesNewRoman',fontSize:'25px'}}>
                <label>Attach Receipt :</label>
                <input type='file' name='receipt' value={formdata.receipt} onChange={handlechange} style={{fontFamily:'TimesNewRoman',fontSize:'20px',margin:'0px 0px 0px 10px'}} ></input>
                
            </div>

            <div style={{margin:'-30px 0px 0px 700px',fontFamily:'TimesNewRoman',fontSize:'25px'}}>
                <label>Location</label>
                <input type='geolocation' name='location' value={formdata.location} onChange={handlechange} style={{margin:'0px 0px 0px 10px',fontSize:'20px'}}></input>
            </div>
            <div >
                <button type='submit'  style={{margin:'30px 0px 30px 450px',fontFamily:'TimesNewRoman',fontSize:'30px',backgroundColor:'#5356FF',color:'white'}}>Add Transaction</button>
            </div>
            </div>
            </form>
            

        </div>

        <div>
           

        </div>
    </div>
  )
}

export default MonthlyTransaction