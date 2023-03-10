import img1 from "../img/imgGallery/image1.jpg";
import img2 from "../img/imgGallery/image2.jpg";
import img3 from "../img/imgGallery/image3.jpg";
import img4 from "../img/imgGallery/image4.jpg";
import img5 from "../img/imgGallery/image5.jpg";
import img6 from "../img/imgGallery/image6.jpg";

const ImageGallery = (props) => {
  return (
    //global container
    <div className=" flex justify-center items-center bg-slate-700">
      {/* card container */}
      <div className="p-6 m-3 space-y-10 shadow-xl rounded-2xl md:p-40 bg-slate-50 ">
        {/* nav container */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:mb-24 md:justify-end md:space-x-3">
          {/* first */}
          <div className="group flex flex-col">
            <a href="google.com" className=" text-lg text-black font-medium">
              Vector
            </a>
            <div className="mt-2 mx-2 border border-black opacity-0 group-hover:opacity-100 duration-300"></div>
          </div>
          {/* second */}
          <div className="group flex flex-col">
            <a href="google.com" className=" text-lg text-black font-medium">
              illustration
            </a>
            <div className="mt-2 mx-2 border border-black opacity-0 group-hover:opacity-100 duration-300"></div>
          </div>
          <div className="group flex flex-col">
            <a href="google.com" className=" text-lg text-black font-medium">
              Contact
            </a>
            <div className="mt-2 mx-2 border border-black opacity-0 group-hover:opacity-100 duration-300"></div>
          </div>
          <div className="group flex flex-col">
            <a href="google.com" className=" text-lg text-black font-medium">
              Help
            </a>
            <div className="mt-2 mx-2 border border-black opacity-0 group-hover:opacity-100 duration-300"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-3  md:space-y-0 md:space-x-3 items-center justify-center">
          <div className="flex gap-3 p-1">
            <input
              type="text"
              className="bg-transparent focus:outline-none"
              placeholder="Search"
            />
            <svg
              className="w-6 md:w-9 cursor-pointer hover:stroke-[#299ecc]"
              aria-labelledby="title desc"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19.9 19.7"
            >
              <title id="title">Search Icon</title>
              <desc id="desc">A magnifying glass icon.</desc>
              <g class="search-path" fill="none" stroke="#848F91">
                <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
                <circle cx="8" cy="8" r="7" />
              </g>
            </svg>
          </div>
          <button className="px-14 py-3 rounded-lg bg-black text-white sm:px-18 ">
            Upload
          </button>
        </div>

        {/* img gallery */}
        <div className="grid md:grid-cols-3 gap-3">
          {/* first */}
          <div className="group relative transition-all duration-300">
            <img src={img1} alt="" className="max-w-full" />
            <div className=" group-hover:opacity-100 opacity-0 transition-all duration-300 flex justify-between absolute bg-gray-200 bottom-0 px-2 py-3 w-full text-lg text-gray-400">
              <p>Human painting</p>
              <p> 134 likes - 4 shares</p>
            </div>
          </div>
          {/* second */}
          <div className="group relative transition-all duration-300">
            <img src={img2} alt="" className="max-w-full" />
            <div className=" group-hover:opacity-100 opacity-0 transition-all duration-300 flex justify-between absolute bg-gray-200 bottom-0 px-2 py-3 w-full text-lg text-gray-400">
              <p>Human painting</p>
              <p> 134 likes - 4 shares</p>
            </div>
          </div>

          <div className="group relative transition-all duration-300">
            <img src={img3} alt="" className="max-w-full" />
            <div className=" group-hover:opacity-100 opacity-0 transition-all duration-300 flex justify-between absolute bg-gray-200 bottom-0 px-2 py-3 w-full text-lg text-gray-400">
              <p>Human painting</p>
              <p> 134 likes - 4 shares</p>
            </div>
          </div>
          <div className="group relative transition-all duration-300">
            <img src={img4} alt="" className="max-w-full" />
            <div className=" group-hover:opacity-100 opacity-0 transition-all duration-300 flex justify-between absolute bg-gray-200 bottom-0 px-2 py-3 w-full text-lg text-gray-400">
              <p>Human painting</p>
              <p> 134 likes - 4 shares</p>
            </div>
          </div>
          <div className="group relative transition-all duration-300">
            <img src={img5} alt="" className="max-w-full" />
            <div className=" group-hover:opacity-100 opacity-0 transition-all duration-300 flex justify-between absolute bg-gray-200 bottom-0 px-2 py-3 w-full text-lg text-gray-400">
              <p>Human painting</p>
              <p> 134 likes - 4 shares</p>
            </div>
          </div>
          <div className="group relative transition-all duration-300">
            <img src={img6} alt="" className="max-w-full" />
            <div className=" group-hover:opacity-100 opacity-0 transition-all duration-300 flex justify-between absolute bg-gray-200 bottom-0 px-2 py-3 w-full text-lg text-gray-400">
              <p>Human painting</p>
              <p> 134 likes - 4 shares</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageGallery;
