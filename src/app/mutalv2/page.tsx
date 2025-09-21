import React from 'react'

export default function page() {
    return (
        <div className='flex justify-center items-center min-h-screen relative overflow-hidden'>
            {/* <div className='bg-yellow-300  inset-0 rotate-65 w-40 h-40 absolute right-0 -top-10'>

            </div> */}

            <div className="absolute top-0 right-0 w-0 h-0 
  border-t-[250px] border-t-green-500 
  border-l-[250px] border-l-transparent">
            </div>

            <div className="absolute top-0 left-0 w-0 h-0 
  border-t-[250px] border-t-green-500 
  border-r-[250px] border-r-transparent">
            </div>

             <div className="absolute rotate-180 bottom-0 right-0 w-0 h-0 
  border-t-[250px] border-t-green-500 
  border-r-[250px] border-r-transparent">
            </div>

             <div className="absolute rotate-270 bottom-0 left-0 w-0 h-0 
  border-t-[250px] border-t-green-500 
  border-r-[250px] border-r-transparent">
            </div>

            


            <div className="relative w-[550px] h-[550px] transform rotate-45 overflow-hidden">

                <div className="absolute inset-0 -rotate-45 flex items-center justify-center">

                    <div className="w-60 h-60 transform rotate-45 flex items-center justify-center -translate-y-[200px] relative">

                        <div className="absolute w-24 h-24 transform rotate-0 bg-blue-400 flex items-center justify-center 
           top-4 left-18 -translate-x-1/2">
                            <span className="-rotate-45 text-white text-xs"></span>
                        </div>

                        <div className="absolute w-24 h-24 transform rotate-0 bg-emerald-400 flex items-center justify-center 
           bottom-5 right-4">
                            <span className="-rotate-45 text-white text-xs"></span>
                        </div>

                        <div className="absolute w-24 h-24 transform rotate-0 bg-amber-400 flex items-center justify-center 
           top-30 left-5">
                            <span className="-rotate-45 text-white text-xs"></span>
                        </div>

                        <div className="absolute w-24 h-24 transform rotate-0 bg-violet-400 flex items-center justify-center 
           top-4 right-4">
                            <span className="-rotate-45 text-white text-xs">4</span>
                        </div>

                    </div>

                    <div className="absolute w-65 h-65 transform rotate-45 bg-rose-300 flex items-center justify-center translate-x-[210px]">
                        <span className="-rotate-45 text-black font-bold"></span>
                    </div>

                    <div className="absolute w-60 h-60 transform rotate-45 flex items-center justify-center translate-y-[200px]">

                        <div className="absolute w-24 h-24 transform rotate-0 bg-blue-300 flex items-center justify-center 
           top-4 left-18 -translate-x-1/2">
                            <span className="-rotate-45 text-white text-xs">1</span>
                        </div>

                        <div className="absolute w-24 h-24 transform rotate-0 bg-gray-200 flex items-center justify-center 
           bottom-5 right-4">
                            <span className="-rotate-45 text-white text-xs"></span>
                        </div>

                        <div className="absolute w-24 h-24 transform rotate-0 bg-amber-300 flex items-center justify-center 
           top-30 left-5">
                            <span className="-rotate-45 text-white text-xs"></span>
                        </div>

                        <div className="absolute w-24 h-24 transform rotate-0 bg-violet-300 flex items-center justify-center 
           top-4 right-4">
                            <span className="-rotate-45 text-white text-xs">4</span>
                        </div>

                    </div>

                    <div className="absolute w-65 h-65 transform rotate-45 bg-violet-300 flex items-center justify-center -translate-x-[210px]">
                        <span className="-rotate-45 text-white font-bold"></span>
                    </div>

                </div>
            </div>
        </div>

    )
}
