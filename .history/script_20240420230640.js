const cards = [
    {
        image: 'https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Random Color',
        description: 'A random color generator',
        projLink: '',
        codeLink: '',
    },
    {
        image: 'https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Github Search',
        description: 'Search for a github profile',
        projLink: '',
        codeLink: '',
    },
    {
        image: 'https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Quiz',
        description: '',
        projLink: '',
        codeLink: '',
    },
    {
        image: 'https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: '',
        description: '',
        projLink: '',
        codeLink: '',
    },
    {
        image: 'https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: '',
        description: '',
        projLink: '',
        codeLink: '',
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