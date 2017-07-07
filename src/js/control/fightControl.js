(function(app){
    "use strict";
    var Control = (app._control || (app._control = {}));
    
    Control.fight = function(){
        var score = app._data.getFightResults({
            onError: function(error){
                console.log(error);
                app._view.alert('Error: Not possible to fight now. Please try again.');
            },
            
            onSuccess: function(scores){
                console.log(scores);
                var points = [];
                
                var finalScore = scores.map(function(user){
                    user.points = (user.followers * 2) + (user.stars * 5);
                    points.push(user.points);
                    return user;
                });
                
                var maxPoint = Math.max.apply(Math, points);
                
                var winner = finalScore.filter(function(user){
                    return user.points === maxPoint;
                });
                
                var loser = finalScore.filter(function(user){
                    return user.points != maxPoint;
                });
                
                if( winner.length > 1 ){
                    winner.forEach(function(item){
                        item.resultTitle = "Tie between competitors";
                        item.mode = "tie";
                    });
                }else{
                    winner[0].resultTitle = "Here's the Badass";
                    winner[0].mode = "win";
                    loser[0].resultTitle = "Not this time for this one";
                    loser[0].mode = "lose";
                }
                
                app._view.showWinner([].concat(winner, loser));
            }
        });
    };
    
})(window.GithubBattle);