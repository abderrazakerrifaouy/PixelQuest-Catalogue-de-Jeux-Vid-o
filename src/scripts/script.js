import { FeatchData , getGenre, getplatform } from './featchDataFile.js';
import { bergerMenu, menu, shearchInput,  content, card , row , column} from './elements.js';



let data;
let games;
let isFilter = true;
let aficherMenu = false;
let isFavoret = false;
let isRow = false


card.innerHTML = `<div class=" shadow-1xl shadow-amber-50 mb-10">
    <div id="card" style="transition: transform 2s ease; transform-style: preserve-3d;"
        class="bg-black text-white rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-4 border-[#044A9D] w-full max-w-4xl mx-auto">
        <div class="relative">
            <img id="imgeGame" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop"
                 alt="Game Banner" class="w-full h-40 md:h-48 object-cover">
            <div class="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent"></div>
        </div>
        <div class="flex p-2">
            <div class="flex-1 p-4 md:p-6 space-y-3">
                <div class="space-y-2">

                    <h2 class="text-2xl md:text-3xl font-bold cursor-pointer underline" id="titelGame">Replaced</h2>

                    <div class="flex items-center gap-4">
                        <span class="text-gray-400 text-xs md:text-sm" id="dateCreiatio">Jun 23, 2008</span>
                        <span id="riting" class="text-xs md:text-sm border-2 border-blue-500 text-white font-bold px-2 md:px-3 py-1 rounded-lg">95</span>
                    </div>
                </div>
                <div class="flex flex-wrap items-center gap-2">
                    <span class="text-white text-sm md:text-base font-semibold">Genres :</span>
                    <p class="text-xs md:text-sm text-gray-300" id="Gebres">Adventure, Action</p>
                </div>
                <p class="text-xs md:text-sm lg:hidden" id="pDevloper">
                    <span class="font-semibold">Developer :</span> 
                    <span id="devloper" class="text-gray-300">Rocksteady Studios</span>
                </p>
                <div class="text-xs md:text-sm lg:hidden" id="dTags">
                    <span class="font-semibold">Tags :</span>
                </div>
                <div class="flex md:flex-col md:items-start items-center justify-between gap-4 pt-2 bg-amber-50v md:w-full">
                    <p class="text-xs md:text-sm lg:hidden" id="dAgeRting">
                        <span class="font-semibold">Age rating :</span> 
                        <span class="text-gray-300" id="ageRting">13+ Teen</span>
                    </p>
                    <button id="favoriteBtn" class="bg-[#012044] hover:bg-blue-800 transition-all duration-200 rounded-lg py-2 px-4 md:px-6 lg:px-10 font-semibold border border-blue-700 whitespace-nowrap shadow-[inset_0_3px_5px_rgba(255,255,255,0.4)] text-xs md:text-sm lg:text-base md:self-center">
                        Ajouter aux favoris
                    </button>
                </div>
            </div>
            <div id="platforem" class="flex flex-col md:px-4 pt-4 md:pt-6 pb-4v"></div>
        </div>
    </div>
</div>`;


bergerMenu.addEventListener("click", () => {
    if (aficherMenu) {
        menu.classList.replace("flex", "hidden");
        aficherMenu = false;
    } else {
        menu.classList.replace("hidden", "flex");
        aficherMenu = true;
        setTimeout(() => {
            menu.classList.replace("flex", "hidden");
            aficherMenu = false;
        }, 3000);
    }
});


async function getData(url) {
    data = await FeatchData(url);
    games = data.results;
    afficherData(games);
}
getData("https://debuggers-games-api.duckdns.org/api/games?page=1&limit=20");


async function afficherData(games) {
    games.forEach(game => {
        const cardClone = card.cloneNode(true);


        cardClone.querySelector("#imgeGame").src = game.background_image_additional;
        cardClone.querySelector("#titelGame").textContent = game.name;
        cardClone.querySelector("#dateCreiatio").textContent = game.released;
        cardClone.querySelector("#riting").textContent = game.rating;
        cardClone.querySelector("#Gebres").textContent = game.genres.map(d => d.name).join(", ");
        cardClone.querySelector("#devloper").textContent = game.developers.map(d => d.name).join(", ");


        const element = game.tags[0];
        cardClone.querySelector("#dTags").innerHTML += `<span class="text-gray-500">, </span>
            <a href="#" class="text-gray-300 hover:text-white underline transition">${element?.name || ""} ...</a>`;


        const platformes = cardClone.querySelector("#platforem");
        platformes.innerHTML = addIconsPlatcorem(platformes, game.platforms);


        cardClone.addEventListener("mouseenter", () => {
            if (!isRow) {
                cardClone.querySelector("#pDevloper").classList.remove("lg:hidden");
                cardClone.querySelector("#dTags").classList.remove("lg:hidden");
                cardClone.querySelector("#dAgeRting").classList.remove("lg:hidden");
            }

        });
        cardClone.addEventListener("mousemove", e => {
            if (!isRow) {
                const rect = cardClone.getBoundingClientRect();
                const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 25;
                const rotateX = (0.5 - (e.clientY - rect.top) / rect.height) * 15;
                cardClone.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
            }

        });
        cardClone.addEventListener("mouseleave", () => {
            if (!isRow) {
                cardClone.querySelector("#pDevloper").classList.add("lg:hidden");
                cardClone.querySelector("#dTags").classList.add("lg:hidden");
                cardClone.querySelector("#dAgeRting").classList.add("lg:hidden");
                cardClone.style.transform = `rotateY(0deg) rotateX(0deg)`;
            }

        });


        const btn = cardClone.querySelector("#favoriteBtn");
        if (rechercheToFavorite(game)) {
            btn.textContent = "Remove From Favorite";
            btn.onclick = () => removeFromFavorite(game, cardClone);
        } else {
            btn.textContent = "Add To Favorite";
            btn.onclick = () => addToFavorite(game, cardClone);
        }


        cardClone.querySelector("#titelGame").addEventListener("click", () => clickCard(game));

        content.insertBefore(cardClone, content.querySelector("#loading"));
    });
}


