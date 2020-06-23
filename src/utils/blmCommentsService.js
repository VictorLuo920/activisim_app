import tokenService from './tokenService'

const BASE_URL = '/api/blmComments'

export function index() {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

export function create(blmComments) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(blmComments)
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

export function update(blmComment) {
    return fetch(`${BASE_URL}/${blmComment._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(blmComment)
    }).then(res => res.json())
}
//second part to update above
export function findNewBlmComment(id) {
    console.log(id)
    return fetch(`${BASE_URL}/${id}`, {
        method: 'GET',
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() }
    }).then(res => res.json())
}