(function () {
    define(['APICaller'], function (APICaller) {
        'use strict';
        var App = {
            init: function () {
                var apiCaller = new APICaller();
                apiCaller.call('json/test.json');
            }
        };
        return App;
    });
}());

