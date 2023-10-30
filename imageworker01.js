onmessage = function (event) {
  // 이벤트 핸들러
  console.log("worker received message:", event.data);

  const getImage = async () => {
    const image = await fetch("https://dummyimage.com/2000x2000/000/fff.jpg");
    console.log(image.url);
    return image.url;
  };

  return getImage();
};
