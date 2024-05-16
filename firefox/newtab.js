/**
 * Get the homepage URL configured in Firefox.
 *
 * @return the homepage URL as a string
 */

async function redirectNewTab() {
  const homepageUrl = "https://startyparty.dev"; /* Fallback to my personal website if homepage is a privileged URL */

  await browser.tabs.getCurrent((tab) => {
    browser.tabs.update(
      tab["id"],
      { url: homepageUrl, loadReplace: true },
      () => {}
    );
  });
}

redirectNewTab();
