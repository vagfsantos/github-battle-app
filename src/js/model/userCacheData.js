(function(app){
    "use strict";
    var Data = (app._data || (app._data = {}));

    var cache = {
        lastUsers: []
    };
    
    Data.clearUsers = function(){
        cache.lastUsers = [];
    }
    
    Data.setLastUser = function(data){
        cache.lastUsers.push(data);
    }
    
    Data.getLastUsers = function(name, data){
        return cache.lastUsers;
    }

})(window.GithubBattle);