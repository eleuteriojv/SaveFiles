$(".btn").click(function(){
    var link = $(".link").val();
    var format = $(".format").children("option:selected").val();
    var src = "" + link + "" + format + "";
    download(link, format)
});

function download(link, format){
    $(".button-container").html('<iframe style="height="20px" border:none; overflow: hidden;" src="https://loader.to/api/button/?url='+ link + '&f=' + format + '"><iframe>')
}