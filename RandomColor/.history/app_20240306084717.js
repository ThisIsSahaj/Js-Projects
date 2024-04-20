const getColor = () => {

    const randomNumber = Math.floor(Math.random() * 16777215);
    // const randomNumber = Math.floor(Math.random() * 10000000);
    console.log(randomNumber);
    const randomCode = "#" + randomNumber.toString(12);
    console.log(randomCode);
    document.body.style.backgroundColor = randomCode;

    document.getElementById("color-code").innerText = randomCode;
    

    
    const copyButton = document.getElementById("copy");

    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(randomCode);
        console.log('copied');
        alert('Copied to Clipboard');
       
    });
   
};



document.getElementById("btn").addEventListener(
    "click", 
    getColor
)





getColor();