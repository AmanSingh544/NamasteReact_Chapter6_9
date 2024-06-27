import { useRouteError,Link } from "react-router-dom";

const Error=()=>{
    const error = useRouteError();
    console.log(error)
    return (<>
    <div>
        <h2>Error OOPs!!!!!!!!</h2>
        <h3>Something went Error</h3>
        <h4>{error.data}</h4>
        <h5>Status Code : {error.status}</h5>
        <h6>Status Text : {error.statusText}</h6>
        <h2>Go to Home : <Link to="/">Home</Link></h2>
    </div>
    </>)
}
export default Error;