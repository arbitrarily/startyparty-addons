const homepageUrl = "/newtab.html";

// Click Icon
chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.update(tab.id, { url: homepageUrl, loadReplace: true });
});

// Open New Window
browser.windows.onCreated.addListener(async (window) => {
  if (window.type !== "normal") return;

  const w = await browser.windows.get(window.id, { populate: true });
  const tabs = await browser.tabs.query({ windowId: w.id });

  if (
    tabs.length === 1 &&
    tabs[0].url === "about:blank" &&
    tabs[0].status === "complete" &&
    tabs[0].title === "New Tab"
  ) {
    await browser.tabs.update(tabs[0].id, {
      url: homepageUrl,
      loadReplace: true,
    });
  }
});
