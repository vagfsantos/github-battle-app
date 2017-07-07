(function(app){
    "use strict";
    var View = (app._view || (app._view = {}));
    var Util = app._utils;
    var Control = app._control;
    
    View.fightHandler = function(userInfo){
        Util.DOM.userInfo.on('click', '.js--fight', function(){
            Control.fight();
            return false;
        }).on('click', '.js--no-fight', function(){
            Util.emptyUserData();
            return false;
        });
    };
    
})(window.GithubBattle);