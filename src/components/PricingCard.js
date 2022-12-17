const PricingCard = (props) => {
  return (
    //global container
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      {/* first row */}
      <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
        {/* first row outer Div */}
        <div className=" bg-slate-700 rounded-xl text-white ">
          {/* first row inner div */}
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <h2 className="text-center text-lg uppercase font-medium">Basic</h2>
            <div className="mt-10 font-serif font-extrabold text-4xl">
              100GB
            </div>
            <p className="text-center mt-2 font-medium">$1.99/month</p>
            <a
              href="www.google.com"
              className="flex justify-center mt-8 bg-slate-800 px-5 py-3 border border-cyan-700 rounded-lg hover:bg-purple-700 hover:border-purple-700"
            >
              Purchase
            </a>
          </div>
          <div className="border-t border-slate-700"></div>
          <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            <ul className="flex justify-center flex-col ">
              <li>100Gb</li>
              <li>Add new users</li>
              <li>Unlimited BandWidth</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PricingCard;

// in the list section you can add stuff and svg to
//And copy past for multiple containers