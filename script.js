function generatePresentation() {
  const topic = document.getElementById("topic").value;
  const audience = document.getElementById("audience").value;
  const slides = document.getElementById("slides").value;

  const output = document.getElementById("output");

  if (!topic || !audience || !slides) {
    output.innerHTML = `<p style="color:red;">⚠ Please fill all fields</p>`;
    return;
  }

  let slideContent = "";

  for (let i = 1; i <= slides; i++) {
    if (i == 1) {
      slideContent += `<div class="slide">📌 Slide ${i}: Introduction to ${topic}</div>`;
    } else if (i == slides) {
      slideContent += `<div class="slide">📌 Slide ${i}: Thank You</div>`;
    } else {
      slideContent += `<div class="slide">📌 Slide ${i}: About ${topic} for ${audience}</div>`;
    }
  }

  output.innerHTML = `
    <h2>🎉 Presentation Ready</h2>
    <p><b>Topic:</b> ${topic}</p>
    <p><b>Audience:</b> ${audience}</p>
    <p><b>Slides:</b> ${slides}</p>
    <hr>
    ${slideContent}
  `;
}