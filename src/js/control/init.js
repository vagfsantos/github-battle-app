(function(app){
    "use strict";
    var Control = (app._control || (app._control = {}));
    
    Control.init = function(){
        app._view.init();
    };
    
})(window.GithubBattle);