import { createBrowserRouter } from "react-router-dom";
import About from "../About";
import ContactUs from "../ContactUs";
import App from "../../App";
import Error from "../Error";
import Body from "../body/Body";
import ResturantDetails from "../resturantMenu/ResturantDetails";
import Instamart from "../Instamart";

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contactus",
                element: <ContactUs/>
            },
            {
                path:"/resturant/:name/:location", // this is dynamic routing b/c here name can be anything . it is dynamic
                // "/resturant/:xyz" this params can be any name. This names will be used to extract data from params.
                element:<ResturantDetails/>
            },
            {
                path:"/instamart",
                element:<Instamart/>,
            }
        ]
    },
    
]);

export default appRouter;