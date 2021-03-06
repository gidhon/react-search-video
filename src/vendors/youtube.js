import axios from 'axios';

const KEY = 'AIzaSyAr9uI09BHQhWVDnVIJf0s6mjDcyguBxN4';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }

});
