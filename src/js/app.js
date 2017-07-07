// INIT APP NAMESPACE
(function(){
    "use strict";
    window.GithubBattle = {
        _utils: {
            DOM: {
                userInfo: $('.js--user-info'),
                userMatch: $('.js--user-match'),
                userForm: $('.js--user-form'),
                alert: $('.js--alert')
            },
            
            emptyUserData: function(){
                this.DOM.userInfo.add( this.DOM.userMatch ).empty();
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