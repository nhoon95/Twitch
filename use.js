const anchor = document.getElementById("anchor");

const handleImage = () => {
  const img = (document.getElementById("img").src = "image/logo.png");
  anchor.appendChild(img);
};
