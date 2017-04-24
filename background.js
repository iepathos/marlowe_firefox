function getObjectivity(info, tab) {
  $.ajax({
    type: 'POST', 
    url: 'https://morning-harbor-96808.herokuapp.com', 
    dataType: 'json',
    data: $('#marlowe').serialize(),
    success: function (data) {
      alert(data.objectivity * 100 + "% objective");
    }
  });    
}
chrome.contextMenus.create({
  title: "Objectivity: %s", 
  contexts:["selection"], 
  onclick: getObjectivity,
});