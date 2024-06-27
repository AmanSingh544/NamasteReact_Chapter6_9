import { useParams } from "react-router-dom";

const ResturantDetails=()=>{
    const {name,location}= useParams();
    return (<>
    <div>
        <h1>Resturant Details</h1>
        <hr></hr>
        <h2>Restaurant: {name.toUpperCase()}</h2>
        <h3>Location: {location.toUpperCase()}</h3>
        <h3>Details</h3>
    </div>
    </>)
}

export default ResturantDetails;