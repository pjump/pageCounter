chrome.runtime.onMessage.addListener( function(msg, sender, sendResponse) {
    var originalColor = originalColor || document.body.style.backgroundColor;
    var color = (msg  == 1) ? 'red' : 'white';
    document.body.style.backgroundColor=color;
});
