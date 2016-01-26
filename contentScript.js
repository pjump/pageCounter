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

var node;
node = document.createElement("div"); node.appendChild(document.createTextNode("")); 
node.id='pageCounter-percentage';
document.body.appendChild(node);

function update(event) {
  node.innerHTML = '' + window.pagenum() + '/' + document.npages();
};
window.onscroll = update;

chrome.runtime.onMessage.addListener( function(msg, sender, sendResponse) {
  node.style.display = msg == 1 ? 'inline' : 'none';
});

update();
