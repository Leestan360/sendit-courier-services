import React from "react";

function ViewDel() {
  return (
    <div className="bg-gray-100 w-[100%] text-slate-900">
      <h2 className="font-open text-lg font-bold mx-5 my-2">View Delivery</h2>
      <hr className="m-2 border" />
      <div className="flex justify-around">
        <div className="bg-white  w-[100%] shadow-lg p-1 rounded-md">
          <div className="flex p-5">
            <div className="p-2 text-blue-500 bg-indigo-50 rounded-full mr-3 w-[55px] h-[55px]">
              <i class="bx bx-list-ul bx-md"></i>
            </div>
            <div>
              <h3 className="text-2xl font-jost">ID: #987654</h3>
              <p className="w-[100px] rounded-full bg-indigo-50 text-blue-300 text-center">
                in transit
              </p>
            </div>
          </div>
          <hr className="mx-5 my-2 border" />
          <div>
            <h2 className="font-open text-lg font-bold  m-2">
              Order Information
            </h2>
            <div className="flex flex-col justify-around md:flex-row">
              <div className="flex justify-around py-4 bg-indigo-50 max-w-[300px] w-[100%] rounded-lg m-1 ">
                <div className="p-2 text-blue-500 bg-indigo-100 rounded-full mr-3 w-[55px] h-[55px]">
                  <i class="bx bx-list-ul bx-md"></i>
                </div>
                <div>
                  <h3 className="text-base font-work font-extrabold">Weight</h3>
                  <p className="w-[200px] rounded-full bg-indigo-50 text-blue-800 ">
                    <span className="text-3xl"> 53 </span>kilograms
                  </p>
                </div>
              </div>
              <div className="flex justify-around py-4 bg-indigo-50 max-w-[300px] w-[100%] rounded-lg m-1 ">
                <div className="p-2 text-blue-500 bg-indigo-100 rounded-full mr-3 w-[55px] h-[55px]">
                <i class='bx bxs-category bx-md'></i>
                </div>
                <div>
                  <h3 className="text-base font-work font-extrabold">Category Type</h3>
                  <p className="w-[200px] rounded-full bg-indigo-50 text-blue-800 ">
                    <span className="text-3xl"> </span>electronics
                  </p>
                </div>
              </div>
              <div className="flex justify-around py-4 bg-indigo-50 max-w-[300px] w-[100%] rounded-lg m-1">
                <div className="p-2 text-blue-500 bg-indigo-100 rounded-full mr-3 w-[55px] h-[55px] flex justify-around items-center ">
                <i class="fa-solid fa-scale-unbalanced-flip fa-xl"></i>
                </div>
                <div>
                  <h3 className="text-base font-work font-extrabold">Weight</h3>
                  <p className="w-[200px] rounded-full bg-indigo-50 text-blue-800 ">
                    <span className="text-3xl"> 53 </span>kilograms
                  </p>
                </div>
              </div>  
            </div>
            <div className="flex flex-col justify-around md:flex-row mt-4">
              <div className="flex justify-around py-4 bg-indigo-50 max-w-[300px] w-[100%] rounded-lg m-1 ">
                <div className="p-2 text-blue-500 bg-indigo-100 rounded-full mr-3 w-[55px] h-[55px]  flex justify-around items-center ">
                <i class="fa-sharp fa-solid fa-location-dot fa-xl"></i>
                </div>
                <div>
                  <h3 className="text-base font-work font-extrabold">Pickup Location</h3>
                  <p className="w-[200px] rounded-full bg-indigo-50 text-blue-800 ">
                    <span className="text-3xl">  </span>ngong rd
                  </p>
                </div>
              </div>
              <div className="flex justify-around py-4 bg-indigo-50 max-w-[300px] w-[100%] rounded-lg m-1 ">
                <div className="p-2 text-blue-500 bg-indigo-100 rounded-full mr-3 w-[55px] h-[55px]  flex justify-around items-center ">
                <i class="fa-solid fa-location-crosshairs fa-xl"></i>
                </div>
                <div>
                  <h3 className="text-base font-work font-extrabold">Delivery Location</h3>
                  <p className="w-[200px] rounded-full bg-indigo-50 text-blue-800 ">
                    <span className="text-3xl">  </span>kasarani
                  </p>
                </div>
              </div>
              <div className="flex justify-around py-4 bg-indigo-50 max-w-[300px] w-[100%] rounded-lg m-1">
                <div className="p-2 text-blue-500 bg-indigo-100 rounded-full mr-3 w-[55px] h-[55px] flex justify-around items-center ">
                <i class='bx bxs-time bx-md' ></i>
                </div>
                <div>
                  <h3 className="text-base font-work font-extrabold">Expected Time</h3>
                  <p className="w-[200px] rounded-full bg-indigo-50 text-blue-800 ">
                    <span className="text-3xl">  </span>2hrs
                  </p>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDel;
