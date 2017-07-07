(function(app){
    "use strict";
    var Data = (app._data || (app._data = {}));

    Data.getUser = function(userName, handler){
        $.ajax('https://api.github.com/users/'+userName, {
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