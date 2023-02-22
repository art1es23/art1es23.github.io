export default function initScrollToTop() {
  const scrollButton = document.querySelector(".button-scroll-top");

  window.addEventListener("mousewheel", (e) => {
    document.documentElement.scrollTop >= 1500
      ? scrollButton.classList.add("visible")
      : scrollButton.classList.remove("visible");

    let endPageTrigger =
      document.documentElement.scrollHeight - window.innerHeight;

    console.log(endPageTrigger);
    document.documentElement.scrollTop >= endPageTrigger
      ? scrollButton.classList.add("end-page")
      : scrollButton.classList.remove("end-page");
  });

  scrollButton.addEventListener("click", (e) => {
    e.currentTarget.classList.remove("visible", "end-page");
  });
}
