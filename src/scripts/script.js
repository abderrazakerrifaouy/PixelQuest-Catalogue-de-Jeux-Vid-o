import { FeatchData, rochercheById } from './featchDataFile.js';
import { bergerMenu, menu, shearchInput, shearchIcons, filtre, LisetFiltrage, content, card } from './elements.js';



let data;
let games;
let typeCard = false


card.innerHTML = `<div  class="  shadow-1xl shadow-amber-50 mb-10" >
    <div id="card" style="transition: transform 2s ease;
      transform-style: preserve-3d;" class="bg-black text-white rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-4 border-[#044A9D] w-full max-w-4xl mx-auto">
        
       
        <div class="relative">
            <img id="imgeGame" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop"
                 alt="Game Banner"
                 class="w-full h-40 md:h-48 object-cover">
            <div class="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent"></div>
        </div>

        
        <div class="flex p-2">
            
            <div class="flex-1 p-4 md:p-6 space-y-3 ">
                
                
                <div class="space-y-2">
                    <h2  class="text-2xl md:text-3xl  font-bold" id="titelGame">Replaced</h2>
                    <div class="flex items-center gap-4">
                        <span class="text-gray-400 text-xs md:text-sm " id= "dateCreiatio" >Jun 23, 2008</span>
                        <span id="riting" class="text-xs md:text-sm   border-2 border-blue-500 text-white font-bold px-2 md:px-3 py-1  rounded-lg">95</span>
                    </div>
                </div>

                
                <div class="flex flex-wrap items-center gap-2 ">
                    <span class="text-white text-sm md:text-base  font-semibold">Genres :</span>
                    <p class="text-xs md:text-sm  text-gray-300" id= "Gebres">Adventure, Action</p>
                </div>

                
                <p class="text-xs md:text-sm lg:hidden" id="pDevloper">
                    <span class="font-semibold">Developer :</span> 
                    <span id="devloper" class="text-gray-300">Rocksteady Studios</span>
                </p>

                
                <div class="text-xs md:text-sm lg:hidden" id="dTags">
                    <span class="font-semibold ">Tags :</span>
                </div>

                
                <div class="flex md:flex-col md:items-start items-center justify-between gap-4 pt-2 bg-amber-50v md:w-full ">
                    <p class="text-xs md:text-sm lg:hidden" id= "dAgeRting">
                        <span class="font-semibold " >Age rating :</span> 
                        <span class="text-gray-300 " id= "ageRting">13+ Teen</span>
                    </p>
                    
                    
                    <button class="bg-[#012044] hover:bg-blue-800 transition-all duration-200 rounded-lg py-2 px-4 md:px-6 lg:px-10 font-semibold border border-blue-700 whitespace-nowrap shadow-[inset_0_3px_5px_rgba(255,255,255,0.4)] text-xs md:text-sm lg:text-base md:self-center">
                        Ajouter aux favoris
                    </button>
                </div>
        </div>

            
            <div id="platforem" class="flex flex-col   md:px-4 pt-4 md:pt-6 pb-4v  ">
                
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




async function getData(url) {
    data = await FeatchData(url);
    games = data.results
    afficherData(games)
}
getData("https://debuggers-games-api.duckdns.org/api/games?page=1&limit=12")


async function afficherData(games) {
    games.forEach(game => {
        const cardClone = card.cloneNode(true);
        console.log(game)
        cardClone.querySelector("#imgeGame").src = game.background_image_additional;
        cardClone.querySelector("#titelGame").textContent = game.name;
        cardClone.querySelector("#dateCreiatio").textContent = game.released;
        cardClone.querySelector("#riting").textContent = game.rating;
        let platformes = cardClone.querySelector("#platforem")
        platformes.innerHTML = addIconsPlatcorem(platformes, game.platforms)
        cardClone.querySelector("#Gebres").textContent = game.genres.map(d => d.name).join(", ");





        cardClone.querySelector("#devloper").textContent = game.developers.map(d => d.name).join(", ");

        let element = game.tags[0]
        cardClone.querySelector("#dTags").innerHTML += `<span class="text-gray-500 ">, </span>
                    <a href="#" class= "  text-gray-300 hover:text-white underline transition ">${element.name} ...</a>`




        cardClone.addEventListener("mouseenter", (e) => {
            cardClone.querySelector("#pDevloper").classList.remove("lg:hidden");
            cardClone.querySelector("#dTags").classList.remove("lg:hidden");
            cardClone.querySelector("#dAgeRting").classList.remove("lg:hidden");
        });
        cardClone.addEventListener('mousemove', e => {
            const rect = cardClone.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 25;
            const rotateX = (0.5 - (y / rect.height)) * 15;
            cardClone.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
        });

        cardClone.addEventListener("mouseleave", () => {
            cardClone.querySelector("#pDevloper").classList.add("lg:hidden");
            cardClone.querySelector("#dTags").classList.add("lg:hidden");
            cardClone.querySelector("#dAgeRting").classList.add("lg:hidden");
            cardClone.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });

        cardClone.addEventListener("click", () => {
            clickCard(game)
        })

        content.insertBefore(cardClone, content.querySelector("#loading"));
    });
}


function addIconsPlatcorem(items, listPlatformes) {
    items.innerHTML = "";

    listPlatformes.forEach(element => {
        const name = element.platform.name;

        if (!name) return;

        if (name.includes("PC")) {
            items.innerHTML += `
        <div class="w-8 h-8  rounded-lg flex items-center justify-center transition cursor-pointer">
          <i class="fa-brands fa-windows text-white text-sm md:text-base lg:text-lg"></i>
        </div>`;
        }
        else if (name.includes("Xbox One")) {
            items.innerHTML += `
        <div class="w-8 h-8  rounded-lg flex items-center justify-center transition cursor-pointer">
          <i class="fa-brands fa-xbox text-white text-sm md:text-base lg:text-lg"></i>
        </div>`;
        }
        else if (name.includes("PlayStation 4") || name.includes("ps")) {
            items.innerHTML += `
        <div class="w-8 h-8  rounded-lg flex items-center justify-center transition cursor-pointer">
          <i class="fa-brands fa-playstation text-white text-sm md:text-base lg:text-lg"></i>
        </div>`;
        }
        else if (name.includes("Android")) {
            items.innerHTML += `
        <div class="w-8 h-8  rounded-lg flex items-center justify-center transition cursor-pointer">
          <i class="fa-brands fa-android text-white text-sm md:text-base lg:text-lg"></i>
        </div>`;
        }
        else if (name.includes("ios") || name.includes("mac") || name.includes("apple")) {
            items.innerHTML += `
        <div class="w-8 h-8  rounded-lg flex items-center justify-center transition cursor-pointer">
          <i class="fa-brands fa-apple text-white text-sm md:text-base lg:text-lg"></i>
        </div>`;
        }
        else if (name.includes("Nintendo Switch")) {
            items.innerHTML += `
        <div class="w-8 h-8  rounded-lg flex items-center justify-center transition cursor-pointer">
          <i class="fa-solid fa-gamepad text-white text-sm md:text-base lg:text-lg"></i>
        </div>`;
        }
    });

    return items.innerHTML;
}

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= docHeight - 10) {
        getData(data.next)
    }
});

async function clickCard(game) {
    document.getElementById("cardXL").classList.replace("hidden" , "flex")
    content.classList.add("hidden")
    afficherGameDetails(game)
    let games = await rochercheById(game.id)
    console.log(games)
}
function afficherGameDetails(game) {
  
  document.getElementById("imgGame").src = game.background_image_additional || game.background_image;

 
  document.querySelector("h1").textContent = game.name || "Unknown Game";

  
  const genresText = game.genres?.map(g => g.name).join(", ") || "N/A";
  document.querySelector("p span.text-gray-300").textContent = genresText;

  
  const dev = game.developers?.[0]?.name || "Unknown";
  document.querySelector("p:nth-of-type(2) span.text-gray-300").textContent = dev;

  
  const date = game.released || "Unknown";
  document.querySelector("p:nth-of-type(3) span.text-gray-300").textContent = date;

  
  const tagsContainer = document.querySelector("p:nth-of-type(4)");
  if (game.tags?.length) {
    tagsContainer.innerHTML = `<span class="font-semibold text-gray-100">Tags :</span> ` +
      game.tags.slice(0, 5).map(tag =>
        `<span class="text-blue-400 underline cursor-pointer">${tag.name}</span>`
      ).join(", ");
  }

  
  const rating = game.esrb_rating?.name || "Not Rated";
  document.querySelector("p:nth-of-type(5) span.text-gray-300").textContent = rating;

  
  const publisher = game.publishers?.[0]?.name || "Unknown";
  document.querySelector(".border-gray-500 p span.text-gray-300").textContent = publisher;

  
  const websiteLink = document.querySelector(".border-gray-500 a");
  websiteLink.href = game.website || "#";
  websiteLink.textContent = game.website || "n";
  const plateformDiv = document.getElementById("plateformes");
  plateformDiv.innerHTML = ""; 
  const slug = game.platforms;
  plateformDiv.innerHTML = addIconsPlatcorem(plateformDiv, slug)
  const desc = game.description || "No description available.";
  document.querySelector("h4 + p").innerHTML = desc;

}

document.getElementById("closeBtn").addEventListener("click",()=>{
    document.getElementById("cardXL").classList.replace("flex", "hidden" )
    content.classList.replace("hidden" , "block")
    console.log(content.classList.classList)
})




shearchInput.addEventListener("input", () => {
    const text = shearchInput.value.toLowerCase().trim();

    if (text === "") {
        content.innerHTML = "";
        getData("https://debuggers-games-api.duckdns.org/api/games?page=1&limit=12");
        return;
    }

    const filtered = games.filter(game =>
        game.name.toLowerCase().includes(text)
    );

    content.innerHTML = ""; 

    afficherData(filtered);
});










