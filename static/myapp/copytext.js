function getSelectionText(){
    var selectedText = ""
    if (window.getSelection){ // all modern browsers and IE9+
        selectedText = window.getSelection().toString()
    }
    return selectedText
}


function copySelectionText(){
    var copysuccess // var to check whether execCommand successfully executed
    try{
        copysuccess = navigator.clipboard.writeText(el.value)
    } catch(e){
        copysuccess = false
    }
    return copysuccess
}
var el = document.getElementById('copied');

document.body.addEventListener('mouseup', function(){
    var selected = getSelectionText() // call <a href="#getselectiontext">getSelectionText()</a> to see what was selected
    if (selected.length > 0){ // if selected text length is greater than 0
        var copysuccess = copySelectionText() // copy user selected text to clipboard
    }
}, false)