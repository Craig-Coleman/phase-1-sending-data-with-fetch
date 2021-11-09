function submitData (userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        document.querySelector('body').append(object.id);
    })
    .catch(function (error) {
        document.querySelector('body').append(error.message);
    })
}


