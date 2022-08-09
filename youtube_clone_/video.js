let video = JSON.parse(localStorage.getItem("video"));
console.log(video);

let display = (data) => {
  let div = document.createElement("div");

  div.setAttribute("id", "videodata");

  let url = data.iframe;

  let frame = document.createElement("iframe");

  frame.width = "700px";
  let ourtitle = document.createElement("h1");
  ourtitle.innerText = data.name;

  console.log(url);
  div.append(frame, ourtitle);

  document.querySelector("body").append(div);
};

display(video);
