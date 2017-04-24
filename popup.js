$("#checkPage").click(function(){
  $.ajax({
    type: 'POST', 
    url: 'https://morning-harbor-96808.herokuapp.com', 
    dataType: 'json',
    data: $('#marlowe').serialize(),
    success: function (data) {
      console.log(data)         
      $("#resp").html("Objectivity Score: " + data.objectivity);
    },
    beforeSend:function(){
      $("#resp").html("Loading...")
    }
  });
  setTimeout(function () {
    return false;
  }, 10000);
  
});