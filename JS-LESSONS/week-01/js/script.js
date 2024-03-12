<<<<<<< Updated upstream


let message = 'hello world';
// to get to the console, just type in CMD+OPT+J or CTRL+ALT+J
console.log(message)


$(document).scroll(function(){
    let fromTop = $(document).scrollTop()/10;
    $(".second-hand").css("transform","rotate("+fromTop+"deg)")
})



$(".student").hover(function(){
    if ( ! $(this).hasClass("hovered")) {
        let name = $(this).text();
        let interaction = $(this).attr("data-inter");    
        let newName = name +" - "+interaction;
        $(this)
        .text(newName)
        .addClass("hovered");
    }
    

=======
let message = "hello world";
// to get to the console, type in CTRL+SHIFT+J
console.log(message)

//everything is .something()
// () in function(){} is for passing variables through. if theres nothing its an anonymous function
// $(".student").click(function(){
//     $("body").addClass("blueBG") // .css(key (thing that changes), what to change)
// })


$(".student").hover(function(){
    if ( ! $(this).hasClass("hovered")) { // ! is the opposite 
        let name = $(this).text()
    let interaction = $(this).attr("data-inter")
    let newName = name +" - "+interaction;
    $(this)
    .text(newName)
    .addClass("hovered")
    }

    
>>>>>>> Stashed changes
})






<<<<<<< Updated upstream



$(".student").click(function(){
    
        // $("body").toggleClass("blueBG")//DO THIS
    
    let name = $(this).text()
    

    if (name == "River Carley") {
        $("body").toggleClass("blueBG");
    } else {
        // alert("wait, you're not River. You're "+name)
    }
    
=======
$(".student").click(function(){
    //($("body").toggleClass("blueBG")) 

    let name = $(this).text() // THIS = the original thing it looks for = ".student"
    // alert(name)

    if (name == "River Carley") {
        $("body").toggleClass("blueBG")
        $(".apple").css("display","block")
            } else {
        alert("wait you're not River, you're " + name)
    }
>>>>>>> Stashed changes
})

$(".circle").click(function(){
    $(this).toggleClass('active')
<<<<<<< Updated upstream
=======
})

$(document).scroll(function(){
    let fromTop = $(document).scrollTop()/10
    console.log(fromTop);
    $(".second-hand").css("transform", "rotate("+fromTop+"deg)")
>>>>>>> Stashed changes
})