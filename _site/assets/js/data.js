$(function(){
  $.ajax({
    url: 'https://geoip-db.com/json/',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
    //   var location = data;
    //   console.log(data)
      $('.location').text(data.city)
      
      
    }
  });
});