(function(app){
    "use strict";
    var View = (app._view || (app._view = {}));
    var Util = app._utils;

    var template = function(user){
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

    View.listUser = function(users){
        var html = users.map(function(user){
            return template(user);
        }).concat('');
        
        Util.emptyUserData();
        Util.DOM.userInfo.append(html);
    };

})(window.GithubBattle);

