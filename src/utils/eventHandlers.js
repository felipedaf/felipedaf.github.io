import * as _ from "lodash";
import anime from "animejs";

class PageEventHandlers {
  constructor(element) {
    this.counter = 0;
    this.element = element;
    this.eventListeners = [];
    this.scrollSection = 0;
    this.eventsData = {
      wheel: {
        position: 0,
      },
    };
  }

  addScrollEvent(sessions = []) {
    let leading = true;

    const scrollResolver = _.throttle(
      (event) => {
        const isPageDown = event.deltaY > 0;

        this.scrollSection += isPageDown ? 1 : -1;

        if (this.scrollSection < 0) {
          this.scrollSection = 0;
          return;
        } else if (this.scrollSection >= sessions.length) {
          this.scrollSection = sessions.length - 1;
          return;
        }

        const { offsetTop } = sessions[this.scrollSection];

        anime({
          targets: this.eventsData.wheel,
          position: offsetTop,
          duration: 300,
          easing: "spring(1, 90, 12, 0)",
          update: () => {
            this.element.scrollTo(0, this.eventsData.wheel.position);
          },
        });

        leading = !leading;
      },
      900,
      { trailing: false }
    );

    const listener = (event) => {
      event.preventDefault();
      event.stopPropagation();

      scrollResolver(event);

      return false;
    };

    this.element.addEventListener("wheel", listener);
    this.eventListeners.push({
      event: "wheel",
      listener,
    });
  }

  disconnect() {
    this.eventListeners.forEach((listenerObject) => {
      this.element.removeEventListener(
        listenerObject.event,
        listenerObject.listener
      );
    });
  }
}

export default PageEventHandlers;
