async function redirectNewTab() {
  const homepageUrl = "https://startyparty.dev";

  await chrome.windows.getCurrent(async (window) => {
    await chrome.tabs.query({ active: true, windowId: window.id }, async (tabs) => {
      for (const tab of tabs) {
        chrome.tabs.update(tab.id, { url: homepageUrl });
      }
    });
  });
}

redirectNewTab();

chrome.action.onClicked.addListener((tab) => {
  redirectNewTab();
});
