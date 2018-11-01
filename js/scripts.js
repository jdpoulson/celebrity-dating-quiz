$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var haircolor = $("select#hair-color").val();

    if ((haircolor === 'red') && (age < 48) && (gender === 'male')) {
      $('.britney-spears').show();
      $('.john-goodman').hide();
      $('.jim-carry').hide();
      $('.wayne-brady').hide();
    }

    if ((haircolor === 'brown') && (age < 45) && (gender === 'female')) {
      $('.jim-carry').show();
      $('.britney-spears').hide();
      $('.john-goodman').hide();
      $('.wayne-brady').hide();
    }

    if ((haircolor === 'black') && (age < 46) && (gender === 'female')) {
      $('.john-goodman').show();
      $('.wayne-brady').hide();
      $('.jim-carry').hide();
      $('.britney-spears').hide();
    }

    if ((haircolor === 'red') && (age < 47) && (gender === 'female')) {
      $('.wayne-brady').show();
      $('.john-goodman').hide();
      $('.britney-spears').hide();
      $('.jim-carry').hide();
    }

    if ((haircolor === 'red') && (age > 45) && (gender === 'male')) {
      $('.no-date').show();
    }

    event.preventDefault();
  });
});
