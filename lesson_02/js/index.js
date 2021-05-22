$("main").fadeIn(1000);

//Saveボタンの挙動
$("#save").on("click",function(){
    const key = $("#key").val();
    const value = $("#memo").val();
    localStorage.setItem(key,value);
    const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>';
    $("#list").append(html);
});

//clearボタンの挙動
$("#clear").on("click",function(){
    localStorage.clear();
    $("#list").empty();
});

//ページ読み込み
for(let i=0; i<localStorage.length; i++){
    const key   = localStorage.key(i);
    const value = localStorage.getItem(key);
    const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>';
    $("#list").append(html);
}