onmessage = function (event) {
  // 이벤트 핸들러
  console.log("worker received message:", event.data);

  const hellofor10sec = () => {
    let count = 0;
    const intervalId = setInterval(() => {
      for (let i = 0; i < 10; i++) {
        console.log("Hello, world!");
      }

      count += 1;
      if (count >= 10) {
        clearInterval(intervalId);
      }
    }, 1000);
  };

  hellofor10sec();
};
