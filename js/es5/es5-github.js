// --- Constructor
// ---------------------

// Github
function Github () {
  this.client_id = '6a60d829f4d9c65577f0';
  this.client_secret = 'b32699b418edd0123a8958bf644627dbb54a1764';
  this.repos_count = 5;
  this.repos_sort = 'created: asc';
}

// --- Methods
// ---------------------

// Get user data
Github.prototype.handleGetUser = async function (user) {
  // var profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  // var repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
  //
  // var profile = await profileResponse.json();
  // var repos = await repoResponse.json();

  var profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`),
      repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`),
      profile = await profileResponse.json(),
      repos = await repoResponse.json();

  return {
    profile: profile,
    repos: repos
  }
};
