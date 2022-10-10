let click = document.getElementById('button');




function checkSpam() {
    let str = document.querySelector('#comment').value;
    let lowerStr = str.toLowerCase();

    if (lowerStr.includes('viagra') || lowerStr.includes('xxx')){
        let fixed1 = lowerStr.replace('viagra','***').replace('xxx','***');
        lowerStr = fixed1;
    };
    

    let outputCheck = `Ваш комментарий: ${lowerStr}`;
    document.querySelector('div').innerText = outputCheck;

}

document.querySelector("#button").addEventListener('click', checkSpam);
