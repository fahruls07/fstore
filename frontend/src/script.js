document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      document.querySelectorAll("details").forEach((el) => {
        if (el !== detail) el.open = false;
      });
    }
  });
});