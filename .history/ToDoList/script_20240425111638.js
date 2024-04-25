const input = document.querySelector('#todoInput');
const todoBox = document.querySelector('.todoBox');
const inputDate = document.querySelector('#inputDate');



const saveDateLS = () => {
    localStorage.setItem('date', inputDate.value)
}

inputDate.addEventListener('change', saveDateLS);


// ✅ LOCAL STORAGE 
const updateLS = () => {
    const taskValue = document.querySelectorAll('li');

    const tasks = [];
    
    taskValue.forEach((curEle) => {
        return tasks.push(curEle.textContent.trim());
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('date', JSON.stringify(inputDate.value));

}






// ✅ ADD TASK
const addTask = (text) => {
    const task = document.createElement('li');

    const htmlData = 
        ` <p>${text}</p> 
         
          <i class="delete fa-regular fa-circle-xmark"></i> `
    task.insertAdjacentHTML('afterbegin', htmlData);
    todoBox.appendChild(task);
    

    // ✅ DELETE TASK
    const deleteBtn = task.querySelector('i');
    deleteBtn.addEventListener('click', ()=>{
    task.remove(); 
    updateLS();
    })


    // ✅ Mark a task DONE/UNDONE 
    task.addEventListener('click', ()=>{
        task.classList.toggle('done');
    })
}





// ✅ GET THE INPUT
input.addEventListener('keyup', (event)=>{
            
    // to know which key is being pressed
   // console.log(event.key); 
  
  if (event.key == 'Enter') {
      
    // to get the value written in input
    // console.log(input.value);  
      
    if (input.value.length > 0 ) {
        
        addTask(input.value);
        updateLS();
        
        //to clear the value written in input after ENTER
        input.value = "";          
    }


    //show class error if no input
    else{
        input.classList.add('error');

        setTimeout(() => {
         input.classList.remove('error');
        }, 1000);
    }

    }
})






// ✅ GETTING DATA BACK FROM LOCAL SOTRAGE
const taskAvailable = JSON.parse(localStorage.getItem('tasks'));

if(taskAvailable)
{
    taskAvailable.forEach((curTask) => 
    {
        addTask(curTask);
    })};
    
    