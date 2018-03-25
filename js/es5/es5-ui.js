// --- Constructor
// ---------------------

// UI
function UI () {
  this.profile = document.getElementById('profile');
}

// --- Methods
// ---------------------

// Render user
UI.prototype.handleShowProfile = function (user) {
  this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
  `;
};

// Show repos
UI.prototype.handleShowRepos = function (repos) {
  var output = ``;

  repos.forEach(function(repo) {
    output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
          </div>
        </div>
      </div>
    `;
  });

  // Output repos
  document.getElementById('repos').innerHTML = output;
};

// Show alert message
UI.prototype.handleShowAlert = function (msg, className) {
  // Clear any remaining alerts
  this.clearAlert();
  // Create <div>
  var div = document.createElement('div');
  // Add classes
  div.className = className;
  // Add text
  div.appendChild(document.createTextNode(msg));
  // Get parent
  var container = document.querySelector('.searchContainer');
  // Get search box
  var search = document.querySelector('.search');
  // Insert alert
  container.insertBefore(div, search);
  // Time after 3 seconds
  setTimeout(function () {
    this.clearAlert();
  }, 3000);
};

// Clear alert message
UI.prototype.handleClearAlert = function () {
  // Get current alert
  var currentAlert = document.querySelector('.alert');

  // Check if there is an exisiting alert
  if (currentAlert) {
    currentAlert.remove();
  }
};

// Clear profile
UI.prototype.handleClearProfile = function () {
  this.profile.innerHTML = '';
}
