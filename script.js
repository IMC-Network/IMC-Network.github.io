function openMenu(menuName) {
    $("[data-menu='" + menuName + "']").fadeIn();

    $("[data-menu-dropdown='" + menuName + "']").attr("aria-expanded", "true");
    $("[data-menu-dropdown-icon='" + menuName + "']").text("arrow_drop_up");

    $("[data-menu='" + menuName + "']").focus();
}

function closeMenu(menuName) {
    $("[data-menu='" + menuName + "']").fadeOut();

    $("[data-menu-dropdown='" + menuName + "']").attr("aria-expanded", "false");
    $("[data-menu-dropdown-icon='" + menuName + "']").text("arrow_drop_down");
}

function toggleMenu(menuName) {
    if ($("[data-menu='" + menuName + "']").is(":visible")) {
        closeMenu(menuName);
    } else {
        openMenu(menuName);
    }
}

$(function() {
    $(window).click(function() {
        $("[data-menu]").each(function() {
            closeMenu($(this).attr("data-menu"));
        });
    });

    $("[data-menu], [data-menu-dropdown]").click(function() {
        event.stopPropagation();
    });
});