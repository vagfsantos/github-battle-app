(function(app){
    "use strict";
    var View = (app._view || (app._view = {}));
    var Util = app._utils;

    var userTemplate = function(user){
        return('\
            <div class="col-md-6">\
                <div class="thumbnail">\
                    <img src="'+user.avatar_url+'" alt="'+user.name+'">\
                    <div class="caption">\
                        <p>Name: '+ (user.name || 'Not avaiable') +'</p>\
                        <p>Public repos: '+ user.public_repos +'</p>\
                        <p><a target="_blank" href="http://github.com/'+user.login+'" class="btn btn-primary">profile</a></p>\
                    <div>\
                </div>\
            </div>\
        ');
    };
    
    var fightTemplate = function(){
        return ('\
            <div class="col-md-6 col-md-offset-3">\
                <button type="button" class="btn btn-lg btn-danger btn-block js--fight">FIGHT</button>\
                <button type="button" class="btn btn-xl btn-default btn-block js--no-fight">stay cool</button>\
            </div>\
        ');
    };

    View.listUser = function(users){
        var html = users.map(function(user){
            return userTemplate(user);
        }).concat('');
        
        Util.emptyUserData();
        Util.DOM.userInfo.append(html);
        this.showFightButton();
    };
    
    View.showFightButton = function(){
        var html = fightTemplate();
        Util.DOM.userInfo.append(html);
    };

})(window.GithubBattle);

