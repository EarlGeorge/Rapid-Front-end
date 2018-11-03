import $ from 'jquery';

$(document).ready(function () {
  const scrollLink = $('.smooth-scroll');

  // Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 50,
    }, 1500);
  });
  $('[data-toggle="popover"]').popover();


  // Github User https://api.github.com/
  $('#findOne').on('keyup', function (findeone) {
    const username = findeone.target.value;

    $.ajax({
      url: `https://api.github.com/users/${username}`,
      // client ID is not required for simple use...
      data: {
        client_id: '0eadcc503c421a8c0317',
        client_secret: '70d250b000fd5bd518d9aaebb12f809656d4fae1',
      },
    }).done(function (user) {
      // About User
      $('#profile').html(`
        <h1 class="username">${user.name}</h1>
        <hr>
          <span class="badge badge-secondary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-secondary">Followers: ${user.followers}</span>
          <span class="badge badge-secondary">Following: ${user.following}</span>
        <hr>
          <div class="user-body">
            <div class="row">
              <div class="col-md-12">
                <img src="${user.avatar_url}">
                <hr>
                  <span class="badge badge-secondary">Website: <a href="${user.blog}" target="_blank">${user.blog}</a></span>
                  <span class="badge badge-secondary">Company: ${user.company}</span>
                  <span class="badge badge-secondary">Location: ${user.location}</span>
                  <span class="badge badge-secondary">Email: ${user.email}</span>
              </div>
              <br>
              <div class="col-md-2">
                <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">View Profile</a>
              </div>
            </div>
          </div>
        <h2>List of user Repositories</h2>
        <br>
        <div id="repos"></div>
        <br>
        <h3>Member Since:: ${user.created_at}</h3>
      `);
    });
    // Get list of User Repos
    $.ajax({
      url: `https://api.github.com/users/${username}/repos`,
      // client ID is not required for simple use...
      data: {
        client_id: '0eadcc503c421a8c0317',
        client_secret: '70d250b000fd5bd518d9aaebb12f809656d4fae1',
        sort: 'created: first',
        per_page: 1000,
      },
    }).done(function (repos) {
      $.each(repos, function (index, info) {
        $('#repos').append(`
          <div class="container">
            <div class="row">
              <div class="col-md-1">
                <a href="${info.html_url}" class="btn btn-default" target="_blank">Repo Page</a>
              </div>
              <div class="col-md-9">
                <strong>${info.name}</strong>: ${info.description}
                <hr> 
              </div>
              <div class="col-md-2">
                <h6>Forks: <span class="badge badge-primary"> ${info.forks_count}</span></h6>
                <h6>Watchers: <span class="badge badge-primary"> ${info.watchers_count}</span></h6>
                <h6>Stars: <span class="badge badge-primary"> ${info.stargazers_count}</span></h6>
              </div>
            </div>
          </div>
        `);
      });
    });
  });
});


// $(function() {

//   // Highlight the active nav link.

//   let url = window.location.pathname;
//   let filename = url.substr(url.lastIndexOf('/') + 1);

//   $('.navbar-nav a[href$="' + filename + '"]').parent().addClass("active");

// });

// const active = window.location.pathname;
// $(".nav-link[href|='" + active + "']").parent().addClass("active");
// });
