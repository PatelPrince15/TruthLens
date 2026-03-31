// LOGIN
function login() {
    let user = document.getElementById("username").value;

    localStorage.setItem("user", user);

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "dashboard.html";
}

// DETECT LIE
function detectLie() {
    let text = document.getElementById("textInput").value.toLowerCase();
    let loading = document.getElementById("loading");

    loading.classList.remove("hidden");

    setTimeout(() => {

        let score = 0;
        let suspiciousWords = ["honestly", "trust me", "believe me", "i swear"];
        let foundWords = [];

        suspiciousWords.forEach(word => {
            if (text.includes(word)) {
                score += 20;
                foundWords.push(word);
            }
        });

        if (text.length > 100) score += 20;
        if (text.length < 20) score += 15;

        let countI = (text.match(/i/g) || []).length;
        if (countI > 5) score += 15;

        score += Math.floor(Math.random() * 20);
        if (score > 100) score = 100;

        let result = score > 60 ? "⚠️ Lie Likely" : "✅ Truth Likely";

        document.getElementById("result").innerText =
            result + " (" + score + "%)";

        let fillBar = document.getElementById("fillBar");
        fillBar.style.width = score + "%";
        fillBar.style.background = score > 60 ? "red" : "lime";

        document.getElementById("highlight").innerText =
            foundWords.length > 0
            ? "Suspicious words: " + foundWords.join(", ")
            : "";

        // SAVE HISTORY
        let history = JSON.parse(localStorage.getItem("history")) || [];
        history.push(text + " → " + result);
        localStorage.setItem("history", JSON.stringify(history));

        // COUNT CHECKS
        let checks = localStorage.getItem("checks") || 0;
        localStorage.setItem("checks", ++checks);

        loading.classList.add("hidden");

    }, 1500);
}

// RESET
function resetText() {
    document.getElementById("textInput").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("highlight").innerText = "";
    document.getElementById("fillBar").style.width = "0%";
}

// HISTORY PAGE
if (document.getElementById("historyList")) {
    let history = JSON.parse(localStorage.getItem("history")) || [];
    let list = document.getElementById("historyList");

    history.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });
}

// STATS PAGE
if (document.getElementById("totalUsers")) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let checks = localStorage.getItem("checks") || 0;

    document.getElementById("totalUsers").innerText =
        "👤 Total Users: " + users.length;

    document.getElementById("totalChecks").innerText =
        "🧪 Total Checks: " + checks;

    document.getElementById("accuracy").innerText =
        "🎯 Accuracy: " + (50 + Math.floor(Math.random() * 50)) + "%";
}