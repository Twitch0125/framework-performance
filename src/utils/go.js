export function go(mutate) {
    return new Promise((resolve) => {
      let iter = 0;
      let interval = setInterval(() => {
        iter++;
        mutate();
        if (iter === 100) {
          clearInterval(interval);
          resolve();
        }
      }, 0);
    });
  }