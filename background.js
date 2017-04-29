function getObjectivity(info, tab) {
  var scores = [];
  var urls = ['https://morning-harbor-96808.herokuapp.com', 'https://desolate-bastion-86556.herokuapp.com']
  $(urls).each(function() {
    var url = this;
    $.ajax({
      type: 'POST', 
      url: url, 
      dataType: 'json',
      data: {"text": info.selectionText},
      success: function (data) {
        scores.push(Math.round(data.objectivity * 100));
        if (scores.length == urls.length) {
          sum = 0;
          for(var i = 0, len = scores.length; i < len; i++) {
              sum += scores[i];
          }
          var alertWindow = 'alert('+sum/2 +' + "% objective")';
          browser.tabs.executeScript({code : alertWindow});
        }
      }
    });
  });
}
chrome.contextMenus.create({
  title: "Objectivity: %s", 
  contexts:["selection"], 
  onclick: getObjectivity,
});