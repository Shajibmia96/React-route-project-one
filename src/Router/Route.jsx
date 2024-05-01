import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home";
import Favorite from "../Pages/Favorite/Favorite";
import LogIn from "../Pages/LogIn/LogIn";
import ErrorPage from "../Pages/ErrorPase/ErrorPage";
import PhoneDetails from "../Components/PhoneDetails/PhoneDetails";


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children :[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/public/phone.json')
                
            },
            {
                path : "/Favorite", 
                element: <Favorite></Favorite>   
            },
            {
                path: "/LogIn",
                element:<LogIn></LogIn>
            },
            {
                path:`phones/:id` ,
                element:<PhoneDetails></PhoneDetails>,
                loader: ()=> fetch('/public/phone.json')
            }
           
        ]
    }
])

export default myCreatedRoute;