(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    // TODO: refactor this request into an $.ajax call
    //the request to slash hits our server
    //everything after /github/ is available to the server as .params property
    //remember it is a string - LOOK at server.js

    // $.get('/github/users/codefellows-portland-301d6/repos' +
    //       '?per_page=10&sort=updated')
    //       .done(function(data) {
    //         reposObj.allRepos = data;
    //       }).done(callback);

    $.ajax('/github/users/codefellows-portland-301d6/repos?per_page=10&sort=updated', {
      method: 'GET',
      success: function(data) {
        console.log(data);
        reposObj.allRepos = data;
      },
    }).done(callback);
  };



  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
