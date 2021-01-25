'use strict';
export default class Auth {

    getToken(name_user = "") {
        var myHeaders = new Headers();
        myHeaders.append("x-api-key", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MTA5OTIwMzB9.D4WTWCmfzdttkFYI-Sga1sYnUEJUzw_Qmhn0NqrGkpE");
        myHeaders.append("name_user", name_user);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        return fetch("http://localhost:5000", requestOptions)
            .then(response => response.json())
            .then(result => result.token)
            .catch(error => error);
    }
}