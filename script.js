'use strict';

function getUserRepo() {
  fetch(`https://api.github.com/users/${userSearch}/repos`)
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson))
  .catch(error => alert("Something went wrong, please try again."));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let userSearch= $('input: .submit').val();
    getUserRepo(userSearch);
  });
}

$(function() {
  console.log('Good to go!  Pick a user!');
  watchForm();
})