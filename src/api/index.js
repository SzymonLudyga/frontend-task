import axios from 'axios';

import baseUrl from '../config'

export default async function apiCall(method, resource) {
    return axios({
        method,
        url: `${baseUrl}/${resource}`,
        responseType: 'json'
    });
}
