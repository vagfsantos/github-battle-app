(function(app){
    "use strict";
    var View = (app._view || (app._view = {}));
    var Util = app._utils;
    
    var template = function(info){
        
    };
    
    View.listUser = function(userInfo){
        var html = template(userInfo);
        Util.emptyUserData();
        Util.DOM.append(html);
    };
    
})(window.GithubBattle);

