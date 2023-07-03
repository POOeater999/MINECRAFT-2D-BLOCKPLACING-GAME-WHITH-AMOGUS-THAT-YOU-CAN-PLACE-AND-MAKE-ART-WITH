// Create the reference variable of the canvas using fabric.Canvas()

var canvas = new fabric.Canvas("myCanvas");



// Define the starting width and height of the block images

block_image_width = 30;
block_image_height = 30;

// Define the starting x and y coordinates for the player

player_x = 10 ;
player_y = 10 ;

// Define a variable named player_object to store object of the player image

var player_object = "" ;

// Add a function named player_update() to add the player image

function player_update() {
    fabric.Image.fromURL("player.png",function (Img){

        player_object = Img;
        player_object.scaleToWidth(150) ;
        player_object.scaleToHeight(140) ;
        player_object.set({
            top:player_y,
            left:player_x 
        }) ;
        canvas.add(player_object) ;
    }) ;
}






// Add a function named new_image() to add the different images as per the specific keys pressed

function new_image(get_image) {
    fabric.Image.fromURL(get_image,function (Img){

        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width) ;
        block_image_object.scaleToHeight(block_image_height) ;
        block_image_object.set({
            top:player_y,
            left:player_x 
        }) ;
        canvas.add(block_image_object) ;
    }) ;
    

}

window.addEventListener("keydown",my_keydown) ;

function my_keydown(e) {

    keyPressed = e.keyCode ;
    console.log(keyPressed) ;

    if (e.shiftKey == true && keyPressed == "187") {
        block_image_width = block_image_width + 10 ;
        block_image_height = block_image_height + 10 ;
        document.getElementById("current_width").innerHTML = block_image_width ;
        document.getElementById("current_height").innerHTML = block_image_height ;
        console.log("shift and = are pressed together")

    }

    if (e.shiftKey == true && keyPressed == "189") {
        block_image_width = block_image_width - 10 ;
        block_image_height = block_image_height - 10 ;
        document.getElementById("current_width").innerHTML = block_image_width ;
        document.getElementById("current_height").innerHTML = block_image_height ;
        console.log("shift and - are pressed together")

    }

    if (keyPressed == "38") {
      up() ;
      console.log("up") ;
    }

    if (keyPressed == "40") {
        down() ;
        console.log("down") ;
      }

      if (keyPressed == "37") {
        left() ;
        console.log("left") ;
      }

      if (keyPressed == "39") {
        right() ;
        console.log("right") ;
      }

    if (keyPressed == "67") {
        new_image("cloud.jpg") ;
        console.log("C/cloud") ;
    }

    if (keyPressed == "68") {
        new_image("dark_green.png") ;
        console.log("D/dark green") ;

    }

    if (keyPressed == "71") {
        new_image("ground.png") ;
        console.log("G/ground") ;
    }

    if (keyPressed == "76") {
        new_image("light_green.png") ;
        console.log("L/light green block") ;
    }

    if (keyPressed == "71") {
        new_image("ground.png") ;
        console.log("G/ground") ;
    }

    if (keyPressed == "82") {
        new_image("roof.jpg") ;
        console.log("R/roof") ;
    }

    if (keyPressed == "84") {
        new_image("trunk.jpg") ;
        console.log("T/trunk") ;
    }
    if (keyPressed == "85") {
        new_image("unique.png") ;
        console.log("U/unique") ;
    }

    if (keyPressed == "87") {
        new_image("wall.jpg") ;
        console.log("W/wall") ;
    }

    if (keyPressed == "89") {
        new_image("yellow_wall.png") ;
        console.log("Y/yellow wall") ;
    }

    if (keyPressed == "65") {
        new_image("amogus.png") ;
        console.log("A/amogus") ;
    }
}
 
function up() {
if (player_y >= 0) {
    player_y = player_y - block_image_width ;
    console.log("block_image_height = " + block_image_height);
    console.log("When up arrow key is pressed, X = " + player_x + ", Y = " + player_y) ;
    canvas.remove(player_object) ;
    player_update() ;
}
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_image_width ;
        console.log("block_image_height = " + block_image_height);
        console.log("When down arrow key is pressed, X = " + player_x + ", Y = " + player_y) ;
        canvas.remove(player_object) ;
        player_update() ;
    }
    }

    function left() {
        if (player_x >= 0) {
            player_x = player_x - block_image_width ;
            console.log("block_image_height = " + block_image_height);
            console.log("When left arrow key is pressed, X = " + player_x + ", Y = " + player_y) ;
            canvas.remove(player_object) ;
            player_update() ;
        }
        }

        function right() {
            if (player_x <= 900) {
                player_x = player_x + block_image_width ;
                console.log("block_image_height = " + block_image_height);
                console.log("When right arrow key is pressed, X = " + player_x + ", Y = " + player_y) ;
                canvas.remove(player_object) ;
                player_update() ;
            }
            }
