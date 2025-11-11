import { bergerMenu , menu , shearchInput , shearchIcons, filtre , LisetFiltrage , content , cartHoresontal , cartVerticale } from './elements.js';






cartVerticale.innerHTML = `<div class=" px-4 pb-8 sm:w-[45%] ">
    <div class="bg-black text-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-[#044A9D] w-full max-w-4xl mx-auto">
        
       
        <div class="relative">
            <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop"
                 alt="Game Banner"
                 class="w-full h-40 sm:h-48 md:h-56 object-cover">
            <div class="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent"></div>
        </div>

        
        <div class="flex p-2">
            
            <div class="flex-1 p-4 sm:p-6 space-y-3 ">
                
                
                <div class="space-y-2">
                    <h2 class="text-2xl sm:text-3xl  font-bold">Replaced</h2>
                    <div class="flex items-center gap-4">
                        <span class="text-gray-400 text-xs sm:text-sm ">Jun 23, 2008</span>
                        <span class="text-xs sm:text-sm   border-2 border-blue-500 text-white font-bold px-2 sm:px-3 py-1  rounded-lg">95</span>
                    </div>
                </div>

                
                <div class="flex flex-wrap items-center gap-2 ">
                    <span class="text-white text-sm sm:text-base lg:text-[10px] font-semibold">Genres :</span>
                    <p class="text-xs sm:text-sm lg:text-[10px] text-gray-300">Adventure, Action</p>
                </div>

                
                <p class="text-xs sm:text-sm ">
                    <span class="font-semibold">Developer :</span> 
                    <span class="text-gray-300">Rocksteady Studios</span>
                </p>

                
                <div class="text-xs sm:text-sm ">
                    <span class="font-semibold lg:text-[10px]">Tags :</span>
                    <a href="#" class="text-gray-300 hover:text-white underline transition lg:text-[10px]">Classic</a>
                    <span class="text-gray-500 lg:text-[10px]">, </span>
                    <a href="#" class="text-gray-300 hover:text-white underline transition lg:text-[10px]">Remake</a>
                </div>

                
                <div class="flex sm:flex-col sm:items-start items-center justify-between gap-4 pt-2 bg-amber-50v sm:w-full ">
                    <p class="text-xs sm:text-sm ">
                        <span class="font-semibold lg:text-[10px]">Age rating :</span> 
                        <span class="text-gray-300 lg:text-[10px]">13+ Teen</span>
                    </p>
                    
                    
                    <button class="bg-[#012044] hover:bg-blue-800 transition-all duration-200 rounded-lg py-2 px-4 sm:px-6 lg:px-10 font-semibold border border-blue-700 whitespace-nowrap shadow-[inset_0_3px_5px_rgba(255,255,255,0.4)] text-xs sm:text-sm lg:text-base sm:self-center">
                        Ajouter aux favoris
                    </button>
                </div>
        </div>

            
            <div class="flex flex-col justify-start px-2 sm:px-4 pt-4 sm:pt-6 pb-4v  ">
                <div class="w-8 h-8  sm:w-10 sm:h-10 rounded-lg flex items-center justify-center  transition cursor-pointer">
                    <i class="fa-brands fa-android text-white text-sm sm:text-base lg:text-lg"></i>
                </div>
                <div class="w-8 h-8  sm:w-10 sm:h-10 rounded-lg flex items-center justify-center  transition cursor-pointer">
                    <i class="fa-brands fa-apple text-white text-sm sm:text-base lg:text-lg"></i>
                </div>
                <div class="w-8 h-8  sm:w-10 sm:h-10 rounded-lg flex items-center justify-center  transition cursor-pointer">
                    <i class="fa-brands fa-xbox text-white text-sm sm:text-base lg:text-lg"></i>
                </div>
                <div class="w-8 h-8  sm:w-10 sm:h-10 rounded-lg flex items-center justify-center  transition cursor-pointer">
                    <i class="fa-brands fa-playstation text-white text-sm sm:text-base lg:text-lg"></i>
                </div>
                <div class="w-8 h-8  sm:w-10 sm:h-10 rounded-lg flex items-center justify-center  transition cursor-pointer">
                    <i class="fa-brands fa-windows text-white text-sm sm:text-base lg:text-lg"></i>
                </div>
            </div>
        </div>
    </div>
    
  </div>`;


