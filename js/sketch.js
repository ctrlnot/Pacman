const px = 16; // should be 8x8 tiles
const gameWidth = 28;
const gameHeight = 36;

let pacman; // pacman object
let walls = []; // walls object

let maze; // global maze file variable
let pause; // global pause variable

// Preload the tile map
function preload() {
  maze = loadStrings('maze.txt');
}

function setup() {
  createCanvas(gameWidth * px, gameHeight * px);
  pacman = new Pacman();

  // Splitting tile map into 2D Array
  for (let i = 0; i < maze.length; i++) {
    maze[i] = maze[i].split("");
  }

  // Set all the walls
  let count = 0;
  for (let j = 0; j < maze.length; j++) {
    for (let i = 0; i < maze[0].length; i++) {
      if (maze[j][i] == 1) walls.push(new Wall(i, j, count++));
    }
  }
}

function draw() {
  background(0);

  // Render all walls
  for(let i = 0; i < walls.length; i++) {
    walls[i].show();
  }

  pacman.show(); // Render pacman
}

function keyPressed() {
  // Arrow key controls
  if (keyCode === UP_ARROW)       pacman.dir = 1;
  if (keyCode === RIGHT_ARROW)    pacman.dir = 2;
  if (keyCode === DOWN_ARROW)     pacman.dir = 3;
  if (keyCode === LEFT_ARROW)     pacman.dir = 4;

  // Pause when spacebar is pressed
  if (key === ' ') {
    if (pause) {
      pause = false;
      noLoop();
    } else {
      pause = true;
      loop();
    }
  }
}
