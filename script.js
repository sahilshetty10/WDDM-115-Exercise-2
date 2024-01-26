function changeImage() {
    console.log("changeImage");
    let img_container = document.getElementById("random_image");
    if (img_container.src === "https://picsum.photos/200/300") {
      img_container.src = "https://picsum.photos/200/300?blur";
    } else {
      img_container.src = "https://picsum.photos/200/300";
    }
  }
  changeImage();