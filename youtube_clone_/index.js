//--> things i need to build things --> Youtube

//--> search bar
//--> On click event  on search bar
//--> then fetch api
//--> append data
let key="AIzaSyDCqkrXPTm06qxLAhWJrkI5mXwR73BW2BU";

let container = document.getElementById("searchresults");

let arrr = JSON.parse(localStorage.getItem("maindataofobj")) || [];

//--> arrow function
let mainfun = async () => {
  try {
    let search = document.getElementById("search").value;

    let apidata = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${search}&key=${key}&part=snippet&maxResults=20`
    );

    let { items } = await apidata.json(); //--> destructing item= data.item

    let arrVideos = items;

    console.log(arrVideos);
    appendData(arrVideos);
  } catch (error) {}
};

//--> this is for default function that will work automatically and work on main screen
let mainfun_default = async () => {
  try {

    let apidata = await fetch(
     
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${key}&part=snippet&maxResults=20`
    );

    let { items } = await apidata.json(); //--> destructing item= data.item

    let arrVideos = items;

    console.log(arrVideos);
    display(arrVideos);
  } catch (error) {}
};

mainfun_default();

// normal function vs now on we use arrow functions
// function appenddata(el){
// }

//--> when user click then  mainfun envokes and then mainfun pass value here and this will append on main page 
let appendData = (data) => {
  container.innerHTML = "";

  //--> we are using destructing method for accessing those id and thier prooperties
  //--> d: { videoId } means inside id we want videoId
  
  //--> inside main obj data i have catched snippet and then inside that title by using distructing method
  data.forEach(
    ({
      snippet: 
        { title },
      
      snippet: {
        thumbnails: { medium },
      },
      id: { videoId },
    }) => {

      let maindiv = document.createElement("div");
      maindiv.setAttribute("id", "maindiv");

      let iframe = document.createElement("img");

      //--> we are passing video id because we wanna different video eveytime dynamic
      iframe.src = medium.url;
      iframe.style.width = "230px";
      iframe.style.height = "150px";

      let maintitle = document.createElement("h4");
      maintitle.setAttribute("id", "maintitle");

      maintitle.innerText = title;
      console.log(title);

      maindiv.append(iframe, maintitle);

      container.append(maindiv);

      maindiv.addEventListener("click", function () {
        window.location.href = "video.html";
        let obj = {
          name: title,
          iframe: videoId,
        };
        //--> for storing our object in local storage
        localStorage.setItem("video", JSON.stringify(obj));
      });
    }
  );
};



//--> default for showing display values in main Yt screen
let display = (data) => {
  container.innerHTML = "";

  //--> we are using destructing method for accessing those id and thier prooperties
  //--> d: { videoId } means inside id we want videoId
  
  //--> inside main obj data i have catched snippet and then inside that title by using distructing method
  data.forEach(
    ({
      snippet: 
        { title },
      
      snippet: {
        thumbnails: { medium },
      },
      id: { videoId },
    }) => {

      let maindiv = document.createElement("div");
      maindiv.setAttribute("id", "maindiv");

      let iframe = document.createElement("img");

      //--> we are passing video id because we wanna different video eveytime dynamic
      iframe.src = medium.url;
      iframe.style.width = "230px";
      iframe.style.height = "150px";

      let maintitle = document.createElement("h4");
      maintitle.setAttribute("id", "maintitle");

      maintitle.innerText = title;
      console.log(title);

      maindiv.append(iframe, maintitle);

      container.append(maindiv);

      maindiv.addEventListener("click", function () {
        window.location.href = "video.html";
        let obj = {
          name: title,
          iframe: videoId,
        };
        //--> for storing our object in local storage
        localStorage.setItem("video", JSON.stringify(obj));
      });
    }
  );
};
