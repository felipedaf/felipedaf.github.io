import anime from "animejs";

export const changeLoadingStateSmoothly = (
  currentState,
  loadingState,
  setLoadingState
) => {
  const loadingObject = {
    value: currentState,
  };

  anime({
    targets: loadingObject,
    value: loadingState,
    duration: 200,
    easing: "linear",
    update: () => {
      setLoadingState(loadingObject.value.toFixed(2));
    },
  });
};

export const loadingPromises = (setLoadingState) => {
  const timeoutList = [];

  let currentState = 0;

  const promises = Array(10)
    .fill(0)
    .map((_, i) => {
      return new Promise((res) => {
        const time = 300 * (i + 1) + Math.random() * 300;
        timeoutList.push(
          setTimeout(() => {
            const percentage = i / 10 + Math.random() * 0.09;
            changeLoadingStateSmoothly(
              currentState,
              percentage,
              setLoadingState
            );
            currentState = percentage;
          }, time)
        );
        res();
      });
    });

  Promise.all(promises);

  return timeoutList;
};
