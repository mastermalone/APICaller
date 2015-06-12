require.config({
     urlArgs: 'bust=' +  (new Date()).getTime(),//Remove before deployment
     baseUrl: 'scripts/',
     paths: {
         App: 'app',
         APICaller: 'utils/APICaller',
         Ajax: 'utils/Ajax'
     }
});

require(['App'], function (App) {
    var app = App;
    app.init();
});
