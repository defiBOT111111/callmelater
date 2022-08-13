let note = document.getElementById('copied');
let interval;
let clip = [];
let prevClipText;

function pasteText(){
    document.addEventListener("copy", function (e) {
        navigator.clipboard.readText().then(
              clipText => document.querySelector(".cliptext").innerText = clipText
    )
      })
}



function readText(){
    setInterval(() => {
        document.addEventListener("copy", function (e) {
            navigator.clipboard.readText().then((text)=>{
                sessionStorage.setItem('texts', text);
                var copiedText = sessionStorage.getItem('texts')
                note.innerHTML += `<p>${copiedText}</p>`
                sessionStorage.clear()
                
        })
        })
    },500)}
    // sessionStorage.clear();
    // document.addEventListener("copy", function (e) {
    //     navigator.clipboard.readText().then((text) => {
    //         console.log(text);
    //         // clip.push(text);
        
    //         sessionStorage.setItem('texts', text);
    //         setTimeout(pasteText(),1)

    //     });
    //         });
    // };

// function pasteText(){
//     var copiedText = sessionStorage.getItem('texts')
//     // for(let i = 0; i < clip.length; i++){
//     note.innerHTML += `<p>${copiedText}</p>`
//     sessionStorage.clear()
// // }
// }
