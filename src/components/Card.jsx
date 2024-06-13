import "./card.css";
//import food_villa_logo from "../../Header/images/food_villa_logo.jpg"; // default export



const Res_card = ({ resData }) => {
  const {name,cloudinaryImageId,aggregatedDiscountInfoV3,cuisines,sla,avgRatingString} = (resData && resData.info)|| {}; // using optional chaining here so if there is no "resData" then also the code will not brock.

  return (
    <div className="res_card">
      <div className="res_img_container">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} className="res_img" alt={name} />
      </div>
      <div className="first-line">
        <h2 className="res_name">{name}</h2>
        <h3 className="res_rating">{avgRatingString}</h3>
      </div>
      <div className="ratingAndDeliveryTime">
        <span className="res_price">{aggregatedDiscountInfoV3?.subHeader}</span>
        <span className="res_delivery_time">
          {sla?.slaString}
        </span>
      </div>
      <div className="res_cuisine">
{cuisines?.toString()}
      </div>
    </div>
  );
};

const res_card_container = ({restrauntList}) => {
  return (
    <div className="res_card_container">
      {restrauntList.map((resturant) => (
        <Res_card resData={resturant} key={resturant?.info?.id}/>
      ))}
    </div>
  );
};

export default res_card_container;



















// import "./card.css";
// //import food_villa_logo from "../../Header/images/food_villa_logo.jpg"; // default export



// const Res_card = ({ resData}) => {
//   // const {id,name,cloudinaryImageId,locality,areaName,aggregatedDiscountInfoV3,cuisines,sla,avgRatingString,avgRating } = resData?.info; // using optional chaining here so if there is no "resData" then also the code will not brock.
//   const {product_imageUrl,product_name,rating,price,small_description } = resData; // using optional chaining here so if there is no "resData" then also the code will not brock.

//   return (
//     <div className="res_card">
//       <div className="res_img_container">
//       {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} className="res_img" alt={name} /> */}
      
//         <img src= {product_imageUrl} className="res_img" alt={product_name} />

//       </div>
//       <div className="first-line">
//         {/* <h2 className="res_name">{name}</h2> */}
//         {/* <h2 className="res_name">{name}</h2> */}
//         <h2 className="res_name">{product_name}</h2>

//         {/* <h3 className="res_rating">{avgRatingString}</h3> */}
//         <h3 className="res_rating">{rating}</h3>

//       </div>
//       <div className="ratingAndDeliveryTime">
//         {/* <span className="res_price">{aggregatedDiscountInfoV3?.subHeader}</span> */}
//         <span className="res_price">Rs.{price}</span>

//         {/* <span className="res_delivery_time">
//           {sla?.slaString}
//         </span> */}
//       </div>
//       {/* <div className="res_cuisine">
// {cuisines?.toString()}
//       </div> */}
//          <div className="res_cuisine">
// {small_description}
//       </div>
//     </div>
//   );
// };

// const res_card_container = ({restrauntList}) => {
//   return (
//     <div className="res_card_container">
//       {restrauntList.map((resturant) => (
//         // <Res_card resData={resturant} key={resturant?.info?.id}/>
//         <Res_card resData={resturant} key={resturant?.product_id}/>

//       ))}
//     </div>
//   );
// };

// export default res_card_container;
