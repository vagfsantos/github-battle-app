(function(app){
    "use strict";
    var View = (app._view || (app._view = {}));
    var Util = app._utils;
    var Control = app._control;
    
    View.getUserHandler = function(userInfo){
        Util.DOM.userForm.on('submit', function(){
            Control.listUserControl( $(this).serializeArray() );
            return false;
        })
    };
    
})(window.GithubBattle);