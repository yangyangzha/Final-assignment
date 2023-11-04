# Final-assignment
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
## General info
The code I wrote is a JavaScript script that utilizes the p5.js library, a library that simplifies the process of drawing and animating in the web browser hust like assignment required. The script is set up to create a dynamic, animated visual display of circles with a variety of visual effects. I mainly created functions below:
Global Variables:
colors: An array to store RGB color values.
deviations: An array to store deviation values for use in animations or drawing variations.
coordinates: An array to store the (x, y) coordinates for the placement of circles.
size: The dimension of the square canvas (1000px by 1000px).
radius: The radius for the main circles drawn on the canvas, set to 27% of the canvas size.

setup() Function:
This function is called once when the program starts. It initializes the canvas and populates the colors, deviations, and coordinates arrays with appropriate values for later use.

draw() Function:
This is the main animation loop that p5.js calls continuously. It adjusts the canvas orientation and position, sets a background color that changes over time using Perlin noise for a smooth color transition effect, and calls the drawCircle() function for each set of coordinates.

drawCircle() Function:
This function is responsible for drawing each individual circle. It adds rotation and scaling effects to the circle using Perlin noise for smooth transitions, creating an animated, pulsating, and rotating effect.

dashedCircle() Function:
Draws circles with a dashed-line effect.

circleLine() Function:
Draws a zigzag pattern around the perimeter of a circle.

drawPetal() Function:
This function draws petal-like features using Bezier curves, where the size and color of the petals change based on Perlin noise, giving them a dynamic, flowing appearance.
Perlin Noise:

Throughout the script, Perlin noise is used to create natural, smooth transitions and variability in animation for rotation, scaling, color, and even the petal drawing functions.
Overall, the code produces a complex, animated pattern of circles on a web page, with dynamic colors and movements that are both random and smoothly varying. It's a creative use of generative art principles with interactive features from the p5.js library.

## Technologies
Technologies I used are listed below:
JavaScript
JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript specification. JavaScript has dynamic typing, prototype-based object-orientation, and first-class functions. It is a multi-paradigm language, supporting event-driven, functional, and imperative programming styles. It's used for client-side page behavior on the majority of websites.

p5.js Library
p5.js is a JavaScript library that makes it easy to code creative and interactive visualizations in the web browser. It is designed to make the process of coding accessible for artists, designers, educators, and beginners, and reinterprets this context for the modern web. The library provides a full set of drawing functionality. However, you’re using only a portion of what p5.js is capable of:

Canvas Creation: p5.js simplifies the process of creating a canvas in an HTML5 context, which is the area where all the drawing occurs.
Animation Loop: The draw() function is continuously executed at the frame rate (default is 60 frames per second), allowing for animations.
Utility Functions: The use of Perlin noise through noise() function is a part of p5.js's utility functions, providing coherent noise for smooth random transitions in the animations.
Perlin Noise
Perlin noise is a gradient noise used commonly in computer graphics for generating organic textures and patterns. In the context of this script, it’s used to control the flow and changes of various visual elements smoothly over time, without the harsh unpredictability of purely random functions.

HTML5 Canvas
This is a technology that allows for dynamic, scriptable rendering of 2D shapes and bitmap images. It is used through a <canvas> element in HTML5. JavaScript can draw on the canvas element using a set of "painting" functions provided by the context object (either 2D or WebGL).

CSS3 (Assumed)
Although not directly referenced in the provided code, CSS3 likely plays a role in styling the overall appearance of the webpage that includes this canvas. It might be used to position the canvas or to style other elements on the page in conjunction with the animated drawing.

Web Browser Rendering
The web browser is the environment where this all comes together. Modern web browsers have built-in capabilities to handle JavaScript execution, HTML5 canvas rendering, and CSS styling. The browser's rendering engine will take care of drawing the specified shapes, handling user interactions, and updating the canvas for each frame of the animation.

Responsive Design (Potential)
While not explicitly detailed in the provided code, it’s common for web applications to incorporate responsive design principles. This would ensure that the canvas and its animations look good on different screen sizes and devices. It might involve using viewport-relative measurements or media queries in CSS, or additional JavaScript to adjust the canvas size dynamically.

Client-Side Execution
This entire process is client-side, meaning it runs on the user's device in their browser, rather than relying on server-side processing. This approach can lead to quick and responsive interactions and animations, as it takes advantage of the user's hardware capabilities.

Together, these technologies and techniques enable the creation of interactive, animated web content that can engage users and offer an aesthetically pleasing experience directly in their web browser without the need for plug-ins or additional software.

## Setup
From the part of setup first I need to use vscode to run the basic p5.js file,then change the sketch.js replace it with our team project.To run my setup I need to go to HTML page and click go live to see the prototype is the right one or need further adjusts.

Original sketch.js:
Variable Initialization:
colors: An array to store random RGB color values.
deviations: An array to store random values that will be used to create variations in the sizes of concentric circles.
coordinates: An array to store the positions of circles that will be drawn on the canvas.
size and radius: Variables that define the size of the canvas and the radius of the main circles.
The setup function:
Initializes the drawing canvas to a size of 1000x1000 pixels.
Populates the colors array with 500 sets of random RGB colors.
Stores random deviation values in the deviations array.
Calculates and stores the positions for each circle in a staggered grid layout.
The draw function:
Sets the orientation and position of the canvas.
Sets a dark blue background.
Renders each circle at its respective coordinates by calling drawCircle.
drawCircle function (First Declaration):
Contains code to draw a single circle with various visual features, such as a main circle, a central circle, concentric rings with deviations, and additional decorative elements like dashed circles, zigzag lines, and petal-like designs. The decorative elements are conditionally applied based on the circle's index.
There are two declarations of the drawCircle function, and it seems like the second one (described below) is meant to override the first.
drawCircle function (Second Declaration):
This version of the drawCircle function includes additional dynamics such as rotation and scaling based on Perlin noise, giving each circle a unique, time-varying transformation that creates a more complex and animated visual effect.
This second declaration seems to replace the first one, suggesting that the code may have been modified to add these effects after the initial implementation.
Helper Functions:
dashedCircle: Draws circles with dashed lines, used for decorating.
circleLine: Draws zigzag lines around a circle for a sawtooth pattern effect.
drawPetal: Draws petal-like features with Bezier curves for decorative purposes.

Sketch2.js:
I add more elements listed below:
Background color change: I introduced a changing background color that gradually transitions across a spectrum. This is done by mapping the Perlin noise value to a range that represents colors.
Circle movement and size change: The position and size of the circles are altered based on Perlin noise, which means that each circle moves and changes size independently from frame to frame, giving the artwork an organic feel.
Petal effect: The ‘petal’ like structures around the circles are created by manipulating the vertices around each circle using Perlin noise. This adds another layer of complexity and visual interest to the piece.

sketch3.js:
The background color now slowly changes over time using Perlin noise to generate RGB values, creating a gentle transition effect.Circle positions now have a slight, noise-based offset that changes over time, giving the appearance that they are drifting. Each circle now in sketch3.js rotates and scales independently. The rotation and scale are both based on Perlin noise, which causes them to change smoothly over time, creating a pulsing and spinning effect.
The petals now change their curvature based on Perlin noise, and their colors shift over time, which makes the petals look like they are 'breathing' and changing colors organically.
