async function generate() {
  let prompt = document.getElementById("prompt").value;

  let res = await fetch("https://your-api-url.com/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  let data = await res.json();
  document.getElementById("output").innerText = data.result;
}
