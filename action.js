document.addEventListener("DOMContentLoaded", () => {
  const inputTitle = document.getElementById("inputTitle");
  const inputColor = document.getElementById("inputColor");
  const submitBtn = document.getElementById("submit");

  chrome.storage.local.get(["title", "color"], (data) => {
    if (data.title) inputTitle.value = data.title;
    if (data.color) {
      inputColor.value = data.color;
    }
  });

  submitBtn.addEventListener("click", () => {
    const title = inputTitle.value;
    const color = inputColor.value;

    chrome.storage.local.set({ title, color }, () => {
      alert("Settings saved!");
    });
  });

  inputColor.addEventListener("input", () => {
    inputHex.value = inputColor.value;
  });
});
