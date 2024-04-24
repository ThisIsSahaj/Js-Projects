// const APIURL = "https://api.github.com/users/";
// const main = document.querySelector("#main")

// // making searchBox as a global variable
// const searchBox = document.querySelector("#search")  //calling the search bar with it's id and storing it in a constant


// const getUser = async(username) => {
//     const response = await fetch(APIURL + username);
//     const data = await response.json()   //this means convert into json and isme se data ko nikal ke data naam ke var me daaldo
//     console.log(data);

    
//     //making the card Dynamic {use backticks `` }
//     const card = `
//     <div class="conatainer">
//     <div class="leftCard">
//     <div class="userImage">
//         <img src="${data.avatar_url}" alt="Floring Pop" class="avatar">
//     </div>
//     <div class="user-info">
//     <h2>${data.name}</h2>
//     <div class="details">
//         <p>${data.bio}</p>
//         <ul class="info">
//             <li>${data.followers} Followers • ${data.following} Following • ${data.public_repos} Repos</li>
//         </ul>
//         </div>
//     </div>
// </div>
// <div class="rightCard">
// <div class="head">REPOSITORIES</div> 
// <div id="repos">
//         </div>
//         </div>
// </div>
// `

// // main.innerHTML= card;  //pushing this card into innerHTML of main

// //calling a function
// getRepos(username);

// }

// //init call
// getUser("thisissahaj")

// const getRepos = async(username) => {
//     //making a constant to call the "repos" div from above
//     const repos = document.querySelector("#repos")

//    const response = await fetch(APIURL + username + "/repos" )
//    const data = await response.json();
   

//    //using a loop to display items one by one
//    data.forEach((item) => {
//      console.log(item)
     
//      const elem = document.createElement("a")                  //we want the item to be in an anchor tag "a" therefore we create an anchor tag in a constant
//      elem.classList.add("repo")                                //adding a class to this constant
//      elem.href = item.html_url                                      //adding href to this constant
//      elem.innerText = item.name                                // adding text to this constant
//      elem.target = "_blank"                                    // to open the element in new tab
//      repos.appendChild(elem)                                   //appending/sending the "elem" constant (anchor tag) to the "repos" constant then to the "repos" div

//     });
//     console.log(data)

//      /*the above whole thing is to create something like this but dynamically
     
//      <a href="#" class="repo" target="_blank">Repo 1</a>
//      <a href="#" class="repo" target="_blank">Repo 2</a>
//      <a href="#" class="repo" target="_blank">Repo 3</a>
//      */
// }


// // making the search feature
// //this function is called in "form" section in index.html
// const formSubmit = () =>
// {   
    
//     if(searchBox.value != "")   //if searchBox's value is not null then perform
//     {
//         getUser(searchBox.value);   // pass the value in the searchBox as the username in getUserr
//         searchBox.value = ""        // after search, make the value of searchBox null
//     }
//     return false; //so that the page doesn't refresh on form submit
// }  

// //Now we want that as the user focuses out of the search bar/ moves cursor out and clicks anywhere, we want to enable searching
// //therefore adding an eventListner to searchBox variable
// searchBox.addEventListener(
//     "focusout",
//     function(){
//         formSubmit()  //calling the function
//     }
// )


const APIURL = 'https://api.github.com/users/';

const leftBox = document.querySelector('.leftBox');
const rightBox = document.querySelector('.rightBox');
const input = document.querySelector('input');
const repositories = document.querySelector('.repositories');

const getUser = async (username) => {
    
    //fetching data
    const response = await fetch(APIURL + username);

    //converting response into json
    const data = await response.json();

    console.log(data);
    
    
    
const leftBoxHtmlData = `

<div class="about">
<div class="profileImg">
<img src= "${data.avatar_url}" alt="avatar">
                </div>
                <h3>${data.name}</h3>
                </div>
            <div class="details">
            <div class="bio ">
                <p>${data.bio}</p>
                </div>
                <div class="followers">
                <p> ${data.followers} Followers</p>
                • 
                <p> ${data.following} Following </p> 
                •
                <p> ${data.public_repos} Repositories </p> 
                
              </div>
              </div>
              
              `

getRepos(username);
leftBox.insertAdjacentHTML("beforeend", leftBoxHtmlData);


} 


const getRepos = async (username) => {

    const response = await fetch(APIURL + username + '/repos');
    const data = await response.json();

    console.log(data);

    data.forEach((curRepo) => {
      
        const repo = document.createElement('a');
        repo.classList.add('repo');
        repo.href = curRepo.svn_url ;
        repo.innerText = curRepo.name;

        repositories.appendChild(repo);

    });
}

input.addEventListener('keyup', (event)=>{
    
    if(event.key == 'Enter')
    {

        if(input.value > 0)
        {
            getUser(input.value);
            
        }
    }
})


getUser('ThisIsSahaj');