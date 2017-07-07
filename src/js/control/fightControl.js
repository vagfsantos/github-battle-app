(function(app){
    "use strict";
    var Control = (app._control || (app._control = {}));
    
    Control.fight = function(){
        var score = app._data.getFightResults({
            done: function(score){
                console.log(score);
            }
        });
    };
    
})(window.GithubBattle);