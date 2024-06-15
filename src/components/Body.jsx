import { useEffect, useState } from "react";
import "./body.css";
import Res_card_container from "./Card";
import Search from "./Search";
import Shimmer from "./shimmer/shimmer";
// import {mockData} from "./utils/mockdata";

const Body = () => {
  const [restrauntList, setRestrauntList] = useState([]);
  const [allRestrauntList, setAllRestrauntList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // for fatching with a API we can use this
  const fetchData = async () => {
    const data = await fetch(
      "https://api-proxy-backend.onrender.com/fetch/https://www.swiggy.com/api/seo/getListing?lat=18.621055599465002&lng=73.8306423049214"
    );

    const swiggyData = await data.json();

    // console.log(swiggyData);
    console.log(
      swiggyData.data.success.cards[1].card.card.gridElements.infoWithStyle
        .restaurants
    );

    setRestrauntList(
      swiggyData?.data?.success?.cards[1]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants
    );
    setAllRestrauntList(
      swiggyData?.data?.success?.cards[1]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants
    );
  };




  // const fetchData =  () => {

  //   const swiggyData = mockData;

  //   console.log(swiggyData);
  //   // console.log(
  //   //   swiggyData.data.success.cards[1].card.card.gridElements.infoWithStyle
  //   //     .restaurants
  //   // );

  //   setRestrauntList(
  //     swiggyData?.data?.success?.cards[1]?.card?.card?.gridElements
  //       ?.infoWithStyle?.restaurants
  //   );
  //   setAllRestrauntList(
  //     swiggyData?.data?.success?.cards[1]?.card?.card?.gridElements
  //       ?.infoWithStyle?.restaurants
  //   );
  // };


  return (
    <div className="body">
      <Search
        restrauntList={restrauntList}
        setAllRestrauntList={setAllRestrauntList}
      />
      {restrauntList.length === 0 ? (
        // <h1>loading... add shimmer ui here</h1>
        <Shimmer/>
      ) : (
        <Res_card_container restrauntList={allRestrauntList} />
      )}
    </div>
  );
};

export default Body;

