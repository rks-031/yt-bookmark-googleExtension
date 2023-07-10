import { getActiveTabURL } from "./utils.js";

// adding a new bookmark row to the popup

const addNewBookmark = () => {};

const viewBookmarks = () => {};

const onPlay = (e) => {};

const onDelete = (e) => {};

const setBookmarkAttributes = () => {};

document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = getActiveTabURL();
  const queryParams = activeTab.url.split("?")[1];
  const urlParams = new URLSearchParams(queryParams);

  const currentVideo = urlParams.get("v");

  if (activeTab.url.includes("youtube.com/watch") && currentVideo) {
    chrome.storage.sync.get([currentVideo], (data) => {
      const currentVideoBookmarks = data[currentVideo]
        ? JSON.parse(data[currentVideo])
        : [];

      //viewBookmarks
    });
  } else {
    const container = document.getElementsByClassName("container")[0];

    container.innerHTML =
      "<div class='title'>This is not a youtube video page.</div>";
  }
});
