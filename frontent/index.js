'use strict';
// import Auth from "./Auth.js";

var name_user = "Santiago Alvarez Alvarez";

(async function () {
    // var token = '';
    //const auth = new Auth();

    var encrypted = CryptoJS.AES.encrypt("hola", "123456").toString();
    console.log(encrypted);

    var bytes = CryptoJS.AES.decrypt("RKzeqXsFfzeC3vclbiHJvA==", "123456");
    var decrypted = bytes.toString(CryptoJS.enc.Utf8);

    console.log('dec ' ,decrypted);


    var ciphertext = CryptoJS.AES.encrypt("HELLO WORLD!!.. ñandú", 'secret key 123').toString();

    // Decrypt
    var bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    var decryptedData = bytes.toString(CryptoJS.enc.Utf8);

    console.log(decryptedData); // [{id: 1}, {id: 2}]
    /*
        try {
            token = await auth.getToken(name_user);
        } catch (error) {
            token = '';
        }
    
        const socket = io.connect('http://localhost:5000', {
            query: `token=${token}`
        });
    
        socket.on('connect', function () {
            // call the server-side function 'adduser' and send one parameter (value of prompt)
            console.log(socket);
    
            //socket.emit('adduser', nameUser);
            // socket.emit('authenticated', "hello2");
        });
    
    
        socket.on('unauthorized', (error) => {
            if (error.data.type == 'UnauthorizedError' || error.data.code == 'invalid_token') {
                // redirect user to login page perhaps?
                console.log('User token has expired');
            }
        });
    
        socket.on('connect_error', async (error) => {
            if (error.data.type == 'UnauthorizedError' || error.data.code == 'invalid_token') {
                // redirect user to login page perhaps?
                console.log('User token has expired', socket);
                socket.disconnect();
                token = await auth.getToken(name_user);
                socket.io.opts.query = `token=${token}`
                socket.connect();
    
            }
        });
    */
})();