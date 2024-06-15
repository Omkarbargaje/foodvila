import "./card.css";
//import food_villa_logo from "../../Header/images/food_villa_logo.jpg"; // default export



const Res_card = ({ resData }) => {
  const {name,cloudinaryImageId,costForTwo,cuisines,sla,avgRatingString} = (resData && resData.info)|| {}; // using optional chaining here so if there is no "resData" then also the code will not brock.

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
        <span className="res_price">{costForTwo}</span>
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

