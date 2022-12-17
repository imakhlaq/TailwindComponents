import image from "../img/image.jpg";
const Cart = (props) => {
  return (
    <div className="h-screen bg-zinc-700 flex justify-center items-center ">
      <div className=" bg-neutral-800 p-2 mx-6 rounded-2xl">
        <div className="flex flex-col md:flex-row rounded-l-xl">
          <img
            src={image}
            alt=""
            className="object-fit rounded-2xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 duration-300 hover:rounded-xl "
          />

          <div className="p-6 md:12">
            <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
              Get diet and Fitness tips in your inbox
            </h2>
            <p className="max-w-xs md:text-left text-xs leading-5 tracking-wide text-center text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate
            </p>
            <div className=" flex flex-col md:flex-row mt-5 space-y-4 md:space-x-3 md:space-y-0">
              <input
                type="email"
                className="p-2 md:p-1 text-center md:text-left text-xl font-small rounded-md bg-zinc-400 text-white
                placeholder:text-lg placeholder:text-white focus:outline-none"
                placeholder="Enter Email"
              />
              <button className="bg-lime-500 p-1 rounded-lg text-lg font-medium ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
