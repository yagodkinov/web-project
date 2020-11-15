function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // добавить ноль перед цифрами < 10
    return i;
};

function myfunction(txt) { 
    document.getElementById("demo").innerHTML = txt
    }
$(function() {
        
    $('img').bind("mouseenter", handleMouseEnter)
        .bind("mouseout", handleMouseOut);    
      
    function handleMouseEnter(e) {
        $(this).css({
            "border": "thick solid red",
            "opacity": "0.5"
        });
    };
    
    function handleMouseOut(e) {
        $(this).css({
            "border": "",
            "opacity": ""
        });
    }
    
});

