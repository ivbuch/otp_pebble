var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');

var main = new UI.Card({
  body: 'Hello buddy',
  scrollable: false
});

main.show();

main.on('click', 'up', function(e) {
  
  console.log("up click");
  get_otp_data();
});


main.on('click', 'select', function(e) {
  
  main.body("select");
  console.log("select click");
});

main.on('click', 'down', function(e) {
  
  console.log("down click");
  get_info_page();
});


function get_otp_data() {

  console.log("get_otp_data()");
  ajax({ url: 'http://192.168.1.33:5000/otp-data?command=200', type: 'json' },
  function(data) {
    main.body(data.code);
  });
};

function get_info_page() {

  console.log("get_info_page()");
  ajax({ url: 'http://192.168.1.33:5000/info-page', type: 'json' },
  function(data) {
    main.body(data.info_page);
  });
};
