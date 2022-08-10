let video = JSON.parse(localStorage.getItem("video"));
console.log(video);

let contianer2 = document.getElementById("container2");

//--> that obj we have passed 

// let obj = {
//   name: title.title,
//   iframe: videoId, };

let display = (data) => {
  let div = document.createElement("div");

  div.setAttribute("id", "videodata");

  let frame = document.createElement("iframe");

  frame.width = "700px";

  frame.height = "460px";

  //--> data.iframe is nothing but video id which we have clicked and play
  frame.src = `https://www.youtube.com/embed/${data.iframe}`;

  let ourtitle = document.createElement("h1");
  ourtitle.innerText = data.name;

  div.append(frame, ourtitle);

  contianer2.append(div);
};

display(video);
