const cards = [
    {
        image: 'assets/images/color.png',
        title: 'Random Color',
        description: 'A random color generator',
        projLink: 'RandomColor/index.html',
        codeLink: 'https://github.com/ThisIsSahaj/Js-Projects/tree/main/RandomColor',
    },
    {
        image: 'assets/images/quiz.png',
        title: 'Quiz',
        description: 'A basic quiz platform',
        projLink: 'QuizApp/index.html',
        codeLink: 'https://github.com/ThisIsSahaj/Js-Projects/tree/main/QuizApp',
    },
    {
        image: 'assets/images/paragraph.png',
        title: 'Paragraph Generator',
        description: 'Generate random dummy paragraphs',
        projLink: 'ParagraphGenerator/index.html',
        codeLink: 'https://github.com/ThisIsSahaj/Js-Projects/tree/main/ParagraphGenerator',
    },
    {
        image: 'assets/images/texttospeech.png',
        title: 'Text to Speech Converter',
        description: 'Convert any text to Speech, with a range of voices to select from',
        projLink: 'TextToSpeech/index.html',
        codeLink: 'https://github.com/ThisIsSahaj/Js-Projects/tree/main/TextToSpeech',
    },
    {
        image: 'assets/images/github.png',
        title: 'Github Search',
        description: 'Search for a github profile',
        projLink: 'GitHubSearch/index.html',
        codeLink: 'https://github.com/ThisIsSahaj/Js-Projects/tree/main/GitHubSearch',
    },

    {
        image: 'assets/images/calculator.png',
        title: 'Basic Calculator',
        description: 'A simple calculator',
        projLink: 'Calculator/index.html',
        codeLink: 'https://github.com/ThisIsSahaj/Js-Projects/tree/main/Calculator',
    },
    {
        image: 'assets/images/tictactoe.png',
        title: 'Tic Tac Toe',
        description: 'An easy Tic Tac Toe game',
        projLink: 'TicTacToe/index.html',
        codeLink: 'https://github.com/ThisIsSahaj/Js-Projects/tree/main/TicTacToe',
    },
    {
        image: 'assets/images/qrcode.png',
        title: 'QR Code Generator',
        description: 'Generate a QR Code for a Text or URL',
        projLink: 'QRcodeGen/index.html',
        codeLink: 'https://github.com/ThisIsSahaj/Js-Projects/tree/main/QRcodeGen',
    },
    {
        image: 'assets/images/todolist.png',
        title: 'To Do List',
        description: 'Create, Delete, Refresh',
        projLink: 'ToDoList/index.html',
        codeLink: 'https://github.com/ThisIsSahaj/Js-Projects/tree/main/ToDoList',
    },
    {
        image: 'assets/images/password.png',
        title: 'Strong Password Generator',
        description: 'Generate a strong random password',
        projLink: 'PasswordGenerator/index.html',
        codeLink: 'https://github.com/ThisIsSahaj/Js-Projects/tree/main/PasswordGenerator',
    },
    {
        image: 'assets/images/urlshortner.png',
        title: 'URL Shortner',
        description: 'Shorten your long URL',
        projLink: 'URLshortner/index.html',
        codeLink: 'https://github.com/ThisIsSahaj/Js-Projects/tree/main/URLshortner',
    },
    
    
    
    
]

cards.forEach( (curEle) => {
    
    const container = document.querySelector('.container');

    const htmlData = 
    `
    <div class="card">
    <div class='main'>
    <div class='projImage'>
    <a href="${curEle.projLink}" target="_blank">
    <img  src="${curEle.image}" alt="project image" />
    </a>
    </div>
      <h2>${curEle.title}</h2>
      <p class='description'>${curEle.description}</p>
      <div class='projInfo'>
       <a href="${curEle.projLink}" target="_blank">
           <div class="viewProj">
               
               <p><i class="fa-solid fa-eye"></i> View</p>
            </div>
        </a>
        <a href="${curEle.codeLink}" target="_blank">
            <div class="projCode">
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