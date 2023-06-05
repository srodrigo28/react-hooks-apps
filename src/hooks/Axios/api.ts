import axios from 'axios'

const url = "https://jsonplaceholder.typicode.com/posts"

export const api = {
    getAllPosts: async () => {
        const response = await axios.get(url)
        return response.data;
    },
    addNewPost: async (title: string, body: string, userId: number) => {
        const response = await axios.post(url, {
            title, body, userId
        })
        return response.data;
    }
}