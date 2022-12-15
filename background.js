var toggle = false;

chrome.action.onClicked.addListener((tab) => {
  toggle = !toggle;
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["/domDetails.js"],
  });

  chrome.action.setIcon({
    path: {
      16: toggle ? "icons/16-a.png" : "icons/16-d.png",
      32: toggle ? "icons/32-a.png" : "icons/32-d.png",
      48: toggle ? "icons/48-a.png" : "icons/48-d.png",
      128: toggle ? "icons/128-a.png" : "icons/128-d.png",
    },
    tabId: tab.id,
  });
});
