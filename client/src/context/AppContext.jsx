import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';


// 1. Create Context
export const AppContext = createContext();

// 2. Create Provider
const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate =useNavigate()
 
  const loadCreditsData = async () => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/credits",
        {},
        {
          headers: { token },
        }
      );
      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const genarateImage = async (prompt)=>{
   try {
   const {data}= await axios.post(backendUrl+'/api/image/generate-image',{prompt},{headers:{token}})
   if(data.success){
    loadCreditsData()
    return data.resultImage
   }
   else{
    toast.error(data.message)
    loadCreditsData()
    if(data.creditBalance === 0){
      navigate('/buy')
    }
   }
    
   } catch (error) {
   toast.error(error.message)
   }
  }

  useEffect(() => {
    if (token) {
      loadCreditsData();
    }
  }, [token]);
  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    credit,
    setCredit,
    token,
    setToken,
    loadCreditsData,
    genarateImage
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
