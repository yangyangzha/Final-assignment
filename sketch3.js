let colors = []; // Array to hold color values
let deviations = []; // Array to hold deviation values
let coordinates = []; // Array to store circle positions
// Dimensions for the canvas
let size = 1000; // Canvas size
let radius = size * 0.27; // Circle radius based on canvas size

function setup() {
  // Set up the 1000px by 1000px drawing canvas
  createCanvas(size, size);
  // Populate the color array with 500 random colors
  for (let i = 0; i < 500; i++) {
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    // Store the RGB color values into the colors array
    colors.push([r, g, b]);
    // Store random deviation values in the deviations array
    deviations.push(random(-6, 6));
  }
  // Calculate and store positions for each circle
  for (let i = 0; i < 6; i++) {
    // Alternate offset for even and odd rows
    let diff = i % 2 === 0 ? 0 : radius / 2;
    for (let j = 0; j < 6; j++) {
      // Populate the coordinates array with staggered circle positions
      coordinates.push([radius * j + j * 20 + diff, radius * i - i * 10]);
    }
  }
}

function draw() {
  // Adjust the canvas orientation and position
  rotate(-PI / 11);
  translate(-350, -100);
  // Paint the canvas with a dark blue shade
  background(3, 79, 120);
  // Render each circle at its respective coordinates
  for (let i = 0; i < coordinates.length; i++) {
    drawCircle(coordinates[i][0], coordinates[i][1], i);
  }
}

/*
* Function to render a single circle
* x: X-axis coordinate
* y: Y-axis coordinate
* index: Position in the array for the current circle
*/
function drawCircle(x, y, index) {
  push(); // Isolate transformations and style settings
  // Draw the main circle with no stroke and filled with color from the array
  stroke(0, 0, 0, 0);
  fill(colors[index * 10]);
  circle(x, y, radius);
  // Draw the central circle
  fill(colors[index * 10 + 1]);
  circle(x, y, 20);
  // Create concentric rings around the central circle
  for (let i = 0; i < 8; i++) {
    fill(0, 0, 0, 0);
    stroke(colors[index * 10 + i + 1]);
    strokeWeight(10);
    ellipse(x, y, (i + 1) * 15 + deviations[i], (i + 1) * 15 + deviations[i + 1])
  }
  translate(x, y);
  // At every fourth circle, add a sawtooth pattern
  if (index % 4 === 0) {
    circleLine(colors[index * 10 + 10]);
  } else {
    // Otherwise, draw a dotted circle
    for (let i = 0; i < 4; i++) {
      stroke(colors[index * 10 + 10]);
      dashedCircle(75 + i * (radius - 180) / 5, 2, 4);
    }
  }
  // Add a petal-like feature at every alternate circle
  if (index % 2 === 0) {
    rotate(Math.PI * 2 / 30 * index);
    drawPetal(150);
  }
  pop(); // Restore original state
}

/*
* Function to draw a circle with dashed lines
* radius: The radius of the dashed circle
* dashWidth: The width of the dashes
* dashSpacing: The gap between dashes
*/
function dashedCircle(radius, dashWidth, dashSpacing) {
  // Total number of dashes
  let steps = 200;
  let dashPeriod = dashWidth + dashSpacing;
  let lastDashed = false;
  // Iterate over each step to draw the dashed line
  for(let i = 0; i < steps; i++) {
    // Toggle between beginning and ending shape for dashes
    let curDashed = (i % dashPeriod) < dashWidth;
    if(curDashed && !lastDashed) {
      beginShape();
    }
    if(!curDashed && lastDashed) {
      endShape();
    }
    // Add vertices for the dashes
    if(curDashed) {
      let theta = map(i, 0, steps, 0, TWO_PI);
      vertex(cos(theta) * radius, sin(theta) * radius);
    }
    lastDashed = curDashed;
  }
  // Close the final dash if needed
  if(lastDashed) {
    endShape();
  }
}

