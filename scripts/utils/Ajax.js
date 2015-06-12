define(function () {
    'use srict';
    function Ajax () {
        //Empty
    }
    Ajax.prototype = {
        constructor: Ajax,
        get: function (url) {
            //Ajax using Promise
            return new Promise(function (resolve, reject) {
                var req = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject();
                //Onload is the new way vs onreadystatechange.
                req.onload = function () {
                    if (req.readyState === 4 && req.status === 200) {
                        console.log("FROM AJAX", req.readyState, req.status);
                        resolve(req.response);
                    }else {
                        reject(Error(req.statusText));
                    }
                };
                
                req.onerror = function () {
                    reject(Error(req.statusText));
                };
                
                req.open('GET', url, true);
                req.send();
            });
        }  
    };
    
    return Ajax;
});
