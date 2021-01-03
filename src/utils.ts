export function formatCodeString(code: string): string {
  return code.trim();
}

export function fixHeightOnChrome(): void {
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  const isChrome = navigator.userAgent.indexOf("Chrome") > -1;
  if (isChrome) {
    document.getElementsByClassName("theme")[0].style["min-height"] =
      "calc(var(--vh, 1vh) * 100)";
  }

  // We listen to the resize event
  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    if (isChrome) {
      document.getElementsByClassName("theme")[0].style["min-height"] =
        "calc(var(--vh, 1vh) * 100)";
    }
  });
}