/*
* Function to draw zigzag lines around a circle
* color: The color used for the zigzag line
*/
function circleLine(color) {
  stroke(color);
  strokeWeight(3);
  // Start points for the small and large zigzag circles
  let smallCirclePoints = [[65, 0]];
  let largeCirclePoints = [[132, 0]];
  let angle = Math.PI * 2 / 30;
  // Create points for the inner zigzag circle
  for (let i = 0; i <= 30; i++) {
    smallCirclePoints.push([65 * cos(angle * i), 65 * sin(angle * i)]);
  }
  // Create points for the outer zigzag circle
  for (let i = 0; i <= 30; i++) {
    largeCirclePoints.push([132 * cos(angle * i), 132 * sin(angle * i)]);
  }
  // Connect the points to create a zigzag pattern
  for (let i = 0; i < 31; i++) {
    line(smallCirclePoints[i][0], smallCirclePoints[i][1], largeCirclePoints[i][0], largeCirclePoints[i][1]);
    line(largeCirclePoints[i][0], largeCirclePoints[i][1], smallCirclePoints[i + 1][0], smallCirclePoints[i + 1][1]);
  }
}

/*
* Function to render the petal-like designs within the circle
* currentRadius: Defines the size of the petal feature
*/
function drawPetal(currentRadius) {
  const ratio = 3; // Ratio to control the bezier curve handles
  // Draw the first bezier petal shape
  stroke(234, 85, 126);
  strokeWeight(10);
  noFill();
  bezier(0, 0, -currentRadius / ratio, currentRadius, currentRadius / ratio, currentRadius, currentRadius / ratio, currentRadius);
  // Rotate and draw the second bezier petal shape
  rotate(Math.PI * 2 / 90);
  stroke(236, 65, 87);
  bezier(0, 0, -currentRadius / ratio, currentRadius, currentRadius / ratio, currentRadius, currentRadius / ratio, currentRadius);
}


function drawCircle(x, y, index) {
  push(); // Start a new drawing state
  translate(x, y); // Move to the position of the circle

  // Calculate an angle using Perlin noise for a smooth rotational effect
  let noiseFactor = frameCount * 0.01 + index * 0.1; // Create a unique noise factor for each circle
  let angle = noise(noiseFactor) * TWO_PI; // Map the noise value to a full rotation
  rotate(angle); // Apply the rotation

  // Calculate a scaling factor using Perlin noise for a pulsing effect
  let scaleNoiseFactor = frameCount * 0.01 + index * 0.05; // Slightly different factor for variation
  let scaleSize = noise(scaleNoiseFactor) * 0.5 + 0.75; // Oscillates between 0.75 and 1.25
  scale(scaleSize); // Apply the scaling to make the circle grow and shrink over time

  // Draw the main circle
  noStroke();
  fill(colors[index * 10]);
  circle(0, 0, radius);

  // Draw the inner circle
  fill(colors[index * 10 + 1]);
  circle(0, 0, 20);

  // Draw the concentric circles with deviations
  for (let i = 0; i < 8; i++) {
    noFill();
    stroke(colors[index * 10 + i + 2]);
    strokeWeight(10);
    ellipse(0, 0, (i + 1) * 15 + deviations[i], (i + 1) * 15 + deviations[i + 1]);
  }

  // Draw additional decorations depending on the index
  if (index % 4 === 0) {
    circleLine(colors[index * 10 + 10]);
  } else {
    for (let i = 0; i < 4; i++) {
      stroke(colors[index * 10 + 10]);
      dashedCircle(75 + i * (radius - 180) / 5, 2, 4);
    }
  }

  // Only draw the petal on every second circle, and add the rolling effect
  if (index % 2 === 0) {
    let petalNoiseFactor = frameCount * 0.02 + index * 0.1; // Unique noise factor for petal rotation
    let petalAngle = noise(petalNoiseFactor) * TWO_PI; // Map the noise value to a full rotation
    drawPetal(150, petalAngle);
  }

  pop(); // Restore the original state so the rotation and scaling doesn't affect other drawings
}




// ... Existing setup ...

// Adjust setup and draw functions if necessary

