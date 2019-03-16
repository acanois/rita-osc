# RiTa to OSC to Max 
### (Or SuperCollider, or Whatever You Want)

## What It Is
This is a simple app demonstrating one way to process text with RiTa, then send it as OSC to to generate audio in another environment, such as Max, SuperCollider, or anything that will receive and process OSC.  

## What you need
[Node.js](https://nodejs.org/en/), the [RiTa module](https://rednoise.org/rita/), and the [OSC module](https://github.com/colinbdclark/osc.js/). Optionally, if you want to run the patch included in this repo, you'll need [Max 7](https://cycling74.com/products/max). 

## What's RiTa?
The best description can be found on [their website](https://rednoise.org/rita/), but, essentially, RiTa is a Node module that allows you to process text in any way you could possibly want to. In this example, I'm using it to grab the parts of speech of each word, send them to Max, and then assign each part of speech to note in a scale. 

## What's OSC?
OSC stands for Open Sound Control. It's a protocol for sending audio data between applications. It's free, every language has a library for it, and it's really useful. In this example, it's being used to send the parts of speech from the Node app to the max app.