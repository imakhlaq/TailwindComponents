import fb from "../img/loginModel/facebook.png";
import google from "../img/loginModel/google.png";
import bg from "../img/loginModel/image.jpg";

const LoginModel = (props) => {
  return (
    <div className="h-screen flex justify-center items-center">
      {/* model container */}
      <div
        className="md:grid md:grid-cols-2 shadow-lg shadow-pink-200
       bg-white justify-items-end items-center rounded-lg"
      >
        {/* form div */}
        <div className=" flex flex-col  space-y-10  p-12 md:p-20  ">
          <h2 className="uppercase font-extrabold text-3xl font-serif">
            log in
          </h2>
          <p className="text-lg max-w-md">
            Log in to your account to upload or download pictures, videos or
            music
          </p>
          <input
            type="text"
            className="p-5 focus:outline-none border border-gray-400 rounded-md placeholder:text-lg"
            placeholder="Enter you email here"
          />
          <div className="flex justify-between items-center ">
            <a href="dada" className="text-[#27afaf]">
              Forgot password?
            </a>
            <button className="px-9 py-4 bg-[#27afaf] font-medium text-slate-100 text-lg rounded-sm">
              Next →
            </button>
          </div>
          <div className="border-t border-gray-400"></div>
          <p className="text-center text-gray-400 ">Or log in with</p>

          <div className="flex justify-around">
            <div className="flex justify-center items-center gap-3 px-6 py-2 border border-gray-400 rounded-sm">
              <img src={fb} alt="" className="w-10" />
              <span>Facebook</span>
            </div>
            <div className="flex justify-center items-center gap-3 px-6 py-2 border border-gray-400 rounded-sm">
              <img src={google} alt="" className="w-10" />
              <span>Google</span>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={bg} alt="" className="max-w-md " />
        </div>
      </div>
    </div>
  );
};
export default LoginModel;
