const tabsToggle = () => {
  const tabsWrapper = document.querySelector(".benefits-tabs");
  const contentWrapper = document.querySelector(".benefits-list");

  const tabs = tabsWrapper.querySelectorAll(".benefits-tabs__item");
  const content = contentWrapper.querySelectorAll(".benefits-list__item");

  content.forEach((item, idx) =>
    idx === 0
      ? item.classList.remove("benefit--hidden")
      : item.classList.add("benefit--hidden")
  );

  tabs.forEach((tab, idx) => {
    idx === 0
      ? tab.classList.add("benefits-tabs__item--active")
      : tab.classList.remove("benefits-tabs__item--active");

    tab.addEventListener("click", function (event) {
      let trigger = this;
      let dataTrigger = trigger.dataset.tab;

      tabs.forEach((item) =>
        item.classList.remove("benefits-tabs__item--active")
      );

      tab.classList.add("benefits-tabs__item--active");

      content.forEach((item, idx) =>
        dataTrigger === item.dataset.tab
          ? item.classList.remove("benefit--hidden")
          : item.classList.add("benefit--hidden")
      );
    });
  });
};

tabsToggle();
