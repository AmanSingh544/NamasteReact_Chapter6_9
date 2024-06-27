import React, { useEffect, useState } from "react";
import '../body/resturants.css';
import Shimmer from "../Shimmer";

const Resturant = ({ item }) => {
    return (
        <div className="resturant-container">
            <div className="resturant-content">
                <div className="resturant-logo">Resturant Logo</div>
                <div className="resturant-title">{item.Restaurant_Name}</div>
                <div className="resturant-address">{item.Address}</div>
                <div className="resturant-timing">{item.Timing}</div>
                <span>Ratings: {item.Ratings_for_Swiggy}</span>
            </div>
        </div>
    );
}

const ShowShimmer = () => {
    const [showShimmer, setShowShimmer] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowShimmer(false);
      }, 100);
  
      return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);
  
    return showShimmer ? <Shimmer /> : null;
  };

const ResturantsList = ({ ResturantList }) => {
    return (
        <div className="resturant-list">
            <ShowShimmer />
            {ResturantList.map((item, index) => 
              <Resturant item={item} key={index} />
            )}
        </div>
    );
};

export { ResturantsList };
