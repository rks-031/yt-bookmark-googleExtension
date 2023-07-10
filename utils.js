//this helps us to find the active tab that the user is on and whether the user has already created a bookmark on this page.

export async function getActiveTabURL() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
