function generate() {
  let prompt = document.getElementById("prompt").value;

  if (prompt === "") {
    document.getElementById("output").innerText = "Please type something...";
    return;
  }

  document.getElementById("output").innerText =
    "🤖 AI Response: " + prompt;
}
