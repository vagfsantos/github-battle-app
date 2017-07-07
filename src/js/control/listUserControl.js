(function(app){
    "use strict";
    var Control = (app._control || (app._control = {}));
    
    Control.listUserControl = function(userNames){
        console.log(userNames);
        userNames.forEach(function(user){
            app._data.getUser(user.value, {
                onError: function(error){
                    console.log(error);
                },
                onSuccess: function(userData){
                    console.log(userData);
                }
            });
        });
    };
    
})(window.GithubBattle);