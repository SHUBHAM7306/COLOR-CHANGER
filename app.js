function randomColorGenerator(){
    let hexColor = "#";
    let hexValues = "1234567891011abcdefgh";
    for (let i = 0; i < 6; i++){
        let randNum = Math.floor((Math.random() * 10));
        hexColor += hexValues[randNum];
    }
    return hexColor;
}

let btn = document.getElementById("button");
btn.addEventListener("click", ()=>{
    document.getElementById("canvas").style.backgroundColor = randomColorGenerator();
})