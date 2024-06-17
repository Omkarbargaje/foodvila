import { useState, useEffect, useLayoutEffect } from "react";
import { resMenuAPI } from "../utils/constants";
import "./resMenu.css";
import { useParams } from "react-router-dom";



// import ".../assets/resMenu/material-symbols--star.svg";
// import "foodvila/src/assets/resMenu/material-symbols--star.svg";

const ResMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const [resDetails, setResDetails] = useState(null);
  const {resId}=useParams();  //for taking dynamic res ids


//it make sure page starts scrolling from top
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `${resMenuAPI}lat=18.5204303&lng=73.8567437&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );

    const resMenuData = await data.json();

    console.log(resMenuData);

    setResMenu(
      //   resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
    );
    setResDetails(resMenuData?.data?.cards[2]?.card?.card);
  };

    console.log(resMenu);

//   console.log(resDetails);

  const {
    id,
    name,
    city,
    avgRating,
    costForTwoMessage,
    cuisines,
    locality,
    expectationNotifiers,
    sla,
  } = resDetails?.info || {};

  const Product = ({ product }) => {
    const { name, price, description, imageId, id } =
      (product && product?.card?.info) || {};
    return (
      <div className="productsContainer">
        <div className="products">
          <div className="productDetail">
            <div className="productName">{name}</div>
            <div className="productPrice">Rs.{price / 100}</div>
            <div className="productDescription">{description}</div>
          </div>
          
            {imageId ? (
               <div className="imgContainer">
                 <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
              alt={id}
            />
            <button>Add</button>
            </div>
            ):  
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"150px"}}>
          
       <button style={{width:"70px", positio:"absolute",inset:"0px",transition:"all 100ms ease-in-out 0s", textAlign:"center",transform:"translateY(0px)"}}>Add</button>
       </div>
            // <button style={{width:"120px", positio:"absolute",inset:"0px",transition:"all 100ms ease-in-out 0s", textAlign:"center",transform:"translateY(0px)"}}>Add</button>
            }
           
         
        </div>
        <hr />
      </div>
    );
  };

  return (
    <div className="mainMenuContainer">
      <div key={id} className="menuContainer">
        <div className="resName">{name}</div>

        {resDetails && (
          <div className="resDetailContainer">
            <div className="resDetails">
              <div className="ratingAndPrice">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#277c31"
                    d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
                  />
                </svg>
                {avgRating} | {costForTwoMessage}
              </div>
              <div className="cuisines">{cuisines?.toString()}</div>
              <div className="resLocality">
                {locality}, {city}
              </div>
              <div className="deliveryTime">{sla?.slaString}</div>
            </div>
            <hr />
         
            <div className="delveryDetail">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/v1648635511/Delivery_fee_new_cjxumu" alt="" />
                <span 
              dangerouslySetInnerHTML={{
                __html: expectationNotifiers[0]?.text?.slice(3),
              }}/>
            </div>
          </div>
        )}

        <div className="resMenu">
          {resMenu?.cards &&
            resMenu?.cards.map((category,index) => (
              <div key={index}>
                <div className="accordionHeading">
                  {category?.card?.card?.title}
                </div>
                <div className="allProducts">
                  {
                    category?.card?.card?.itemCards &&
                      category?.card?.card?.itemCards.map((product) => (
                        <Product
                          key={product?.card?.info?.id}
                          product={product}
                        />
                      ))
                    //   : (
                    //     <div>Loading...</div>
                    //   )
                  }
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ResMenu;
