(function(app){
    "use strict";
    var View = (app._view || (app._view = {}));
    var Util = app._utils;
    var Control = app._control;
    
    var template = function(msg){
        return ('\
            <div class="alert alert-warning" role="alert">\
                <p>'+msg+'</p>\
            </div>\
        ');
    }
    
    View.alert = function(msg){
        Util.DOM.alert.html( template(msg) );
        window.setTimeout(function(){
            Util.DOM.alert.html('');
        }, 5000);
    };
    
})(window.GithubBattle);