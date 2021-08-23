var canvas = new fabric.Canvas('myCanvas');
var bday_object = "";
 var x= document.getElementById("myAudio");

function new_image()
{

    fabric.Image.fromURL("BirthdayImage.jpg", function(Img) { 
        bday_object = Img;
        
        bday_object.scaleToWidth(700);
        bday_object.scaleToHeight(510);
        bday_object.set({
        top:0,
        left:0
        });
        canvas.add(bday_object);
        
        });
	
}

function playSound(){
	x.play();
}
