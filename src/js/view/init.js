(function(app){
    "use strict";
    var View = (app._view || (app._view = {}));
    
    View.init = function(){
        this.getUserHandler();
        this.fightHandler();
    };
    
})(window.GithubBattle);