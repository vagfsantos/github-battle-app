(function(app){
    "use strict";
    var View = (app._view || (app._view = {}));
    var Util = app._utils;

    var winnerTemplate = function(user){
        return('\
            <div class="well well-lg '+user.mode+'">\
                <h4>'+user.resultTitle+' <span class="badge">Points: '+user.points+'</span></h4>\
                <p>Name: '+ (user.name || 'Not avaiable') +'</p>\
                <p>Stars: '+ user.stars +'</p>\
                <p>Followers: '+ user.followers +'</p>\
            </div>\
        ');
    };

    View.showWinner = function(scores){
        Util.DOM.userMatch.html('');
        scores.forEach(function(user){
            var html = winnerTemplate(user);
            Util.DOM.userMatch.append(html);
        });
    };

})(window.GithubBattle);

