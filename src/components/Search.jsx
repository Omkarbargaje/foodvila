import { useState } from "react";
import "./search.css";

const Search = ({ restrauntList, setAllRestrauntList }) => {
  const [searchTxt, setSearchTxt] = useState("");

  return (
    <div className="search">
      <input
        type="text"
        className="inputbox"
        value={searchTxt}
        onChange={(e) => {
          setSearchTxt(e.target.value);

          let filterdList = restrauntList.filter((res) => {
            return res?.info?.name.toLowerCase().includes(searchTxt.toLowerCase());
           });
 
           setAllRestrauntList(filterdList);
           console.log(e.target.value);
           if(e.target.value === ""){
            setAllRestrauntList(restrauntList);
           }
        }}
      />
      <button
        className="search-btn"
        onClick={() => {
          let filterdList = restrauntList.filter((res) => {
           return res?.info?.name.toLowerCase().includes(searchTxt.toLowerCase());
          });

          setAllRestrauntList(filterdList);
          console.log(filterdList);
        }}
      >
        search
      </button>


      <button
        className="Rating"
        onClick={() => {
          let filterdList = restrauntList.filter(
            (res) => res?.info?.avgRating >= 4
          );
          setAllRestrauntList(filterdList);
        }}
      >
        Rating 4.0+
      </button>
      <button
        className="Rating"
        onClick={() => {
          setAllRestrauntList(restrauntList);
        }}
      >
        All
      </button>
    </div>
  );
};

export default Search;
