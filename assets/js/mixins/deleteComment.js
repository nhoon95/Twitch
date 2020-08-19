import axios from "axios";
const commentList = document.getElementById("commentList");
const commentText = document.getElementById("commentText");
const delBtn = document.getElementById("delBtn");

const axiosDelete = async (id) => {
  const videoId = window.location.href.split("/video/")[1];
  const response = await axios({
    url: `/api/${videoId}/deletecomment`,
    method: "POST",
    data: {
      //코멘트 아이디를 찾아서 지워야댐
      id: id,
    },
  });
  console.log(response);
};

const getValue = (event) => {
  const commentId = event.target.value;
  axiosDelete(commentId);
};

function init() {
  delBtn.addEventListener("click", getValue);
}

if (commentList) {
  init();
}

/*왜 그러는지 모르겠지만, 버튼을 클릭하면 element전체가 선택이된다
이것 부터 일단 고쳐야 겟다. */
