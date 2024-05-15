/**
 * Get the homepage URL configured in Firefox.
 *
 * @return the homepage URL as a string
 */

async function redirectNewTab() {
  const homepageUrl = "https://startyparty.dev"; /* Fallback to my personal website if homepage is a privileged URL */
  const focusPreference = await browser.storage.local
    .get({ focus: "website" })
    .then((data) => data.focus);

  await browser.tabs.getCurrent((tab) => {
    if (focusPreference === "addressbar") {
      browser.tabs.update(
        tab["id"],
        { url: homepageUrl, loadReplace: true },
        () => {}
      );
    } else {
      browser.tabs.create({ url: homepageUrl }, () => {
        browser.tabs.remove(tab["id"]);
      });
    }
  });
}

redirectNewTab();
