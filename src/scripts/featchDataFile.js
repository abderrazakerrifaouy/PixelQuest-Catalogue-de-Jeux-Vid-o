
export async function FeatchData(url) {
    try {
       const response = await fetch(url);

        if (!response.ok) {
            throw new Error(response.status);
        }
        return await response.json();

    } catch (error) {
        console.error("Erreur:", error);
    }
}


export async function getGenre(){
    try{
        const response = await fetch(`https://debuggers-games-api.duckdns.org/api/genres`)
        if (!response.ok) {
            throw new Error(response.status);
        }
        return await response.json();
    }catch{
        console.error("Erreur:", error);
    }
}

export async function getplatform(){
    try{
        const response = await fetch(`https://debuggers-games-api.duckdns.org/api/platforms`)
        if (!response.ok) {
            throw new Error(response.status);
        }
        return await response.json();
    }catch{
        console.error("Erreur:", error);
    }
}

export async function getRiteng(){
    try{
        const response = await fetch(`https://debuggers-games-api.duckdns.org/api/games?rating`)
        if (!response.ok) {
            throw new Error(response.status);
        }
        return await response.json();
    }catch{
        console.error("Erreur:", error);
    }
}
