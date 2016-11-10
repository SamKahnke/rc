$(document).ready(function () {
  getMatches();

  // add stats
  $('#matchSubmit').on('click', postMatch);
});

function getMatches() {
  $.ajax({
    type: 'GET',
    url: '/matches',
    success: function (match) {
      console.log(match);
    }
  });
}

function postMatch() {
  event.preventDefault();

  var match = {};

  $.each($('#matchForm').serializeArray(), function (i, field) {
    match[field.name] = field.value;
  });

  $.ajax({
    type: 'POST',
    url: '/matches',
    data: match,
    success: function (data) {
      console.log('Successful post!');
      getMatches();
    },
  });

}
