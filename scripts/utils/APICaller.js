(function () {
    define(['Ajax'], function (Ajax) {
        
        'use strict';
        
        function APICaller () {
            //Empty
        }
        
        APICaller.prototype = {
            constructor: APICaller,
            call: function (url) {
                //Use the Promise Syntax
                var ajax = new Ajax();
                ajax.get(url).then(function (response) {
                    console.log('Success!!', eval('('+response+')'));
                }, function (error) {
                    console.log("Failed!!", error, url);
                });
                console.log("This", url);
            }.bind(Ajax.prototype)
        };
        
        return APICaller;
    });
}());
