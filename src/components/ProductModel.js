import headphone from "../img/productModel/headphone.png";
import heart from "../img/productModel/heart.png";
import weight from "../img/productModel/weight.png";

const ProductModel = (props) => {
  return (
    <div className="h-screen bg-white flex justify-center items-center">
      <div className=" shadow-2xl flex flex-col md:flex-row">
        <div className="p-2">
          <img
            src={headphone}
            alt=""
            className="max-w-xs hover:translate-y-2 duration-300"
          />
        </div>
        <div className="flex flex-col ">
          <h3 className="p-1 bg-black text-white rounded-xl w-28 text-sm text-center">
            Free shipping
          </h3>
          <h2 className="mt-5 text-2xl max-w-sm font-bold">
            Razer Kraken kitty Edt Gaming Headset Quartz
          </h2>
          <p className="mt-6 font-semibold text-lg line-through">$799</p>

          <p className=" text-5xl font-bold mt-2">$599</p>
          <p className="mt-3 text-base text-gray-400">
            The offer is valid until April 3 or as long as stock last!
          </p>
          <button
            className="mt-6 block bg-blue-500 h-14 rounded-md text-white font-medium
          text-lg hover:bg-blue-400 hover:shadow-lg transition-all duration-200"
          >
            Add to cart
          </button>
          <div className="mt-8 flex items-center gap-4 ">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <p className="font-medium text-base">50+ pcs in stock.</p>
          </div>
          <div className="flex justify-around mt-7 mb-16">
            <div className="flex items-center gap-2 border-2 border-gray-300 rounded-md p-2">
              <img src={weight} alt="" className="w-[2rem]" />
              <p className="font-medium text-lg">Add to cart</p>
            </div>
            <div className="flex items-center gap-2 border-2  border-gray-300 rounded-md p-2">
              <img src={heart} alt="" className="w-[2rem]" />
              <p className="font-medium text-lg">Add to wishlist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductModel;
