import "../card.css";

function Shimmer() {
  function ShimmerBox() {
    return (
      <div className="Shimmer_res_card">
        <div className="Shimmer_res_img_container"></div>
        <div className="Shimmer_first-line">
          <h2 className="res_name"></h2>
          <h3 className="res_rating"></h3>
        </div>
        <div className="Shimmer_ratingAndDeliveryTime">
          <span className="res_price"></span>
          <span className="res_delivery_time"></span>
        </div>
        <div className="res_cuisine"></div>
      </div>
    );
  }
  return (
    <div className="shimmer_container">
      <ShimmerBox />
      <ShimmerBox />

      <ShimmerBox />

      <ShimmerBox />

      <ShimmerBox />
      <ShimmerBox />
      <ShimmerBox />

      <ShimmerBox />

      <ShimmerBox />

      <ShimmerBox />
      <ShimmerBox />
      <ShimmerBox />

      <ShimmerBox />

      <ShimmerBox />

      <ShimmerBox />
      <ShimmerBox />
      <ShimmerBox />

      <ShimmerBox />

      <ShimmerBox />

      <ShimmerBox />
    </div>
  );
}

export default Shimmer;
