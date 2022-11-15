const API_URL = process.env.NEXT_PUBLIC_API_URL


export const getShops = async () => {
    const response = await fetch(`${API_URL}/shops?populate=image`);
    const data = await response.json();
    return data;
    }