const showNavigationMenu = () => {
  const header = document.querySelector(".header");
  const trigger = header.querySelector(".menu-toggle");
  const navigation = header.querySelector(".navigation");
  const navigationInner = navigation.querySelector(".navigation-menu");
  const navigationItems = navigationInner.querySelectorAll(
    ".navigation-menu__item"
  );

  trigger.addEventListener("click", (event) => {
    event.preventDefault();

    trigger.classList.toggle("menu-toggle--active");
    header.classList.toggle("header--active");
    navigation.classList.toggle("navigation--active");
    navigationInner.classList.toggle("navigation-menu--active");
  });

  navigationItems.forEach((item) =>
    item.addEventListener("click", (event) => {
      trigger.classList.toggle("menu-toggle--active");
      header.classList.toggle("header--active");
      navigation.classList.toggle("navigation--active");
      navigationInner.classList.toggle("navigation-menu--active");
    })
  );
};

showNavigationMenu();
