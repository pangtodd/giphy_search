import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import $ from 'jquery';
import GitService from './gifSearch.js';

function clearFields() {
  $('#search').val("");
  $('.showErrors').text("");
  $('.showGif').text("");
  $('.showDescription').text("");
  // $('.showGif').text("");
}

$(document).ready(function() {
  $('#results').click(function() {
    const search = $('#search').val();
    // $('#city').val("");
    // $('#state').val("");
    clearFields();
    let promise = GitService.getGif(search);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showGif').append(`<img src = "${body.data[0].images.downsized.url}">`);
      $('.showDescription').text(`${body.data[0].title}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});

/*
<iframe src=`${body.data[0].images.downsized.url}` width="480" height="357" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href=`${body.data[1].images.downsized.url}`>via GIPHY</a></p>
*/