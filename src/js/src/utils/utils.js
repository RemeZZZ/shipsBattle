export function debounce(ms, func) {
  let isTimeout = false;
  return (...args) => {
    if (isTimeout) {
      return;
    }

    isTimeout = true;

    func(...args);

    setTimeout(() => {
      isTimeout = false;
    }, ms);
  };
}
