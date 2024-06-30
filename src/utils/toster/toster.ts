import { toast } from "react-toastify";
export const notify = (type:string,message:string,position:string)=>{
    switch(type){
      case 'success':
        return toast.success(`${message}`, {
          // @ts-ignore
          position: `${position}`,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
          }); 
      case 'error':
        return toast.error(`${message}`, {
          // @ts-ignore
          position: `${position}`,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
          }); 
      case 'warn':
        return toast.warn(`${message}`, {
          // @ts-ignore
          position: `${position}`,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
          }); 
      case 'info':
        return toast.info(`${message}`, {
          // @ts-ignore
          position: `${position}`,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
          }); 
      
      default: toast(`${message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
    }
  }