import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Notify:React.FC = () => {
  return <ToastContainer 
    pauseOnFocusLoss={false} 
    autoClose={3000} 
    hideProgressBar={true}
    closeOnClick={true}
    pauseOnHover={true}
    />
}

export default Notify