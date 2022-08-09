//--> things i need to build things --> Youtube

//--> search bar
//--> On click event  on search bar
//--> then fetch api
//--> append data

let container=document.getElementById('searchresults');

//--> arrow function
let mainfun = async () => {
  try {
    let search = document.getElementById("search");

    let apidata = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${search}&key=AIzaSyCUjClL0CngQjSJqlF4OQ5E1vkdpeD0koY&part=snippet&maxResults=30`
    );

    let { items } = await apidata.json(); //--> destructing item= data.item

    let arrVideos = items;

    appendData(arrVideos);
    console.log(arrVideos);
  } catch (error) {}
};

// normal function vs now on we use arrow functions
// function appenddata(el){
// }

let appendData = (data) => {

  //--> we are using destructing method for accessing those id and thier prooperties
  //--> d: { videoId } means inside id we want videoId
  data.forEach(({ snippet: { title }, id: { videoId } }) => {

    let maindiv=document.createElement('div')

    let iframe=document.createElement('iframe')
    
    //--> we are passing video id because we wanna different video eveytime dynamic
    iframe.src=`https://www.youtube.com/embed/${videoId}`
    iframe.width=`100%`;
    iframe.height=`100%`;

    let maintitle=document.createElement('h4');
    maintitle.innerText=title;

    maindiv.append(iframe,title);

    container.append(maindiv)

   container.addEventListener("click", function(){

    let obj={
        objtitle:title,
        objiframe:iframe,

    }
    

   })


  });
};
