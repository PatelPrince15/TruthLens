function handleLogin(event) {
  event.preventDefault();
  
  alert("Login successful! Welcome to TruthLens.");

  window.location.href = "history.html";
}

function loadHistory() {
  const list = document.getElementById("historyList");
  if(list) {
    list.innerHTML = "<p>No history available (storage disabled).</p>";
  }
}

function clearHistory() {
  const list = document.getElementById("historyList");
  if(list) {
    list.innerHTML = "<p>No history available (storage disabled).</p>";
  }
}

function loadStats() {
  if(document.getElementById("userCount")) {
    document.getElementById("userCount").innerText = "N/A";
  }
  if(document.getElementById("checkCount")) {
    document.getElementById("checkCount").innerText = "N/A";
  }
  if(document.getElementById("accuracy")) {
    document.getElementById("accuracy").innerText = "Simulated 80%";
  }
}


function logout() {
  alert("You have been logged out.");
  window.location.href = "index.html";
}
