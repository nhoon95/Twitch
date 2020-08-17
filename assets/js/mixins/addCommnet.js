import axios from "axios";
const addCommentForm = document.getElementById("jsAddComment");

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/video/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment: comment,
    },
  });
  console.log(response);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const input = addCommentForm.querySelector("input");
  const comment = input.value;
  sendComment(comment);
  input.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
  init();
}
