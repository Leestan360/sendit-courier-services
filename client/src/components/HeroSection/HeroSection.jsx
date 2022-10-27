import HomePage from "../homepage/HomePage";

const HeroSection = () => {
    return ( 
        <>
        <div className="flex flex-col-reverse sm:flex-row w-[100%] items-center justify-start shadow-md bg-indigo-50">
            <div className="text-slate-900 max-w-[550px] w-[100%] flex flex-col items-center ">
                <h2 className="font-extrabold text-5xl font-open m-5 max-w-[500px] mb-[100px] ">Send Your Couriers Anywhere from your Phone</h2>
                <button className="px-3 py-2 rounded-lg bg-blue-800 text-white font-inter font-bold max-w-[200px] w-[100%] text-xl">Get Started</button>
            </div>
            <div className="">
                <img src={process.env.PUBLIC_URL + "/delivery-man.png"} alt="" className="relative top-22 max-w-[700px] w-[100%] object-cover" />
            </div>
            </div>
            <HomePage />
        
        </>
     );
}
 
export default HeroSection;