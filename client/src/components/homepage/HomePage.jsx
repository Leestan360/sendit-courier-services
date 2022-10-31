import React from 'react';
import { CgProfile } from "react-icons/cg";

function HomePage() {
  return (
     <>
<section className=" bg-blueGray-200 -mt-24 font-poppins">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
          <div className="px-4 flex-auto">
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap items-center mt-16 font-jost ">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
          {/* <i className="fas fa-user-friends text-xl"></i> */}
          < CgProfile size={40} className="text-blue-600" />
        </div>
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
          Working with us is a pleasure
        </h3>
        <p className="text-lg font-lightleading-relaxed mt-4 mb-4 text-blueGray-600">
          Personal deliveries to work often seem like the best solution when you cannot wait for the courier at home. However, there is one thing we do not always take into consideration – the work mailroom policy and the etiquette for parcel delivery at the office.
        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
          However, there is one thing we do not always take into consideration – the work mailroom policy and the etiquette for parcel delivery at the office.
        </p>
        <a href="../index.html" className="font-bold text-blueGray-700 mt-8">Check Sendit Services</a>
      </div>
      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg bg-indigo-300">
          <img alt="..." src="https://media.istockphoto.com/photos/percel-shipping-concept-quadrocopter-drones-delivering-a-parcel-picture-id611609126?b=1&k=20&m=611609126&s=170667a&w=0&h=83GWG45uLlZ65RkKNVBEugZoo9gIRqSE0Edszt_Ii-Y=" className="w-full align-middle rounded-t-lg" />
          <blockquote className="relative p-8 mb-4">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                    <polygon points="-30,95 583,95 583,65" className="text-transparent fill-current"></polygon>
                  </svg>
         
            <h4 className="text-xl font-bold text-white">
              Top Notch Services
            </h4>
            <p className="text-md font-light mt-2 text-white">
             Personal deliveries to work often seem like the best solution when you cannot wait for the courier at home.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
  {/* <footer className="relative pt-8 pb-6 mt-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-6/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
            Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" class="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
          </div>
        </div>
      </div>
    </div>
  </footer> */}
</section>
      
<div className="flex items-center justify-center mt-10 bg-indigo-50 mb-4">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pt-6 pb-6">
        
        <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-sm">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
            
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            </div>
            <div className="mt-8">
                <p className="text-xl font-semibold my-2">Marketing</p>
                <div className="flex space-x-2 text-gray-400 text-sm">
                
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                     <p>Marketing Team</p> 
                </div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>1 Weeks Left</p> 
                </div>
                <div className="border-t-2"></div>

                <div className="flex justify-between">
                    <div className="my-2">
                        <p className="font-semibold text-base mb-2">Team Members</p>
                        <div className="flex space-x-2">
                            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""
                            className="w-6 h-6 rounded-full"/>
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2KDK4L372WfwDkOMlCzOI3bFBrtC4ILqLQA&usqp=CAU" alt=""
                            className="w-6 h-6 rounded-full"/>
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU" alt=""
                            className="w-6 h-6 rounded-full"/>
                        </div>
                    </div>
                     <div className="my-2">
                        <p className="font-semibold text-base mb-2">Performance</p>
                        <div className="text-base text-gray-400 font-semibold">
                            <p>34%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-sm">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
            
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <div className="mt-8">
                <p className="text-xl font-semibold my-2">Orders</p>
                <div className="flex space-x-2 text-gray-400 text-sm">
                
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                     <p>Orders Team</p> 
                </div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>3 Weeks Left</p> 
                </div>
                <div className="border-t-2 "></div>

                <div className="flex justify-between">
                    <div className="my-2">
                        <p className="font-semibold text-base mb-2">Team Members</p>
                        <div className="flex space-x-2">
                            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""
                            className="w-6 h-6 rounded-full"/>
                        </div>
                    </div>
                     <div className="my-2">
                        <p className="font-semibold text-base mb-2">Performance</p>
                        <div className="text-base text-gray-400 font-semibold">
                            <p>76%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-sm">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
            
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            </div>
            <div className="mt-8">
                <p className="text-xl font-semibold my-2">Leading orders</p>
                <div className="flex space-x-2 text-gray-400 text-sm">
                
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                     <p>Leading Team</p> 
                </div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>2 Days Left</p> 
                </div>
                <div className="border-t-2 "></div>

                <div className="flex justify-between">
                    <div className="my-2">
                        <p className="font-semibold text-base mb-2">Team Member</p>
                        <div className="flex space-x-2">
                            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""
                            className="w-6 h-6 rounded-full"/>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU" alt=""
                            className="w-6 h-6 rounded-full"/>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2KDK4L372WfwDkOMlCzOI3bFBrtC4ILqLQA&usqp=CAU" alt=""
                            className="w-6 h-6 rounded-full"/>
                        </div>
                    </div>
                     <div className="my-2">
                        <p className="font-semibold text-base mb-2">Performance</p>
                        <div className="text-base text-gray-400 font-semibold">
                            <p>4%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         
        <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-sm">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
            
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            </div>
            <div className="mt-8">
                <p className="text-xl font-semibold my-2">Percel Delivery</p>
                <div className="flex space-x-2 text-gray-400 text-sm">
                
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                     <p>Percel Delivery Team</p> 
                </div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>1 Month Left</p> 
                </div>
                <div className="border-t-2 "></div>

                <div className="flex justify-between">
                    <div className="my-2">
                        <p className="font-semibold text-base mb-2">Team Members</p>
                        <div className="flex space-x-2">
                           <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=''
                            className="w-6 h-6 rounded-full"/>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2KDK4L372WfwDkOMlCzOI3bFBrtC4ILqLQA&usqp=CAU" alt=''
                            className="w-6 h-6 rounded-full"/>
                        </div>
                    </div>
                     <div className="my-2">
                        <p className="font-semibold text-base mb-2">Performance</p>
                        <div className="text-base text-gray-400 font-semibold">
                            <p>90%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default HomePage;