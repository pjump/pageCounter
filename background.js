// Send a toggle message to content script

var toggle = 0;

chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  sendMessage(toggle);
});

function sendMessage(msg) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    lastTabId = tabs[0].id;
    chrome.tabs.sendMessage(lastTabId, msg);
  });
}
