import React,{useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './sidenav2.css'

const History = () => {
  
  const location = useLocation();
  const formdata = location.state;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/DailyTransaction");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  

  

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  
  return (
    <div>
      <div style={{backgroundColor:'#5356FF',width:'100%',height:'100px',marginTop:'80px'}}>
            <div className={isOpen ? "sidebar open" : "sidebar closed"} style={{backgroundColor:'#5356FF'}}>
                <button className="toggle-btn" onClick={toggleSidebar} style={{backgroundColor:'#5356FF'}}>
                      
      
                     <video src={require('./euro.mp4')} alt='euroimage' style={{height:'60px',width:'80px',margin:'10px 0px 0px 10px',}}></video>
                </button>
              
                   {isOpen && (
                       
                      <ul>
                        <li><a href="/" style={{fontFamily:'TimesNewRoman',fontSize:'20px',margin:'0px 120px 0px 0px'}}><img src={require('./home-page.png')} alt='home' style={{height:'30px',width:'30px',margin:'0px 5px 0px 0px'}}></img>Home</a></li>
                        <li><a href="/MonthlyTransaction" style={{fontFamily:'TimesNewRoman',fontSize:'20px',}}><img src={require('./piggy-bank.png')} alt='home' style={{height:'30px',width:'30px',margin:'0px 5px 0px 0px'}}></img>Recurring Transaction (Monthly Payment Only)</a></li>
                        <li><a href="/services" style={{fontFamily:'TimesNewRoman',fontSize:'20px',margin:'0px 15px 0px 0px'}}><img src={require('./prioritize.png')} alt='home' style={{height:'30px',width:'30px',margin:'0px 5px 0px 0px'}}></img>Priority/Importance</a></li>
                      
                        <li><a href="/History"  style={{fontFamily:'TimesNewRoman',fontSize:'20px',margin:'-3px 120px 0px 0px'}}><img src={require('./history.png')} alt='home' style={{height:'30px',width:'30px',margin:'5px 5px -10px 0px'}}></img>History</a></li>
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
                <input type='date'value={formdata.date} name='date' style={{fontSize:'20px'}}></input>
            </div>
            

        </div>
      {formdata ? (
        <div>
        <table border={'1'} style={{margin:'20px 0px 0px 300px',fontSize:'20px',tabSize:'40px',overflowY:'scroll'}}>
        <thead  style={{backgroundColor:'#4A628A',color:'whitesmoke',padding:'20px'}}>
        <tr >
            <th style={{padding:'20px'}}>Transaction Type</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Location</th>
            <th>Payment Method</th>
            <th>Priority</th>
            <th>Tags</th>
           
            
        </tr>
        </thead>
        <tbody style={{padding:'20px'}}>
        {data.map((item) => (
        <tr  key={item._id} >
        
          <td style={{padding:'20px'}}>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.category}</td>
          <td>{item.description}</td>
          <td>{item.location}</td>
          <td>{item.paymentmethod}</td>
          <td>{item.priority}</td>
          <td>{item.tags}</td>
          
          

        </tr>
      ))}
        </tbody>
    </table>
    </div>
      ):(
        <p>No Data Avalible</p>
      ) }
        
    </div>
  );
};

export default History