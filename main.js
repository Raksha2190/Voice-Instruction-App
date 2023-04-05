

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {
console.log(event);


var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
      /* Starts here */
 
/* In Chrome Browser */
      if(Content =="take my selfie")  /* If browser is edge if(Content=="Take my selfie.")  */
      {
        console.log("Taking selfie --- ");
        speak();
      }

         /* Ends here */
}


function speak(){
    var synth = window.speechSynthesis;
 /* Starts here */
    speak_data = "Taking your Selfie in 5 seconds";
/* Ends here */
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    Webcam.attach(camera);
/* Starts here */
    setTimeout(function()   // For delay
    { 
        take_snapshot(); 
        save();
    }, 5000);   // 5000 milliseconds, 1000 ms = 1 sec

/* Ends here */
}

 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});


/* Starts here */
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();   // to automatically download the image
}
/* Ends here */