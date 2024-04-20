const getColor = () => {

    const randomNumber = Math.floor(Math.random() * 16777215);
    // const randomNumber = Math.floor(Math.random() * 10000000);
    console.log(randomNumber);
    const randomCode = "#" + randomNumber.toString(16);
    console.log(randomCode);
    document.body.style.backgroundColor = randomCode;

    document.getElementById("color-code").innerText = randomCode;
    

    
    const copyButton = document.getElementById("copy");

    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(randomCode);
        console.log('copied');
        alert('Copied to Clipboard');
        // $('.alert').removeClass("hide");
        // $('.alert').addClass("show");
        // setTimeout(function(){
        //     $('.alert').addClass("hide");
        //     $('.alert').removeClass("show");
        // },3000);

        // .then(() => {
        //     window.alert("Copied to Clipboard!");
        // })
        // .catch((error) => {
        //     console.error("Sorry, Unable to copy to clipboard: " + error);
        // });
       
    });
    // const closeButton = document.getElementById("close");

    // closeButton.addEventListener("click", () => {
    //     $('.alert').addClass("hide");
    //     $('.alert').removeClass("show");
    // });
};



document.getElementById("btn").addEventListener(
    "click", 
    getColor
)





getColor();