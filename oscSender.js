// Sending RiTa data as OSC

const rita = require('rita')
const osc = require('osc')
const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

// Define sending and receiving ports for OSC
var udpPort = new osc.UDPPort({
	// Node js listening port
	localAddress: '127.0.0.1',
	localPort: 7410,

	// Destination (Max, Supercollider, etc) receiving port
	remoteAddress: '127.0.0.1',
	remotePort: 7400
})

// Open the UDP port
udpPort.open();

// Sends a default test message
udpPort.on('ready', () => {
	udpPort.send({
		address: '/s_new',
		args: ['default', 100]
	}), '127.0.0.1', 7400
})

let loopDialog = function () {
	rl.question('Type something >> ', (answer) => {
		let rs = rita.RiString(answer)
		createPosTags(answer)
		sendWordLengths(answer)
		// fs.appendFile('chatlog.txt', answer + '\n')
		loopDialog()
	})
}

function sendWordLengths (answer) {
	let tokens = rita.RiTa.tokenize(answer)

	tokens.forEach((token) => {
		udpPort.send({
			address: '/length',
			args: token.length
		}), '127.0.0.1', 7400
	})
}

function createPosTags (answer) {
	let posTags = rita.RiTa.getPosTags(answer)

	posTags.forEach((tag) => {
		udpPort.send({
			address: '/melody',
			args: tag
		}), '127.0.0.1', 7400
	})
}

loopDialog()