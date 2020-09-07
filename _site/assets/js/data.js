$(function(){
  $.ajax({
    url: 'https://geoip-db.com/json/',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      $('.location').text(data.city)  
    }
  });
});