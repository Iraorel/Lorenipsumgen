//console.dir(document);
//console.dir(wordNum);

/*var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b){
    return a - b;
});
console.log(numbers);

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b){
    return b - a ;
});
console.log(numbers);
*/



const wordNum = document.querySelector('input[name="words"]');

const paradNum = document.querySelector('input[name="paras"]');
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const regex = /([^A-Za-z])/g;
const data = myData.replace(regex,'').toLowerCase();
const myArr = data.split('');
console.log(myArr);
btn.addEventListener('click', buttonClicked);
function buttonClicked(e){
    //console.log(e.target);
    myArr.sort((a, b)=> .5 - Math.random());
    const numParas = Number(paradNum.value);
    const numWords = Number(wordNum.value);
    for(let i=0; i<numParas; i++){
    genParagraphs(numWords);
    }

  console.log(myArr);
    
}
function genParagraphs(num){
    const div = document.createElement('p');
    let temp = ' ';
    let ranWords = Math.floor(Math.random()*10)+2;
    for(let i=0; i<ranWords; i++){
        let w = myArr[Math.floor(Math.random()*myArr.length)];
        temp += `${w}`;
    }
    temp = capWord(temp.trim().toLowerCase());
 
    p.textContent = temp;

    output.append(p);
}

function capWord(str){

    let first = str.charAt(0).toUpperCase();
    let readySentence = first + str.slice(1) + '. ';
    console.log(first );
    return readySentence;
}
/*btn.addEventListener('click', (e)=>{
 console.log(e.target);
 e.target.style.background  = 'blue'
})
 */

window.addEventListener('DOMContentLoaded', (e)=>{
    console.log('DOM ready');
})

