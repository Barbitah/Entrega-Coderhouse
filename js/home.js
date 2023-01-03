
  function toggleMode() {
    const toggleState = document.getElementById("toggle");

    if (toggleState.classList.contains("toggle-dark")) {
      toggleState.classList.remove("toggle-dark");
      toggleState.classList.add("toggle-light");

      document.documentElement.style.setProperty("--background", "#F2F2F2");
      document.documentElement.style.setProperty("--color", "#000000");
      document.documentElement.style.setProperty("--button", "#FFFFFF");
      document.documentElement.style.setProperty("--buttonhover", "#E5E5E5");
      document.documentElement.style.setProperty(
        "--feedback__color",
        "rgba(0, 0, 0, 0.25)"
      );
    } else {
      toggleState.classList.remove("toggle-light");
      toggleState.classList.add("toggle-dark");
      document.documentElement.style.setProperty("--background", "#0F0F0F");
      document.documentElement.style.setProperty("--color", "#F1F1F1");
      document.documentElement.style.setProperty("--button", "#272727");
      document.documentElement.style.setProperty("--buttonhover", "#3F3F3F");
      document.documentElement.style.setProperty(
        "--feedback__color",
        "rgba(255, 255, 255, 0.7)"
      );
    }
  }