(function(app){
    "use strict";
    var Control = (app._control || (app._control = {}));
    
    /*
        It Requests the github api for the users in the form page
    */
    
    Control.listUserControl = function(userNames){
        // it cleans the last user data stored
        app._data.clearUsers();
        
        // it requests each user data
        userNames.forEach(function(user){
            app._data.getUser(user.value, {
                onError: function(error){
                    console.log(error);
                    app._view.alert('Ops! ' + user.value +' not found. Do a spell check and try again.');
                },
                onSuccess: function(userData){
                    // save last user data
                    app._data.setLastUser(user.value, userData);
                    console.log(userData);
                }
            });
        });
    };
    
})(window.GithubBattle);