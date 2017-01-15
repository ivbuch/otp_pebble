var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');

var main = new UI.Card({
  body: 'Hello buddy',
  bodyColor: '#9a0036' // Hex colors
});

main.show();

function get_date() {

    console.log("get_data()");
  ajax({ url: 'http://79.120.40.172:5000/otp-data?command=200', type: 'json' },
  function(data) {
    main.body(data.code);
  }
  );
}

main.on('click', 'up', function(e) {
  
  get_date();
  main.body("my body");
  console.log("up click");
});


main.on('click', 'select', function(e) {
  
  main.body("select");
  console.log("select click");
});

main.on('click', 'down', function(e) {
  
  main.body("down");
  console.log("down click");
});
