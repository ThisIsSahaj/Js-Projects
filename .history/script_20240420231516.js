const cards = [
    {
        image: 'images/Color.png',
        title: 'Random Color',
        description: 'A random color generator',
        projLink: 'RandomColor/index.html',
        codeLink: 'https://github.com/ThisIsSahaj/Js-Projects/tree/main/RandomColor',
    },
    {
        image: 'images/GitHub.png',
        title: 'Github Search',
        description: 'Search for a github profile',
        projLink: 'GitHubSearch/index.html',
        codeLink: 'https://github.com/ThisIsSahaj/Js-Projects/tree/main/GitHubSearch',
    },
    {
        image: 'images/Quiz.png',
        title: 'Quiz',
        description: 'A basic quiz platform',
        projLink: 'QuizApp/index.html',
        codeLink: 'https://github.com/ThisIsSahaj/Js-Projects/tree/main/QuizApp',
    },
    {
        image: 'images/Paragraph.png',
        title: 'Paragraph Generator',
        description: 'Genrate random dummy paragraph',
        projLink: 'ParagraphGenerator/index.html',
        codeLink: 'https://github.com/ThisIsSahaj/Js-Projects/tree/main/ParagraphGenerator',
    },
    {
        image: 'images/todolist.png',
        title: 'To Do List',
        description: 'A fully functional To-Do list. Create, Delete, Refresh',
        projLink: 'ToDoList/index.html',
        codeLink: 'https://github.com/ThisIsSahaj/Js-Projects/tree/main/ToDoList',
    },
    
]

cards.forEach( (curEle) => {
    
    const container = document.querySelector('.container');

    const htmlData = 
    `
    <div class="nft">
    <div class='main'>
    <a href="${curEle.projLink}">
      <img class='tokenImage' src="${curEle.image}" alt="project image" />
    </a>
      <h2>${curEle.title}</h2>
      <p class='description'>${curEle.description}</p>
      <div class='tokenInfo'>
       <a href="${curEle.projLink}">
           <div class="price">
               
               <p><i class="fa-solid fa-eye"></i> View</p>
            </div>
        </a>
        <a href="${curEle.codeLink}">
            <div class="duration">
                <p><i class="fa-solid fa-code"></i>  Code</p>
            </div>
        </a>
      </div>
      <hr />
      <a href="https://github.com/ThisIsSahaj">
      <div class='creator'>
        <p><ins>Created by</ins> thisissahaj</p>
      </div>
      </a>
    </div>
  </div>
    `
    container.insertAdjacentHTML('afterbegin', htmlData);
});