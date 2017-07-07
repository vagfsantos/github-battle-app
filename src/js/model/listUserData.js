(function(app){
    "use strict";
    var Data = (app._data || (app._data = {}));

    Data._headers = {
        Authorization: 'token 6090f3ff58b521c9cc2ff778d66cf613b9a50b03'
    };

    Data.getUser = function(userName, handler){
        $.ajax('https://api.github.com/users/'+userName, {
            headers: Data._headers,
            error: function(data){
                if( handler.onError ){
                    handler.onError.call(null, data);
                }
            },
            success: function(data){
                if( handler.onSuccess ){
                    handler.onSuccess.call(null, data);
                }
            }
        });
    };

})(window.GithubBattle);