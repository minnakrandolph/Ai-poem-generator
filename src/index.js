// display generated poem
function displayPoem(response) {
new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
        
    }

function generatePoem(event) {
    event.preventDefault();
// build the Api URL
    let poemElement = document.querySelector("#poem");

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "2e3dto1e48d1a435aab54b3f664a20b0";
    let prompt = `Generate a poem about ${instructionsInput.value}`;
    let context = "You are an expert in rythmic contemporary style prose. Please make sure to follow user instructions. Peace, and thank you! :)";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
   
    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Prompt: ${context}`);
   
    // Make a call to the APi using axios
    axios.get(apiUrl).then(displayPoem);
}

   

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);