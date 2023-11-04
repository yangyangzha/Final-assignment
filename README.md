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
From the part of setup first I need to use vscode to run the basic p5.js file,then change the sketch.js replace it with our team project.To run my setup I need to go to HTML page and click go live to see the prototype is the right one or need further tweaks.
