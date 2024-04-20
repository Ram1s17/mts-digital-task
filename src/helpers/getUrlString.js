export default function getUrlString(baseURL, queryParams) {
    const queryString = Object.keys(queryParams)
        .map(key => `${key}=${queryParams[key]}`)
        .join('&')
    return queryString ? `${baseURL}/?${queryString}` : baseURL
}