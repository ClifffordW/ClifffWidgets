const root = document.documentElement;
const DropReleaseDate = new Date("March 24, 2022 18:00:00").getTime();
const drops = document.getElementsByClassName("drops")[0];
const body =
    `
    <link rel="stylesheet" href="https://clifffordw.github.io/ClifffWidgets/Drops/Scripts/Animations/anim_rewritten_test.css">
    <img class="bg-flair" src="https://items.kleientertainment.com/images/DST/PROFILEFLAIR_AMULET_YELLOWAN/verylarge">
    <img class="bg-portrait" src="https://items.kleientertainment.com/images/DST/PLAYERPORTRAIT_BG_AMULETYELLOWAN/verylarge">
    <img class="item-frame" src="https://clifffordw.github.io/ClifffWidgets/Drops/Dropcons/Frames/Item/default.png">
    <img class="bg-item" src="https://items.kleientertainment.com/images/DST/AMULET_YELLOW_AN/verylarge">
    <img class="partyhat" src="https://clifffordw.github.io/ClifffWidgets/Drops/Seasonal Icons/winterfeast.png">
    <img class="wip" src="https://i.imgur.com/QqHArTg.png">
    <img class="patreon" src="">
    `;

drops.insertAdjacentHTML("beforeEnd", body);

// ANNIVERSARY — https://i.pinimg.com/originals/6e/a7/b5/6ea7b5ac3d63422d2231dbd64953d786.png
// WINTERFEAST — https://clifffordw.github.io/ClifffWidgets/Drops/Seasonal Icons/feast.png
// HALLOWEEN — https://clifffordw.github.io/ClifffWidgets/Drops/Seasonal Icons/halloween.png

// Widget Glow
root.style.setProperty("--glow", "#6C2192");

// KLEI — #FE5200
// TWITCH — #6C2192

/* Party Hat for anniversary */
const partyhat = document.getElementsByClassName("partyhat")[0];
partyhat.style.display = "none";
partyhat.style.position = "absolute";
partyhat.style.setProperty("transform", "rotate(35deg)");
document.getElementsByClassName("wip")[0].style.display = "none"
document.getElementsByClassName("p")[0].style.display = "none"
document.getElementsByClassName("patreon")[0].style.display = "none"

/*Deactivated Drops*/
document.getElementsByClassName("bg-flair")[0].style.filter = "brightness(100%) drop-shadow(0mm 0mm 2mm rgb(0, 0, 0))";
document.getElementsByClassName("bg-portrait")[0].style.filter = "brightness(100%) drop-shadow(0mm 0mm 2mm rgb(0, 0, 0))";
document.getElementsByClassName("bg-item")[0].style.filter = "brightness(100%) drop-shadow(0mm 0mm 2mm rgb(0, 0, 0))";
/*document.getElementsByClassName("b")[0].style.color = "#F47209"*/
document.getElementsByClassName("wip")[0].style.position = "absolute"
document.getElementsByClassName("wip")[0].style.left = "260px"
document.getElementsByClassName("wip")[0].style.top = "75px"
document.getElementsByClassName("wip")[0].style.width = "64px"
document.getElementsByClassName("wip")[0].style.height = "auto"
document.getElementsByClassName("wip")[0].style.filter = "drop-shadow(0mm 0mm .6mm rgb(0, 0, 0, 1))"
document.getElementsByClassName("drops")[0].style.top = "100px"
document.getElementsByClassName("drops")[0].style.position = "absolute"