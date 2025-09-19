import React from "react";

export default function Page() {
    return (
        <div className="flex justify-end items-center h-screen bg-[url('/images/baner2.jpg')] bg-cover bg-no-repeat">

            <div className="grid grid-cols-2 items-center">

                <div>

                </div>
                <div className="mr-40 relative w-[550px] h-[550px] transform rotate-45 overflow-hidden ">

                    <div className="absolute inset-0 -rotate-45 flex items-center justify-center">

                        <div className=" w-60 h-60 transform rotate-45 flex items-center justify-center -translate-y-[200px] relative">

                            <div className="absolute w-24 h-24 transform rotate-0 bg-blue-500 flex items-center justify-center 
                               top-4 left-18 -translate-x-1/2 bg-[url('/images/exp2.jpg')] bg-cover bg-no-repeat">
                                <span className="-rotate-45 text-white text-xs"></span>
                            </div>

                            <div className="absolute w-24 h-24 transform rotate-0 bg-green-500 flex items-center justify-center 
                               bottom-5 right-4 bg-[url('/images/exp3.jpg')] bg-cover bg-no-repeat">
                                
                                 <span className="-rotate-45 text-white text-xs"></span>
                            </div>

                            <div className="absolute w-24 h-24 transform rotate-0 bg-yellow-500 flex items-center justify-center 
                               top-30 left-5 bg-[url('/images/banner3.jpg')] bg-cover bg-no-repeat">
                                <span className="-rotate-45 text-white text-xs"></span>
                            </div>


                            <div className="absolute w-24 h-24 transform rotate-0 bg-purple-500 flex items-center justify-center 
                                top-4  right-4 bg-[url('/images/banner5.jpg')] bg-cover bg-no-repeat">
                                <span className="-rotate-45 text-white text-xs">4 </span>
                            </div>

                        </div>

                        <div className="absolute w-65 h-65 transform rotate-45 bg-[url('/images/beautifulmob.jpg')] bg-cover bg-no-repeat flex items-center justify-center translate-x-[210px]">
                            <span className="-rotate-45 text-black font-bold"></span>
                        </div>


                        <div className="absolute w-60 h-60 transform rotate-45 flex items-center justify-center translate-y-[200px] ">
                            <div className="absolute w-24 h-24 transform rotate-0 bg-blue-500 flex items-center justify-center 
                                 top-4 left-18 -translate-x-1/2 bg-[url('/images/bgparadao-min.jpg')] bg-cover bg-no-repeat ">
                                <span className="-rotate-45 text-white text-xs">1</span>
                            </div>

                            <div className="absolute w-24 h-24 transform rotate-0 bg-white flex items-center justify-center 
                                bottom-5  right-4 bg-[url('/images/bgbanner.jpg')] bg-cover bg-no-repeat ">
                                <span className="-rotate-45 text-white text-xs"></span>
                            </div>

                            <div className="absolute w-24 h-24 transform rotate-0 bg-yellow-500 flex items-center justify-center 
                                 top-30 left-5 bg-[url('/images/bgbanner.jpg')] bg-cover bg-no-repeat children">
                                <span className="-rotate-45 text-white text-xs"></span>
                            </div>


                            <div className="absolute w-24 h-24 transform rotate-0 bg-purple-500 flex items-center justify-center 
                                  top-4  right-4 bg-[url('/images/banner.jpg')] bg-cover bg-no-repeat ">
                                <span className="-rotate-45 text-white text-xs">4</span>
                            </div>
                        </div>


                        <div className="absolute w-65 h-65 transform rotate-45 bg-purple-500 flex items-center justify-center -translate-x-[210px] bg-[url('/images/exp2.jpg')] bg-cover bg-no-repeat">
                            <span className="-rotate-45 text-white font-bold"></span>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}

