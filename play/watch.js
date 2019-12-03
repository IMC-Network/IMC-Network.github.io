const RATIO_16BY9 = 9 / 16;

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        videoId: "9oPLm0pRW4w",
        width: $("section").width(),
        height: $("section").width() * RATIO_16BY9,
        playerVars: {
            autoplay: 1,
            controls: 1,
            modestbranding: 1,
            rel: 0,
            showinfo: 0
        },
        events: {
            onReady: onPlayerReady
        }
    });

    $("iframe").attr("tabindex", "-1");
}

function onPlayerReady() {}

$(window).resize(function() {
    player.setSize($("section").width(), $("section").width() * RATIO_16BY9);
});