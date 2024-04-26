const APIURL = 'https://api.github.com/users/';

const profileSec = document.querySelector('.profileSec');
const rightBox = document.querySelector('.rightBox');
const input = document.querySelector('input');
const repositories = document.querySelector('.repositories');

const getUser = async (username) => {
    
    //fetching data
    const response = await fetch(APIURL + username);

    //converting response into json
    const data = await response.json();

    console.log(data);
    
    
    
const profileSecHtmlData = `

<div class="image">
<img src="${data.avatar_url}" alt="">
</div>
<div class="about">
    <div class="name">${data.name}</div>
    <div class="bio">${data.bio}
    </div>
    
</div>
<div class="followers"> 
    <p> ${data.followers} Followers</p>
    • 
    <p> ${data.following}  Following </p> 
    •
    <p> ${data.public_repos} Repositories </p> </div>
</div>
       
              `

getRepos(username);
// profileSec.insertAdjacentHTML("beforeend",profileSecHtmlData);
profileSec.innerHTML = profileSecHtmlData;
} 


const getRepos = async (username) => {
    repositories.innerHTML = '';

    const response = await fetch(APIURL + username + '/repos');
    const data = await response.json();

    console.log(data);

    data.forEach((curRepo) => {
      
        const repo = document.createElement('a'); //creating anchor tag
        repo.classList.add('repo');     // adding class 
        repo.href = curRepo.svn_url ;   // repo url
        repo.target = '_blank';         // open in new tab
        repo.innerText = curRepo.name;  // repo name

        repositories.appendChild(repo);

    });
}

input.addEventListener('keyup', (event)=>{
    
    if(event.key == 'Enter')
    {

        if(input.value.length > 0)
        {
            console.log(input.value);
            getUser(input.value);
            input.value = "";
            
        }
    }
})


getUser('adrianhajdin');