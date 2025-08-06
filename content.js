(async () => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function scrollToBottom(times = 3, wait = 2000) {
    for (let i = 0; i < times; i++) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      await delay(wait);
    }
  }

  await scrollToBottom(3, 2500);

  let likedCount = 0;

  await delay(2000);

  const buttons = document.querySelectorAll(
    ".feed-container-theme .reactions-react-button button:first-child",
  );

  for (const btn of buttons) {
    const alreadyLiked = btn.getAttribute("aria-pressed") === "true";

    if (!alreadyLiked) {
      btn.click();
      likedCount++;
      await delay(500);
    }
  }

  alert(`${likedCount} likes.`);
})();
