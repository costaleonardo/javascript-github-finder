// --- Variables
// ---------------------

// Init Github
var github = new Github();
// Init UI
var ui = new UI;
// Get search input
var searchUser = document.getElementById('searchUser');

// --- Events
// ---------------------

// On keyup: render user
searchUser.addEventListener('keyup', function (e) {
  // Get input text
  var userText = e.target.value
  // Validate form
  if (userText !== '') {
    // Make an http call
    github.handleGetUser(userText)
      .then(data => {
        if (data.profile.message === 'Not found.') {
          // Show alert
          ui.handleShowAlert('User not found.', 'alert alert-danger');
        } else {
          // Show profile
          ui.handleShowProfile(data.profile);
          // Show repos
          ui.handleShowRepos(data.repos);
        }
      });
  } else {
    // Clear profile
    ui.handleClearProfile();
  }
});
