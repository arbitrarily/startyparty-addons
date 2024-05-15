const homepageUrl = "https://startyparty.dev";

chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.update(tab.id, { url: homepageUrl });
});

browser.windows.onCreated.addListener(async (window) => {
  if (window.type === "normal") {
    const tabs = await browser.tabs.query({ windowId: window.id });
    if (tabs.length === 1 && tabs[0].url === "about:blank") {
      await browser.tabs.update(tabs[0].id, { url: homepageUrl });
    }
  }
});
