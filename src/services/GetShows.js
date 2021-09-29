const axios = require('axios');

const client = axios.create({
    baseURL: 'https://api.tvmaze.com'
});
    
export const getShows = async () => {
    const result = await client.get('/shows');
    return result.data;
}


