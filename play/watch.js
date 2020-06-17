const RATIO_16BY9 = 9 / 16;

var player;

$(function() {
    videojs("player", {}, function() {
        player = this;

        try {
            player.ads();
        } catch (e) {}

        player.src("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");
        player.poster("https://upload.wikimedia.org/wikipedia/commons/c/ca/Bbb-splash.png");

        player.on("readyforpreroll", function() {
            player.ads.startLinearAdMode();

            player.src("https://imcnetwork.cf/media/animations/IMC Play Opening Video.mp4");
        });

        player.one("adplaying", function() {
            player.trigger("ads-ad-started");
        });

        player.one("adended", function() {
            player.ads.endLinearAdMode();
        });

        player.trigger("adsready");

        player.width($("section").width());
        player.height($("section").width() * RATIO_16BY9);
    });
});

$(window).resize(function() {
    if (player) {
        player.width($("section").width());
        player.height($("section").width() * RATIO_16BY9);
    }
});