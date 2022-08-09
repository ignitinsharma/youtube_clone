//--> things i need to build things --> Youtube

//--> search bar
//--> On click event  on search bar
//--> then fetch api
//--> append data

let container = document.getElementById("searchresults");

let arrr = JSON.parse(localStorage.getItem("maindataofobj")) || [];

//--> arrow function
let mainfun = async () => {
  try {
    let search = document.getElementById("search").value;

    let apidata = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${search}&key=AIzaSyCUjClL0CngQjSJqlF4OQ5E1vkdpeD0koY&part=snippet&maxResults=30`
    );

    let { items } = await apidata.json(); //--> destructing item= data.item

    let arrVideos = items;

    console.log(arrVideos);
    appendData(arrVideos);
  } catch (error) {}
};

// normal function vs now on we use arrow functions
// function appenddata(el){
// }

let appendData = (data) => {
  container.innerHTML = "";

  //--> we are using destructing method for accessing those id and thier prooperties
  //--> d: { videoId } means inside id we want videoId
  data.forEach(
    ({
      snippet: { title },
      snippet: {
        thumbnails: { medium },
      },
      id: { videoId },
    }) => {
      let maindiv = document.createElement("div");

      let iframe = document.createElement("img");

      //--> we are passing video id because we wanna different video eveytime dynamic
      iframe.src = medium.url;
      iframe.style.width = "230px";
      iframe.style.height = "150px";

      let maintitle = document.createElement("h4");
      maintitle.setAttribute("id", "maintitle");

      maintitle.innerText = title.title;
      console.log(title.title);

      maindiv.append(iframe, title);

      container.append(maindiv);

      iframe.addEventListener("click", function () {
        window.location.href = "video.html";
        let obj = {
          name: title.title,
          iframe: videoId,
        };
        //--> for storing our object in local storage
        localStorage.setItem("video", JSON.stringify(obj));
      });
    }
  );
};
