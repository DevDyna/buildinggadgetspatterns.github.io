// Function to load the input field and button
document.addEventListener("DOMContentLoaded", () => {
    const baseDiv = document.getElementById("base_div");

    // Create input element
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter text here...";
    input.id = "user_input";
    baseDiv.appendChild(input);

    // Create transform button
    const runbutton = document.createElement("button");
    runbutton.textContent = "Convert";
    runbutton.id = "transform_button";
    baseDiv.appendChild(runbutton);

    // Create error message display
    const errorMessage = document.createElement("p");
    errorMessage.id = "error_message";
    errorMessage.style.color = "red";
    baseDiv.appendChild(errorMessage);

    // Create output display
    const output = document.createElement("p");
    output.id = "output_text";
    baseDiv.appendChild(output);

    // Create copy button
    const copyButton = document.createElement("button");
    copyButton.textContent = "Copy to Clipboard";
    copyButton.id = "copy_button";
    copyButton.style.display = "none";
    baseDiv.appendChild(copyButton);

    // Add event listener to transform button
    runbutton.addEventListener("click", () => {
        const userInput = input.value.trim();
        if (!userInput) {
            errorMessage.textContent = "Error: Input cannot be empty!";
            output.textContent = "";
            copyButton.style.display = "none";
        } else {
            errorMessage.textContent = "";
            const transformedText = transformText(userInput);
            output.textContent = transformedText;
            copyButton.style.display = "block";
        }
    });

    // Add event listener to copy button
    copyButton.addEventListener("click", () => {
        const outputText = document.getElementById("output_text").textContent;
        navigator.clipboard.writeText(outputText).then(() => {
            alert("Text copied to clipboard!");
        }).catch(() => {
            alert("Failed to copy text.");
        });
    });
});

// Function to transform text to small caps
function transformText(text) {
    const mapping = {
        'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ',
        'f': 'ꜰ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'i', 'j': 'ᴊ',
        'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ',
        'p': 'ᴘ', 'q': 'ꞯ', 'r': 'ʀ', 's': 'ꜱ', 't': 'ᴛ',
        'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ'
    };

    return text.toLowerCase().split("").map(char => mapping[char] || char).join("");
}
