function detectLie() {
    let text = document.getElementById("textInput").value.toLowerCase();
    let resultBox = document.getElementById("result");

    let suspiciousWords = ["honestly", "trust me", "believe me", "i swear"];
    let score = 0;

    suspiciousWords.forEach(word => {
        if (text.includes(word)) {
            score += 30;
        }
    });

    if (text.length > 100) score += 20;
    if (text.length < 20) score += 10;

    // Final result
    let result = score > 50 ? "⚠️ Lie Likely" : "✅ Truth Likely";
    resultBox.innerText = result + " (" + score + "%)";
}

function resetText() {
    document.getElementById("textInput").value = "";
    document.getElementById("result").innerText = "";
}
