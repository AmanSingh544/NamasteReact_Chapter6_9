import ResturantListArr from '../constants/resturantlist';
import { ResturantsList } from './Resturants';
import SearchBar from './SearchBar';
import { useState } from 'react';

const Body=()=>{
    const [resturantlist,setReturantList]= useState(ResturantListArr);
  const applySearch=(value)=>{
    setReturantList((prevArr)=>
      ResturantListArr.filter((item) => item.Restaurant_Name?.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    );
  }
    return(
    <>
      <SearchBar applySearch={applySearch} />
      <ResturantsList ResturantList={resturantlist}/>
    </>);
}

export default Body;