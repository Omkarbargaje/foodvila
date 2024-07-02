import { resMenuAPI } from "../utils/constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  const [resDetails, setResDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `${resMenuAPI}lat=18.5204303&lng=73.8567437&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );

    const resMenuData = await data.json();

    setResMenu(
      //   resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
    );
    setResDetails(resMenuData?.data?.cards[2]?.card?.card);
  };

  return { resMenu, resDetails };
};

export default useRestaurantMenu;
