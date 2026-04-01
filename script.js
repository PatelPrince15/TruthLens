function handleLogin(event) {
  event.preventDefault();
  
  alert("Login successful! Welcome to TruthLens.");

  window.location.href = "dashboard.html";
}

function loadHistory() {
  const list = document.getElementById("historyList");
  if(list) {
    list.innerHTML = "<p>No history available.</p>";
  }
}

function clearHistory() {
  const list = document.getElementById("historyList");
  if(list) {
    list.innerHTML = "<p>No history available.</p>";
  }
}

function logout() {
  alert("You have been logged out.");
  window.location.href = "index.html";
}
