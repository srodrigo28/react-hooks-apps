const url = "https://jsonplaceholder.typicode.com/posts"

export const api = {
    getAllPosts: async () => {
        const response = await fetch(url)
        const json = await response.json()

        return json;
    },
    addNewPost: async (title: string, body: string, userId: number) => {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ title, body, userId }),
            headers: { 'Content-Type': 'application/json' },
        });
        const json = await response.json();
        return json;
    }
}