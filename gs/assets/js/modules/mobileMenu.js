// const showNavigationMenu = () => {
export default function showNavigationMenu() {
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
    document.documentElement.classList.toggle("hidden");
  });

  navigationItems.forEach((item) =>
    item.addEventListener("click", (event) => {
      trigger.classList.remove("menu-toggle--active");
      header.classList.remove("header--active");
      navigation.classList.remove("navigation--active");
      navigationInner.classList.remove("navigation-menu--active");
      document.documentElement.classList.remove("hidden");
    })
  );
}

// showNavigationMenu();
