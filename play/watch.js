const RATIO_16BY9 = 9 / 16;

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        videoId: "Bey4XXJAqS8",
        width: $("section").width(),
        height: $("section").width() * RATIO_16BY9,
        playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            disablekb: 1
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