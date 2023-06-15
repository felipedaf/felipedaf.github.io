import "./src/styles/global.css";

export const onInitialClientRender = () => {
  const scrollingElement = document.querySelector("#page-wrapper");
  scrollingElement.scrollTo(0, 100);
  const scrollListener = (e) => {
    e.preventDefault();
    e.stopPropagation();

    return false;
  };
  window.globalListeners = {
    scroll: scrollListener,
  };
  scrollingElement.addEventListener("scroll", scrollListener);
};
