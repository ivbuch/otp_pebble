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
  ajax({ url: 'https://lenta.ru/parts/currency/partial.json', type: 'json' },
  function(data) {
    console.log('Quote of the day is: ' + data);
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
