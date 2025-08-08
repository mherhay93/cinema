export async function makeRequest(url: string) {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.error('Fetching error:', error);
        throw new Error('Network response was not ok');
    }
}
