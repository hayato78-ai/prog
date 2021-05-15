var number_squares = 6 ;
var colors = generateRandomColors(number_squares);
var squares = document.getElementsByClassName("square") ;
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");


//簡単モードの実装
easyButton.addEventListener("click",function(){
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    number_squares = 3;
    //3つ色を作成
    colors = generateRandomColors(number_squares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none"
        }
    }
});

//難しいモードの実装
hardButton.addEventListener("click",function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    number_squares = 6;
    //6つ色を作成
    colors = generateRandomColors(number_squares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        
            squares[i].style.background = colors[i];
        
            squares[i].style.display = "block"
        
    }
});


//リセットボタンの挙動
resetButton.addEventListener("click", function(){
    //新しく色をつくる
    colors = generateRandomColors(number_squares);
    //配列から色を選ぶ
    pickedColor = pickColor();
    //表示名を指定した色に変える
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Color"

    messageDisplay.textContent = "hhhhhh";
    //四角の中の色を全部変える
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#steelblue"
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
   // 四角に色をつける
    squares[i].style.backgroundColor = colors[i];
    //クリック動作をつける
    squares[i].addEventListener("click", function(){
        //正解の色をクリックするとその色になる
        var clickedColor = this.style.backgroundColor;
        //クリックしたものと比べる
        console.log(clickedColor, pickedColor);
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "正解！";
            resetButton.textContent = "もう一回"
            changecolors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "違うよ！";
        }
    });
}

function changecolors(color){
    //全部の色を変える
    for (var i = 0; i < squares.length; i++){
        //色を変える
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}
function generateRandomColors(num){
    var arr = []

    for(var i = 0; i < num; i ++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    
    var r = Math.floor(Math.random() * 256) ;
    var g = Math.floor(Math.random() * 256) ;
    var b = Math.floor(Math.random() * 256) ;
    return "rgb(" +r+ ", " +g+ ", " +b+ ")";
}

console.log(hardButton.classList.add("selected"));