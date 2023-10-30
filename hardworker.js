onmessage = function (event) {
  // 이벤트 핸들러
  console.log("worker received message:", event.data);

  const eatMaxMemory = () => {
    const array = [];

    for (let i = 0; i < 1000000; i++) {
      array.push(new Array(1000000));
    }
  };

  eatMaxMemory();
};
