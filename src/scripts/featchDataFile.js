
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


export async function rochercheById(id){
   try {
       const response = await fetch(`https://debuggers-games-api.duckdns.org/api/games/${id}`);

        if (!response.ok) {
            throw new Error(response.status);
        }
        return await response.json();

    } catch (error) {
        console.error("Erreur:", error);
    }
}