function addIconsPlatcorem(items, listPlatformes) {
    items.innerHTML = "";
    listPlatformes.forEach(element => {
        const name = element.platform.name;
        if (!name) return; if (name.includes("PC")) {
            items.innerHTML +=` <div class="w-8 h-8 rounded-lg flex items-center justify-center transition cursor-pointer"> <i class="fa-brands fa-windows text-white text-sm md:text-base lg:text-lg"></i> </div>`;
        } else if (name.includes("Xbox One")) {
            items.innerHTML +=`<div class="w-8 h-8 rounded-lg flex items-center justify-center transition cursor-pointer"> <i class="fa-brands fa-xbox text-white text-sm md:text-base lg:text-lg"></i> </div>`;
        } else if (name.includes("PlayStation 4") || name.includes("ps")) {
            items.innerHTML += `<div class="w-8 h-8 rounded-lg flex items-center justify-center transition cursor-pointer"> <i class="fa-brands fa-playstation text-white text-sm md:text-base lg:text-lg"></i> </div>`;
        } else if (name.includes("Android")) {
            items.innerHTML += `<div class="w-8 h-8 rounded-lg flex items-center justify-center transition cursor-pointer"> <i class="fa-brands fa-android text-white text-sm md:text-base lg:text-lg"></i> </div>`;
        } else if (name.includes("ios") || name.includes("mac") || name.includes("apple")) {
            items.innerHTML += `<div class="w-8 h-8 rounded-lg flex items-center justify-center transition cursor-pointer"> <i class="fa-brands fa-apple text-white text-sm md:text-base lg:text-lg"></i> </div>`;
        } else if (name.includes("Nintendo Switch")) {
            items.innerHTML += ` <div class="w-8 h-8 rounded-lg flex items-center justify-center transition cursor-pointer"> <i class="fa-solid fa-gamepad text-white text-sm md:text-base lg:text-lg"></i> </div>`;
        }
    }); return items.innerHTML;
}


window.addEventListener("scroll", () => {
    if (isFilter && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10) {
        getData(data.next);
    }
});


async function clickCard(game) {
    document.getElementById("cardXL").classList.replace("hidden", "flex");
    content.classList.add("hidden");
    afficherGameDetails(game);
}

function afficherGameDetails(game) {
    document.getElementById("imgGame").src = game.background_image_additional || game.background_image;
    document.querySelector("#gameTitle").textContent = game.name || "Unknown Game";
    document.querySelector("#genres").textContent = game.genres.map(d => d.name).join(", ") || "N/A";
    document.querySelector("#developers").textContent = game.developers?.[0]?.name || "Unknown";
    document.querySelector("#released").textContent = game.released || "Unknown";


    const tagsContainer = document.querySelector("#tags");
    if (game.tags?.length) {
        tagsContainer.innerHTML = `<span class="font-semibold text-gray-100">Tags :</span> ` +
            game.tags.slice(0, 5).map(tag =>
                `<span class=" underline cursor-pointer">${tag.name}</span>`
            ).join(", ");
    }

    document.querySelector("#ageRating").textContent = game.esrb_rating?.name || "Not Rated";
    document.querySelector("#publisher").textContent = game.publishers?.[0]?.name || "Unknown";

    const websiteLink = document.querySelector("#website");

    websiteLink.href = game.website || "#";
    websiteLink.textContent = game.website || "n";

    const plateformDiv = document.getElementById("plateformes");
    plateformDiv.innerHTML = addIconsPlatcorem(plateformDiv, game.platforms);

    document.querySelector("h4 + p").innerHTML = game.description || "No description available.";
}


document.getElementById("closeBtn").addEventListener("click", () => {
    document.getElementById("cardXL").classList.replace("flex", "hidden");
    content.classList.replace("hidden", "block");
});


