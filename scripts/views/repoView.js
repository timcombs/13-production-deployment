(function(module) {
  var repoView = {};

  var repoCompiler = Handlebars.compile($('#repo-template').text());
  var followersCompiler = Handlebars.compile($('#followers-template').text());

  repoView.renderRepos = function() {
    $('#about ul').empty().append(
      reposObj.withTheAttribute('name')
      .map(repoCompiler)
    );

    //this is not formatted to display followers and repos correctly
    $('#about .followers').empty().append(
       reposObj.allRepos.map(followersCompiler)
     );
  };
  reposObj.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
