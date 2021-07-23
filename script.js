const txtElement = ['Freelancer', 'IT Operation', 'Desain Grafis', 'Photografer', ];
let count= 0;
let textIndex= 0;
let currentTxt= '';
let words= '';

(function ngetik(){

    if(count ==txtElement.length){
        count= 0;
    }
    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++textIndex);
    console.log(words);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        textIndex = 0;
    }
    setTimeout(ngetik,500);
} )();