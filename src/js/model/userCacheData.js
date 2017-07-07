(function(app){
    "use strict";
    var Data = (app._data || (app._data = {}));

    var cache = {
        lastUsers: {}
    };
    
    Data.clearUsers = function(){
        cache.lastUsers = {};
    }
    
    Data.setLastUser = function(name, data){
        cache.lastUsers[name] = data;
    }
    
    Data.getLastUsers = function(name, data){
        return cache;
    }

})(window.GithubBattle);