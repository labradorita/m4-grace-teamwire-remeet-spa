const getDataFromServer = (url) => {
    return fetch(url, {
        method: 'GET',
    })
        .then(resp => resp.json())
        .then(data => data)
        //.then(employees => console.log(employees))
        .catch(error => console.log(error));
}

export default getDataFromServer;