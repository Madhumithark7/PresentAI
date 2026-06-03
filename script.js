function generatePresentation() {

    const topic = document.getElementById("topic").value;
    const audience = document.getElementById("audience").value;
    const slides = document.getElementById("slides").value;

    const result = document.getElementById("result");

    if (!topic || !audience || !slides) {
        result.innerHTML = `
            <div class="slide">⚠ Please fill all fields</div>
        `;
        return;
    }

    let output = "";

    for (let i = 1; i <= slides; i++) {

        if (i == 1) {
            output += `
                <div class="slide">
                    📌 Slide ${i}: Introduction to ${topic}
                </div>
            `;
        }

        else if (i == slides) {
            output += `
                <div class="slide">
                    📌 Slide ${i}: Thank You 🎉
                </div>
            `;
        }

        else {
            output += `
                <div class="slide">
                    📌 Slide ${i}: ${topic} for ${audience}
                </div>
            `;
        }
    }

    result.innerHTML = output;
}