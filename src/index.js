function generatePoem(event) {
    event.preventDefault();

    let poemElement = document.querySelector("#poem");
    
    new Typewriter(`#poem`, {
    strings: [`Lord, 
        when you send the rain
        think about it, please,
        a little?
        <br />
Do
        not get carried away
        by the sound of falling water,
        the marvelous light
        on the falling water.
        <br />
    I
        am beneath that water.
        It falls with great force
        and the light
        <br />
Blinds
        me to the light.
        <br />

        (Untitled by James Bladwin) `],
    autoStart: true,
    delay: 1,
    cursor: "",
});
    
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);