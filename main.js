Webcam.set({
    width: 350,
    height:300,
    dest_width: 360,
    dest_height:290,
    image_format:'png',
    png_quality:90 

})
camera = document.getElementById("camera")

Webcam.attach('#camera')

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    })
}
console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier("", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded")
}
function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "The prediction is"+prediction_1
   
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak (utterThis)
}