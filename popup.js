$("#checkPage").click(function(){
  $.ajax({
    type: 'POST', 
    url: 'https://morning-harbor-96808.herokuapp.com', 
    dataType: 'json',
    data: $('#marlowe').serialize(),
    success: function (x) {                
      $("#resp").html(x.response);
    },
    beforeSend:function(){
      $("#resp").html("Loading...")
    }
  });
  setTimeout(function () {
    return false;
  }, 10000);
  
});