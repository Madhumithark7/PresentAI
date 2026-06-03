async function generateSlides() {

    let topic = document.getElementById("topic").value;
    let audience = document.getElementById("audience").value;
    let slidesCount = document.getElementById("slidesCount").value;

    if (!topic || !audience || !slidesCount) {
        alert("Please fill all fields");
        return;
    }

    document.getElementById("result").innerHTML = `
        <div class="slide">
            <h2>⏳ Generating Presentation...</h2>
            <p>Please wait while AI creates your presentation.</p>
        </div>
    `;

    try {

        const response = await fetch(
            "http://localhost:3000/generate",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    topic,
                    audience,
                    slidesCount
                })
            }
        );

        const data = await response.json();

        document.getElementById("result").innerHTML = `
            <div class="slide">
                <h2>📑 Generated Presentation</h2>
                <div class="presentation-content">
                    ${data.content.replace(/\n/g, "<br>")}
                </div>
            </div>
        `;

    } catch (error) {

        console.error(error);

        document.getElementById("result").innerHTML = `
            <div class="slide">
                <h2>❌ Error</h2>
                <p>Unable to generate presentation. Please make sure the server is running.</p>
            </div>
        `;
    }
}