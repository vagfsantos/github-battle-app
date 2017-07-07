// INIT APP NAMESPACE
(function(){
    "use strict";
    window.GithubBattle = {
        _utils: {
            DOM: {
                userInfo: $('.js--user-info'),
                userMatch: $('.js--user-match'),
                userForm: $('.js--user-form')
            },
            
            emptyUserData: function(){
                $('.js--user-info')
            }
        },
        
        init: function(){
            this._control.init();
        }
    };
    
    $(function(){
        var app = window.GithubBattle;
        app.init();
    });
    
})();