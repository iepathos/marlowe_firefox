$("#checkPage").click(function(){
  var scores = [];
  var urls = ['https://morning-harbor-96808.herokuapp.com', 'https://desolate-bastion-86556.herokuapp.com', 'https://secure-basin-62593.herokuapp.com']
  $(urls).each(function() {
    $.ajax({
      type: 'POST', 
      url: this, 
      dataType: 'json',
      data: $('#marlowe').serialize(),
      success: function (data) {
        scores.push(Math.round(data.objectivity * 100));
        if (scores.length == urls.length) {
          sum = 0;
          for(var i = 0, len = scores.length; i < len; i++) {
              sum += scores[i];
          }
          $("#resp").html("<h3>" + sum/2 + "% objective</h3>");
        }
      },
      beforeSend:function(){
        $("#resp").html("Loading...")
      }
    });
  });
  return false;
});