$("#checkPage").click(function(){
  $.ajax({
    type: 'POST', 
    url: 'https://morning-harbor-96808.herokuapp.com', 
    dataType: 'json',
    data: $('#marlowe').serialize(),
    success: function (data) {
      $("#resp").html("<h3>" + data.objectivity + "% objective</h3>");
    },
    beforeSend:function(){
      $("#resp").html("Loading...")
    }
  });
  setTimeout(function () {
    return false;
  }, 10000);
  
});