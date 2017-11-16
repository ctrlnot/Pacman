const px = 16; // should be 8x8 tiles
const gameWidth = 28;
const gameHeight = 36;

// global var for directions
const UP = 1;
const RIGHT = 2;
const DOWN = 3;
const LEFT = 4;

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
  for (let j = 0; j < maze.length; j++) {
    for (let i = 0; i < maze[0].length; i++) {
      if (maze[j][i] == 1) walls.push(new Wall(i, j));
    }
  }
}

function draw() {
  background(0);

  // Render all walls
  for(let i = 0; i < walls.length; i++) {
    walls[i].show();
  }

  // Simulate pacman
  pacman.run();
}

function keyPressed() {
  // Arrow key controls
  if (keyCode === UP_ARROW)       pacman.nextDir = UP;
  if (keyCode === RIGHT_ARROW)    pacman.nextDir = RIGHT;
  if (keyCode === DOWN_ARROW)     pacman.nextDir = DOWN;
  if (keyCode === LEFT_ARROW)     pacman.nextDir = LEFT;

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
