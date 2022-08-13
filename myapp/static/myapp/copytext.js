function getSelectionText(){
    var selectedText = ""
    if (window.getSelection){ // all modern browsers and IE9+
        selectedText = window.getSelection().toString()
    }
    return selectedText
}


function copySelectionText(elem){
    var copysuccess 
    try{
        copysuccess = navigator.clipboard.writeText(elem)
    } catch(elem){
        copysuccess = false
    }
    return copysuccess
}



document.body.addEventListener('mouseup', function(){
    var selected = getSelectionText()// call <a href="#getselectiontext">getSelectionText()</a> to see what was selected
    if (selected.length > 0){ // if selected text length is greater than 0
        var copysuccess =  copySelectionText(selected) // copy user selected text to clipboard
            navigator.clipboard.readText().then(
            clipText => document.querySelector(".cliptext").innerText = clipText);
    }
    }, false)