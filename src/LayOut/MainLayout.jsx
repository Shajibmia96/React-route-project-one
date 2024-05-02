import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import { useEffect } from "react";

const MainLayout = () => {

     const loc = useLocation()
     console.log(loc)
    
     useEffect(()=>{
          console.log(loc.pathname)
          
          if(loc.pathname === '/'){
            document.title = ` Phones-Home`
          }else{
            document.title = ` Phones${loc.pathname.replace('/' ,'-')}`
          }
          if(loc.state){
                  document.title = `${loc.state}`
          }

     },[loc.pathname])
     
    return (
        <div className="container mx-auto" >
             <Navbar></Navbar>
             <div className="py-10">
             <Outlet></Outlet>
             </div>
        </div>
    );
};

export default MainLayout;