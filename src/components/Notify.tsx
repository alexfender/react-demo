import React from 'react'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Notify = () => {
  return <ToastContainer 
    pauseOnFocusLoss={false} 
    autoClose={3000} 
    hideProgressBar={true}
    closeOnClick={true}
    pauseOnHover={true}
    />
}

export default Notify