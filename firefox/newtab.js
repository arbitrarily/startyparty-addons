async function redirectNewTab() {
  const homepageUrl = "https://startyparty.dev";

  await browser.tabs.getCurrent((tab) => {
    browser.tabs.update(
      tab["id"],
      { url: homepageUrl, loadReplace: true },
      () => {},
    );
  });
}

redirectNewTab();
