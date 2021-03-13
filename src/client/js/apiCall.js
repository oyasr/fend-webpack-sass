function apiCall(event) {
    event.preventDefault;

    fetch('https://sample-project-flasky.herokuapp.com/categories')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('api-results').innerHTML = data;
        console.log(data);
    })
}

export { apiCall }