export const createHeader = (accessToken) => {
    return {
        headers: {
            Authorization: 'Bearer ' + accessToken
        }
    }
}