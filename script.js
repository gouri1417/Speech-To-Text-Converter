function speechToTextConversion() {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.lang = 'en-IN';
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    var diagnostic = document.getElementById('text');
    var isRecording = false;

    document.getElementById("micButton").onclick = function () {
        if (!isRecording) {
            document.getElementById("micButton").textContent = "Stop Recording";
            recognition.start();
            isRecording = true;
        } else {
            document.getElementById("micButton").textContent = "Start Recording";
            recognition.stop();
            isRecording = false;
        }
    }

    recognition.onresult = function (event) {
        var last = event.results.length - 1;
        var convertedText = event.results[last][0].transcript;
        diagnostic.value = convertedText;
        console.log('Confidence: ' + event.results[0][0].confidence);
    }

    recognition.onnomatch = function (event) {
        diagnostic.value = "I didn't recognize that.";
    }

    recognition.onerror = function (event) {
        diagnostic.value = 'Error occurred in recognition: ' + event.error;
    }
}

speechToTextConversion();