shearchInput.addEventListener("input", () => {
    const text = shearchInput.value.toLowerCase().trim();
    if (!text) {
        content.innerHTML = "";
        getData("https://debuggers-games-api.duckdns.org/api/games?page=1&limit=12");
        return;
    }
    const filtered = games.filter(game => game.name.toLowerCase().includes(text));
    content.innerHTML = "";
    afficherData(filtered);
});


async function setupFilter(type) {
    const listFilter = document.getElementById("containerFliterage");
    const filtres = document.getElementById("LisetFiltrage");
    listFilter.classList.replace("hidden", "block");

    listFilter.addEventListener("mouseenter", () => filtres.style.animationPlayState = "paused");
    listFilter.addEventListener("mouseleave", () => filtres.style.animationPlayState = "running");

    document.getElementById("LisetFiltrage").innerHTML = "";
    document.getElementById("nameFilter").textContent = type;

    let dataFilter = type === "Genre" ? await getGenre() : await getplatform();
    const items = type === "Genre" ? dataFilter.genres : dataFilter.platforms;

    items.slice(0, 12).forEach(item => {
        const g = document.createElement("div");
        g.innerHTML = `<p class="text-amber-50 font-medium">${item.name}</p>`;
        g.classList.add(
            "button", "p-2", "h-10", "w-40", "border-2", "border-[#044A9D]",
            "lg:rounded-4xl", "bg-linear-to-r", "from-[#044A9D]", "to-[#012044]",
            "flex", "justify-center", "items-center",
            "shadow-[0_0px_20px_#044A9D]"
        );
        g.addEventListener("click", () => {
            content.innerHTML = "";
            const url = type === "Genre" ?
                `https://debuggers-games-api.duckdns.org/api/games?page=1&limit=20&genre=${item.name}` :
                `https://debuggers-games-api.duckdns.org/api/games?page=1&limit=20&platform=${item.slug}`;
            getData(url);
        });
        filtres.appendChild(g);
    });
}

document.getElementById("filtreByGenre").addEventListener("click", () => setupFilter("Genre"));
document.getElementById("filtreByplatform").addEventListener("click", () => setupFilter("platform"));


document.getElementById("filtrePopularité").addEventListener("click", () => {
    const sortedGames = [...games].sort((a, b) => b.rating - a.rating);
    content.innerHTML = "";
    isFilter = false;
    row.click()
    afficherData(sortedGames);
});


document.getElementById("home").addEventListener("click", () => {

    document.getElementById("fullFilter").classList.remove("hidden")
    menu.classList.replace("flex", "hidden");
    aficherMenu = false;
    isFavoret = false;
    isFilter = true;
    document.getElementById("containerFliterage").classList.replace("block", "hidden");
    content.innerHTML = "";
    getData("https://debuggers-games-api.duckdns.org/api/games?page=1&limit=20");
});


function addToFavorite(game, card) {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!favorites.find(f => f.id === game.id)) favorites.push(game);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    const btn = card.querySelector("#favoriteBtn");
    btn.textContent = "Remove From Favorite";
    btn.onclick = () => removeFromFavorite(game, card);
    if (isFavoret) checkFavoret();
}

function removeFromFavorite(game, card) {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    favorites = favorites.filter(f => f.id !== game.id);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    const btn = card.querySelector("#favoriteBtn");
    btn.textContent = "Add To Favorite";
    btn.onclick = () => addToFavorite(game, card);
    if (isFavoret) checkFavoret();
}

function rechercheToFavorite(game) {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    return !!favorites.find(f => f.id === game.id);
}

document.querySelector("#favoret").addEventListener("click", () => checkFavoret());

function checkFavoret() {
    menu.classList.replace("flex", "hidden");
    document.getElementById("fullFilter").classList.add("hidden")
    aficherMenu = false;
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favorites.length > 0) {
        isFilter = false;
        isFavoret = true;
        content.innerHTML = "";
        afficherData(favorites);
    } else {
        document.getElementById("home").click();
        alert("Favorites is empty");
    }
}




column.addEventListener("click", () => {
    isRow = false
    Array.from(document.querySelectorAll("#pDevloper")).forEach(element => {
        element.classList.add("lg:hidden");
    });
    Array.from(document.querySelectorAll("#dTags")).forEach(element => {
        element.classList.add("lg:hidden");
    });
    Array.from(document.querySelectorAll("#dAgeRting")).forEach(element => {
        element.classList.add("lg:hidden");
    });
    content.classList.replace("xl:columns-1", "xl:columns-4")
    row.classList.add("opacity-50")
    column.classList.remove("opacity-50")
})

row.addEventListener("click", () => {
    isRow = true
    Array.from(document.querySelectorAll("#pDevloper")).forEach(element => {
        element.classList.remove("lg:hidden")
    });
    Array.from(document.querySelectorAll("#dTags")).forEach(element => {
        element.classList.remove("lg:hidden")
    });
    Array.from(document.querySelectorAll("#dAgeRting")).forEach(element => {
        element.classList.remove("lg:hidden")
    });
    content.classList.replace("xl:columns-4", "xl:columns-1")
    column.classList.add("opacity-50")
    row.classList.remove("opacity-50")
})

