chrome.storage.local.get(["title", "color"], (data) => {
  if (data.title) document.title = data.title;
  if (data.color) {
    document.body.style.backgroundColor = data.color;
  }
});
