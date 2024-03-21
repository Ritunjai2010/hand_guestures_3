Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
var prediction_1 = "";
camera = document.getElementById("Camera");
Webcam.attach('#camera');
function takesnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id = 'captured_image' src = '"+data_uri+"'/>'";
    });
}
console.log(ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/d5UnsKXsd/model.json',modelLoaded);
function modelLoaded() 
{
    console.log("model loaded");
}
function speak() 
{
    var synth = window.speechSynthesis;
    speak_data_one = "The first prediction is " + prediction_1;
    var Utterthis = new SpeechSynthesisUtterance(speak_data_one);
    synth.speak(Utterthis)
}
function check()
{
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,result)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        document.getElementById("gestures").innerHTML = result[0].label;
        prediction_1 = result[0].label;
        speak();
        document.getElementById("update_gesture").innerHTML = "";
        if(result[0].label == "Strength")
        {
            document.getElementById("update_gesture").innerHTML = "&#9994;";
        }
        if(result[0].label == "Stop")
        {
            document.getElementById("update_gesture").innerHTML = "&#9995;";
        }
        if(result[0].label == "HI")
        {
            document.getElementById("update_gesture").innerHTML = "&#128400;";
        }
        if(result[0].label == "Victory")
        {
            document.getElementById("update_gesture").innerHTML = "&#9996;";
        }
        if(result[0].label == "Great")
        {
            document.getElementById("update_gesture").innerHTML = "&#128077;";
        }
        if(result[0].label == "Very bad")
        {
            document.getElementById("update_gesture").innerHTML = "&#128078;";
        }
        if(result[0].label == "Swag")
        {
            document.getElementById("update_gesture").innerHTML = "&#129304;";
        }
        if(result[0].label == "Strength")
        {
            document.getElementById("update_gesture").innerHTML = "&#9994;";
        }
        if(result[0].label == "Live, long and pospurous life")
        {
            document.getElementById("update_gesture").innerHTML = "&#128406;";
        }
    }
}



