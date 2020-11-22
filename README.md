Note:
```diff
Pushing Unity Project to Github wasn't working due to file size problems and time issues. Find a link below to the project pacakage file, ready to download:
```
[Click Here](https://uwoca-my.sharepoint.com/:u:/g/personal/wsawan2_uwo_ca/EVgFXqgTQT1Gv4iU7E6o4jUBBWv0q3tByE-JigwLLi4sWA?e=19lQhe)
# HackWestern7
## Inspiration
Due to COVID-19, the closure of all 56 DriveTest locations has caused nearly half a million canceled driving tests and half of those were road tests. Not only that but all driving ed class have been canceled leaving thousands of people without the ability to learn and get road experience 

## What it does
A web application that monitors user facial movement and input to ensure they abide by general traffic rule

## How we built it

Several technologies were used to develop DriverEd 2.0. React and Bootstrap was used to create the frontend functionalities. Unity and Blender were used in the creation of the in house developed driving engine. FireBase was used to store driving test scores as well as user information and finally, Tensorflow was used in the analysis of head and eye movement 


## Functionality 

DriverEd 2.0 has a variety of built-in functionality, allowing for the simple detection and reporting of driver errors. This functionality includes features like yielding and stopping, where the game will report the car movement and the alertness of the driver (e.g. checking for pedestrians), using the facial detection system. Blindspot is also a key highlight of the system, so at specific points in the routes where the driver would need to check their blind spot, the facial detection system will return whether they are checking.

Controlled intersections, using traffic lights, appear throughout the route. Ensuring they were stopping and remaining alert based on the traffic light state (checking for oncoming traffic with yellow) were crucial in this portion.

Finally, speed limit zones were also enforced and changed throughout the route, and ensuring they were turning on the car and letting out the handbrake were two simple additions.

## Challenges

Tracking Head Movement and Determining Motion:

Recognizing how the head was moving was also pretty hard, in which we had to see whether they were just moving their head slightly or making a major blindspot check. This was fixed with the use of TensorFlow and the idea of selecting dots to track in which direction they're facing.
Player Movement:

Tracking the movement and rotation of the car through modular routes in the Unity environment became a more daunting task than expected. The idea of creating routes easily was a difficult experience when it came to speed management and rotation of the car to follow the path. More can still be done in that area, but within itself, it was a major hurdle to overcome.

Linking React with Unity:

This was also extremely difficult in which it was two differing environments (WebGL in Unity and React.js) that needed to seamlessly work in tandem. In the end, a library was found that helped with this. More work needed to be done to deal with individual errors in terms of DLL linking etc.

## What's next for Driver Ed 2.0
Although this is the initial phase we hope to implement the following functionality of parking, VR, different routes, and different difficulty levels 
