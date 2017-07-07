(function(app){
    "use strict";
    var Data = (app._data || (app._data = {}));

    Data.getFightResults = function(handlerCallback){
        
        var competitors = this.getLastUsers();
        var score = competitors.map(function(user){
            return { 
                name: user.name,
                followers: user.followers
            };
        });
        
        competitors.forEach(function(user, i){
            var url = user.repos_url;
            var page = 1;
            var per_page = 50;
            var count = 0;
            
            (function getRepos(page, per_page){
                var finalUrl = url + '?page='+page+'&per_page='+per_page;
                
                $.ajax( finalUrl , {
                    headers: Data._headers,
                    error: function(data){
                        handlerCallback.onError(data);
                    },
                    success: function(data){
                        count += data.reduce(function(prev, next){
                            return prev + next.stargazers_count;
                        }, 0);
                        
                        if( data.length && data.length ==  per_page){
                            getRepos(++page, per_page);
                        }else{
                            // all repos has been verified
                            score[i].stars = count;
                            var allCompertitorReady = score.filter(function(user){ return user.stars !== undefined; }).length == 2;
                            
                            if(  allCompertitorReady ){
                                handlerCallback.onSuccess(score);
                            }
                        }
                    }
                });
            })(page, per_page);

        });
        
        
    };

})(window.GithubBattle);