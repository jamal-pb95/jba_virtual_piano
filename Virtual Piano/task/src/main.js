document.addEventListener("keydown", function (e) {
    if (e.key === "a") playSound(e.key);
    else if (e.key === "s") playSound(e.key);
    else if (e.key === "d") playSound(e.key);
    else if (e.key === "f") playSound(e.key);
    else if (e.key === "g") playSound(e.key);
    else if (e.key === "h") playSound(e.key);
    else if (e.key === "j") playSound(e.key);
    else if (e.key === "w") playBlackSound(e.key);
    else if (e.key === "e") playBlackSound(e.key);
    else if (e.key === "t") playBlackSound(e.key);
    else if (e.key === "y") playBlackSound(e.key);
    else if (e.key === "u") playBlackSound(e.key);
    else console.log(`Wrong key pressed. Your key is '${e.key}'`);
});

function playSound(key) {
    let audio = new Audio(`white_keys/${key.toUpperCase()}.mp3`);
    audio.play();
}

function playBlackSound(key) {
    let audio = new Audio(`black_keys/${key.toUpperCase()}.mp3`);
    audio.play();
}