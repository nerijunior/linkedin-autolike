const linkedinURL = "https://www.linkedin.com/YOUR-URL-HERE";

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: linkedinURL }, (newTab) => {
    chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
      if (tabId === newTab.id && changeInfo.status === "complete") {
        chrome.scripting.executeScript({
          target: { tabId: newTab.id },
          files: ["content.js"],
        });
        chrome.tabs.onUpdated.removeListener(listener);
      }
    });
  });
});
