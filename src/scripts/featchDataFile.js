
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
