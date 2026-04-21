// @ts-nocheck so we do not get type checks as if this was TypeScript

export async function fetchGet(endpoint) {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}${endpoint}`, {
            credentials: 'include'
        });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function fetchPost(endpoint, body) {

    const response = await fetch(`${import.meta.env.VITE_BASE_URL}${endpoint}`, {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    
    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.errorMessage); // For the 
    }

    return result;

    console.log(error);

}