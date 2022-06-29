song1 = "";
song2 = "";
left_wrist_x = 0;
left_wrist_y = 0;
right_wrist_x = 0;
right_wrist_y = 0;

function preload()
{
    song1 = loadSound("music copy.mp3")
    song2 = loadSound("song.mp3")
}
function setup()
{
    canvas = createCanvas(500 , 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    posenet = ml5.poseNet(video , modelLoaded)
    poseNet.on('pose' , gotPoses)
}
function modelLoaded()
{
    console.log("THE MODEL HAS BEEN LOADED")
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        left_wrist_x = results[0].pose.leftWrist.x
        left_wrist_y = results[0].pose.leftWrist.y
        right_wrist_y = results[0].pose.rightWrist.y
        right_wrist_x = results[0].pose.rightWrist.x
    }
}
function draw()
{
    image(video , 0 , 0 , 500 , 500)
}