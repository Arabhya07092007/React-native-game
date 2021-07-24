function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  let display = touches.length + " touches";

  text(
    display + touches[0] + " heres your text",
    windowWidth / 2,
    windowHeight / 2
  );
  textSize(26);
}

// echo "# React-native-game" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Arabhya07092007/React-native-game.git
// git push -u origin main