function draw() {
  // Adjust the canvas orientation and position
  rotate(-PI / 11);
  translate(-350, -100);
  
  // Using Perlin noise for the background color to make it slowly change over time
  let bgR = noise(frameCount * 0.01) * 255;
  let bgG = noise(1000 + frameCount * 0.01) * 255;
  let bgB = noise(2000 + frameCount * 0.01) * 255;
  background(bgR, bgG, bgB);
  
  // Render each circle at its respective coordinates with Perlin noise influence
  for (let i = 0; i < coordinates.length; i++) {
    // Calculate a Perlin noise-based offset for circle positions
    let xOffset = noise(i * 0.1, frameCount * 0.01) * 20 - 10;
    let yOffset = noise(100 + i * 0.1, frameCount * 0.01) * 20 - 10;
    
    drawCircle(coordinates[i][0] + xOffset, coordinates[i][1] + yOffset, i);
  }
}

// ... drawCircle and other functions ...

// Revise the drawPetal function to make petals roll using Perlin noise
function drawPetal(currentRadius, index) {
  const ratio = 3;
  // Control the petal movement using Perlin noise
  let noiseFactor = noise(index * 0.1, frameCount * 0.01) * 2 - 1; // Range from -1 to 1
  
  // Petal colors also change with Perlin noise
  let petalR = noise(3000 + index * 0.1, frameCount * 0.01) * 255;
  let petalG = noise(4000 + index * 0.1, frameCount * 0.01) * 255;
  let petalB = noise(5000 + index * 0.1, frameCount * 0.01) * 255;
  
  // First petal
  stroke(petalR, petalG, petalB);
  strokeWeight(10);
  noFill();
  bezier(0, 0,
         -currentRadius / ratio, currentRadius * noiseFactor,
         currentRadius / ratio, currentRadius * noiseFactor,
         0, currentRadius);
  
  // Rotate for variety
  rotate(PI / 10);
  
  // Second petal
  noiseFactor = noise(index * 0.1 + 5, frameCount * 0.01) * 2 - 1;
  stroke(petalR, petalG, petalB);
  bezier(0, 0,
         -currentRadius / ratio, currentRadius * noiseFactor,
         currentRadius / ratio, currentRadius * noiseFactor,
         0, currentRadius);
}

function drawCircle(x, y, index) {
  push(); // Start a new drawing state
  translate(x, y); // Move to the position of the circle

  // Calculate an angle using Perlin noise for a smooth rotational effect
  let noiseFactor = frameCount * 0.01 + index * 0.1; // Create a unique noise factor for each circle
  let angle = noise(noiseFactor) * TWO_PI; // Map the noise value to a full rotation
  rotate(angle); // Apply the rotation

  // Calculate a scaling factor using Perlin noise for a pulsing effect
  let scaleNoiseFactor = frameCount * 0.01 + index * 0.05; // Slightly different factor for variation
  let scaleSize = noise(scaleNoiseFactor) * 0.5 + 0.75; // Oscillates between 0.75 and 1.25
  scale(scaleSize); // Apply the scaling to make the circle grow and shrink over time

  // Perlin noise to the colors of the circles
  let r = noise(frameCount * 0.01 + index) * 255;
  let g = noise(1000 + frameCount * 0.01 + index) * 255;
  let b = noise(2000 + frameCount * 0.01 + index) * 255;

  // Draw the main circle with Perlin noise based colors
  noStroke();
  fill(r, g, b);
  circle(0, 0, radius);

  // Draw the inner circle
  fill(colors[index * 10 + 1]);
  circle(0, 0, 20);

  // Draw the concentric circles with deviations and changing stroke weights
  for (let i = 0; i < 8; i++) {
    noFill();
    stroke(colors[index * 10 + i + 2]);
    
    // Change stroke weight using Perlin noise
    let strokeNoise = noise(index * 0.1 + frameCount * 0.02) * 20;
    strokeWeight(strokeNoise);
    
    ellipse(0, 0, (i + 1) * 15 + deviations[i], (i + 1) * 15 + deviations[i + 1]);
  }

  // Continue with the rest of your existing decorations...
  
  pop(); // Restore the original state so the rotation and scaling doesn't affect other drawings
}



