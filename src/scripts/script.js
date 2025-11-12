import {FeatchData} from './featchDataFile.js';
import { bergerMenu , menu , shearchInput , shearchIcons, filtre , LisetFiltrage , content  , card } from './elements.js';


let data;
let games;
let typeCard = false


    card.innerHTML = `<div class=" px-4 pb-8 ">
    <div class="bg-black text-white rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-4 border-[#044A9D] w-full max-w-4xl mx-auto">
        
       
        <div class="relative">
            <img id="imgeGame" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop"
                 alt="Game Banner"
                 class="w-full h-40 md:h-48 object-cover">
            <div clagitss="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent"></div>
        </div>

        
        <div class="flex p-2">
            
            <div class="flex-1 p-4 md:p-6 space-y-3 ">
                
                
                <div class="space-y-2">
                    <h2  class="text-2xl md:text-3xl  font-bold" id="titelGame">Replaced</h2>
                    <div class="flex items-center gap-4">
                        <span class="text-gray-400 text-xs md:text-sm ">Jun 23, 2008</span>
                        <span class="text-xs md:text-sm   border-2 border-blue-500 text-white font-bold px-2 md:px-3 py-1  rounded-lg">95</span>
                    </div>
                </div>

                
                <div class="flex flex-wrap items-center gap-2 ">
                    <span class="text-white text-sm md:text-base lg:text-[10px] font-semibold">Genres :</span>
                    <p class="text-xs md:text-sm lg:text-[10px] text-gray-300">Adventure, Action</p>
                </div>

                
                <p class="text-xs md:text-sm ">
                    <span class="font-semibold">Developer :</span> 
                    <span class="text-gray-300">Rocksteady Studios</span>
                </p>

                
                <div class="text-xs md:text-sm ">
                    <span class="font-semibold lg:text-[10px]">Tags :</span>
                    <a href="#" class="text-gray-300 hover:text-white underline transition lg:text-[10px]">Classic</a>
                    <span class="text-gray-500 lg:text-[10px]">, </span>
                    <a href="#" class="text-gray-300 hover:text-white underline transition lg:text-[10px]">Remake</a>
                </div>

                
                <div class="flex md:flex-col md:items-start items-center justify-between gap-4 pt-2 bg-amber-50v md:w-full ">
                    <p class="text-xs md:text-sm ">
                        <span class="font-semibold lg:text-[10px]">Age rating :</span> 
                        <span class="text-gray-300 lg:text-[10px]">13+ Teen</span>
                    </p>
                    
                    
                    <button class="bg-[#012044] hover:bg-blue-800 transition-all duration-200 rounded-lg py-2 px-4 md:px-6 lg:px-10 font-semibold border border-blue-700 whitespace-nowrap shadow-[inset_0_3px_5px_rgba(255,255,255,0.4)] text-xs md:text-sm lg:text-base md:self-center">
                        Ajouter aux favoris
                    </button>
                </div>
        </div>

            
            <div class="flex flex-col justify-start px-2 md:px-4 pt-4 md:pt-6 pb-4v  ">
                <div class="w-8 h-8  md:w-10 md:h-10 rounded-lg flex items-center justify-center  transition cursor-pointer">
                    <i class="fa-brands fa-android text-white text-sm md:text-base lg:text-lg"></i>
                </div>
                <div class="w-8 h-8  md:w-10 md:h-10 rounded-lg flex items-center justify-center  transition cursor-pointer">
                    <i class="fa-brands fa-apple text-white text-sm md:text-base lg:text-lg"></i>
                </div>
                <div class="w-8 h-8  md:w-10 md:h-10 rounded-lg flex items-center justify-center  transition cursor-pointer">
                    <i class="fa-brands fa-xbox text-white text-sm md:text-base lg:text-lg"></i>
                </div>
                <div class="w-8 h-8  md:w-10 md:h-10 rounded-lg flex items-center justify-center  transition cursor-pointer">
                    <i class="fa-brands fa-playstation text-white text-sm md:text-base lg:text-lg"></i>
                </div>
                <div class="w-8 h-8  md:w-10 md:h-10 rounded-lg flex items-center justify-center  transition cursor-pointer">
                    <i class="fa-brands fa-windows text-white text-sm md:text-base lg:text-lg"></i>
                </div>
            </div>
        </div>
    </div>
    
  </div>`


let aficherMenu = false


bergerMenu.addEventListener("click", () => {
    if (aficherMenu) {
        menu.classList.remove("flex")
        menu.classList.add("hidden")
        aficherMenu = false
    } else {
        menu.classList.remove("hidden")
        menu.classList.add("flex")
        aficherMenu = true
    }
})




async function getData(){
    data = await FeatchData("https://debuggers-games-api.duckdns.org/api/games?page=1&limit=40") ;
   
    games = data.results
    afficherData()
}
getData()


function afficherData(){
    games.forEach(game => {
        console.log(game)
        card.querySelector("#imgeGame").src = game.background_image_additional
        card.querySelector("#titelGame").textContent = game.name



        card.classList.add(
        "inline-block", "break-inside-avoid", "mb-6",
        "bg-[#5F6261]", "border-2", "border-[#3D4044]",
        "rounded-3xl", "font-semibold", "overflow-hidden", "shadow-md")
        content.innerHTML += card.innerHTML 
    });
    
}
