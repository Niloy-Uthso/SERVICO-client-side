import {
  createBrowserRouter,
  
} from "react-router";
import Rootlayout from "../Rootlayout";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ErrorPage from "../pages/ErrorPage";
import Myservice from "../pages/Myservice";
import Newservice from "../pages/Newservice";
import Allservices from "../pages/Allservices";
import Servicedetails from "../pages/Servicedetails";
import Updateservice from "../pages/Updateservice";
import MyReviews from "../pages/Myreviews";

 

 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Rootlayout,
     errorElement:<ErrorPage></ErrorPage>,
    children:[

        {
            path:"/",  
            Component:Home,
            // loader:()=>fetch('http://localhost:3000/services'),
             loader:()=>fetch('http://localhost:3000/services/limited')

            //  /services/limited

        },
         {
        path:"/login",
         Component:Login
     },
     {
      path:"/register",
       Component:Register
     },
      {
      path:"/myservice",
      Component:Myservice, 
      // loader:()=>fetch(' https://hobbyhub-server-nine.vercel.app/groups'),
      loader:()=>fetch('http://localhost:3000/services'),
     },
     {
        path:"/createservice",
        Component:Newservice,
        
     },
     {
        path:"/services",
         
        Component:Allservices,
        // loader:()=>fetch(' https://hobbyhub-server-nine.vercel.app/groups'),
        loader:()=>fetch('http://localhost:3000/services'),
     },
     {
        path:"/service/:id",
        Component:Servicedetails,
    //    loader: ({ params }) => fetch(` https://hobbyhub-server-nine.vercel.app/groups/${params.id}`)
       loader: ({ params }) => fetch(`http://localhost:3000/service/${params.id}`)
     },
     {
        path:"/myservice/updateService/:id",
        Component:Updateservice,
        //  loader: ({ params }) => fetch(` https://hobbyhub-server-nine.vercel.app/groups/${params.id}`)
         loader: ({ params }) => fetch(`http://localhost:3000/service/${params.id}`)

     },
     {
      path:"/myreviews",
      Component:MyReviews,
      loader:()=>fetch('http://localhost:3000/services'),
     }

     
    ]
  },
]);