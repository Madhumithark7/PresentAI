function generatePresentation() {
  const output = document.getElementById("output");

  output.innerHTML = `
    <div class="slides">

      <h2>📊 Artificial Intelligence Presentation</h2>

      <div class="slide">
        <h3>Slide 1: What is AI?</h3>
        <p>Artificial Intelligence is the simulation of human intelligence in machines.</p>
      </div>

      <div class="slide">
        <h3>Slide 2: How AI Works</h3>
        <p>AI learns from data using algorithms, patterns, and training models.</p>
      </div>

      <div class="slide">
        <h3>Slide 3: AI in Daily Life</h3>
        <p>Used in YouTube recommendations, Google Maps, Siri, and self-driving cars.</p>
      </div>

      <div class="slide">
        <h3>Slide 4: Advantages & Challenges</h3>
        <p>AI improves productivity but raises concerns like privacy and job changes.</p>
      </div>

      <div class="slide">
        <h3>Slide 5: Future of AI</h3>
        <p>AI will transform education, healthcare, business, and everyday life.</p>
      </div>

    </div>
  `;
}