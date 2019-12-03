const RATIO_16BY9 = 9 / 16;

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        width: $("section").width(),
        height: $("section").width() * RATIO_16BY9,
        videoId: "dQw4w9WgXcQ"
    });
}

$(window).resize(function() {
    player.setSize($("section").width(), $("section").width() * RATIO_16BY9);
});