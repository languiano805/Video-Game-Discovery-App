import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5225c9a8228b4b8eae810ff1c9cb1de2'
    }
})