var img = "";
var noseX = 0;
var noseY = 0;
var rightWrist = 0;
var marioX = 325;
var marioY = 325;


function preload() {
	world_start = loadSound("world_start.wav");
	pular = loadSound("jump.wav")
	moeda = loadSound("coin.wav")
	gameover = loadSound("gameover.wav")
	morrer = loadSound("mariodie.wav")
	matar = loadSound("kick.wav")
	setSprites();
	MarioAnimation();
	
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas')
	video = createCapture(VIDEO)
	video.parent('gameconsole')
	video.size(800, 400)
	poseNet = ml5.poseNet(video, modelload)
	poseNet.on("pose", gotPose)
	instializeInSetup(mario);
}

function draw() {
	game()
}


function modelload() {
	console.log("model load")

}

function gotPose(results) {
	if (results.length > 0) {
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log(results);
		rightWrist = results[0].pose.rightWrist.confidence;
}


}

