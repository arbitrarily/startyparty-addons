let isNewSession = true;
const homepageUrl = "https://s.marko.tech";

chrome.tabs.onCreated.addListener((tab) => {
  if (
    isNewSession &&
    (tab.url === "about:blank" || tab.url === "about:newtab")
  ) {
    chrome.tabs.update(tab.id, { url: homepageUrl });
  }
});

chrome.windows.onCreated.addListener(() => {
  if (isNewSession) {
    isNewSession = false;
  }
});

chrome.runtime.onStartup.addListener(() => {
  isNewSession = true;
});

chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.update(tab.id, { url: homepageUrl });
});