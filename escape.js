let result = document.getElementsByClassName('result');
let code = document.getElementsByClassName('code');
for(let i=0;i<result.length;i++){
    let resulttext = result[i].innerHTML;

    while(resulttext.includes('<') || resulttext.includes('>')){
        resulttext = resulttext.replace('<', "&lt;");
        resulttext = resulttext.replace('>', "&gt;");
    }
    code[i].innerHTML = resulttext;
}