cartHoresontal.innerHTML = `
<div class=" px-4 pb-8 sm:w-[45%] lg:w-[20%] lg:h-[25%]">
    <div class="bg-black text-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-[#044A9D] w-full max-w-4xl mx-auto">
        
       
        <div class="relative">
            <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop"
                 alt="Game Banner"
                 class="w-full h-40 sm:h-48 md:h-56 object-cover">
            <div class="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent"></div>
        </div>

        
        <div class="flex p-2">
            
            <div class="flex-1 p-4 sm:p-6 space-y-3 lg:p-1">
                
                
                <div class="space-y-2">
                    <h2 class="text-2xl sm:text-3xl lg:text-2xl font-bold">Replaced</h2>
                    <div class="flex items-center gap-1">
                        <span class="text-gray-400 text-xs sm:text-sm lg:text-[12px]">Jun 23, 2008</span>
                        <span class="text-xs sm:text-sm  lg:text-[12px] border-2 border-blue-500 text-white font-bold px-2 sm:px-3 py-1 lg:px-2 rounded-lg">95</span>
                    </div>
                </div>

                
                <div class="flex flex-wrap items-center gap-2 ">
                    <span class="text-white text-sm sm:text-base lg:text-[10px] font-semibold">Genres :</span>
                    <p class="text-xs sm:text-sm lg:text-[10px] text-gray-300">Adventure, Action</p>
                </div>

                
                <p class="text-xs sm:text-sm lg:hidden">
                    <span class="font-semibold">Developer :</span> 
                    <span class="text-gray-300">Rocksteady Studios</span>
                </p>

                
                <div class="text-xs sm:text-sm lg:hidden">
                    <span class="font-semibold lg:text-[10px]">Tags :</span>
                    <a href="#" class="text-gray-300 hover:text-white underline transition lg:text-[10px]">Classic</a>
                    <span class="text-gray-500 lg:text-[10px]">, </span>
                    <a href="#" class="text-gray-300 hover:text-white underline transition lg:text-[10px]">Remake</a>
                </div>

                
                <div class="flex sm:flex-col sm:items-start items-center justify-between gap-4 pt-2 bg-amber-50v sm:w-full ">
                    <p class="text-xs sm:text-sm lg:hidden">
                        <span class="font-semibold lg:text-[10px]">Age rating :</span> 
                        <span class="text-gray-300 lg:text-[10px]">13+ Teen</span>
                    </p>
                    
                    
                    <button class="bg-[#012044] hover:bg-blue-800 transition-all duration-200 rounded-lg py-2 px-4 sm:px-6 lg:px-10 font-semibold border border-blue-700 whitespace-nowrap shadow-[inset_0_3px_5px_rgba(255,255,255,0.4)] text-xs sm:text-sm lg:text-base sm:self-center lg:mt-4">
                        Ajouter aux favoris
                    </button>
                </div>
        </div>

            
            <div class="flex flex-col justify-start px-2 sm:px-4 pt-4 sm:pt-6 pb-4v lg:h-[70%] relative left-[-30px]  lg:p-0 ">
                <div class="w-8 h-8 lg:h-4 lg:w-4 lg:mt-2 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center  transition cursor-pointer">
                    <i class="fa-brands fa-android text-white text-sm sm:text-base lg:text-lg"></i>
                </div>
                <div class="w-8 h-8 lg:h-4 lg:w-4 lg:mt-2 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center  transition cursor-pointer">
                    <i class="fa-brands fa-apple text-white text-sm sm:text-base lg:text-lg"></i>
                </div>
                <div class="w-8 h-8 lg:h-4 lg:w-4 lg:mt-2 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center  transition cursor-pointer">
                    <i class="fa-brands fa-xbox text-white text-sm sm:text-base lg:text-lg"></i>
                </div>
                <div class="w-8 h-8 lg:h-4 lg:w-4 lg:mt-2 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center  transition cursor-pointer">
                    <i class="fa-brands fa-playstation text-white text-sm sm:text-base lg:text-lg"></i>
                </div>
                <div class="w-8 h-8 lg:h-4 lg:w-4 lg:mt-2 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center  transition cursor-pointer">
                    <i class="fa-brands fa-windows text-white text-sm sm:text-base lg:text-lg"></i>
                </div>
            </div>
        </div>
    </div>
    
  </div>
`


let aficherMenu = false


bergerMenu.addEventListener("click" , ()=>{
    if(aficherMenu){
        menu.classList.remove("flex")
        menu.classList.add("hidden")
        aficherMenu = false
    }else{

        menu.classList.remove("hidden")
        menu.classList.add("flex")
        aficherMenu = true
    }
})

