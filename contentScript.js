document.H = function() {
  return Math.max(
      document.body.scrollHeight || 0, 
      document.documentElement.scrollHeight || 0,
      document.body.offsetHeight || 0, 
      document.documentElement.offsetHeight || 0,
      document.body.clientHeight || 0, 
      document.documentElement.clientHeight || 0
      );                
}
window.y = function() {
  return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;               
}
document.npages = function(){ return Math.ceil(document.H() / window.H()) - 1; } 
window.pagenum = function(){
  return Math.ceil(0.01 + this.y() / document.H() * document.npages());
}
window.H = function() {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
}

window.onscroll = function(event) {
  var percentage = document.getElementById('pageCounter-percentage');
  //percentage.innerHTML = '' + (window.y() * 100 /document.H()) + '%';
  percentage.innerHTML = '' + window.pagenum() + '/' + document.npages();
};

var node;
  node = document.createElement("div"); node.appendChild(document.createTextNode("what is up")); 
  node.id='pageCounter-percentage';
  //node.setAttribute('style',' position: fixed; right: 2%; bottom: 3%; color: red; ');
  document.body.appendChild(node);

chrome.runtime.onMessage.addListener( function(msg, sender, sendResponse) {
  //var originalColor = originalColor || document.body.style.backgroundColor;
  //var color = (msg  == 1) ? 'red' : 'white';
  //document.body.style.backgroundColor=color;
    node.style.display = msg == 1 ? 'inline' : 'none';
});
