console.log("Your index.js file is loaded correctly!");

$("#button").hover(function(){
    $(this).css("background-color", "black");
}, function(){
    $(this).css("background-color", "white");
});