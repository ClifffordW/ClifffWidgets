let root = document.documentElement;
var myVar =
    `
<link  rel="stylesheet" href="anim.css">

<img class="flair-frame" src="https://clifffordw.github.io/ClifffWidgets/Drops/Dropcons/Frames/Flair/default.png">

<img class="bg-flair" src="https://clifffordw.github.io/ClifffWidgets/Drops/Dropcons/flair.png">

<img class="portrait-frame" src="https://clifffordw.github.io/ClifffWidgets/Drops/Dropcons/Frames/Portrait/default.png">
<img class="bg-portrait" src="https://clifffordw.github.io/ClifffWidgets/Drops/Dropcons/portrait.png">


<img class="item-frame" src="https://clifffordw.github.io/ClifffWidgets/Drops/Dropcons/Frames/Item/default.png">

<img class="bg-item" src="https://items.kleientertainment.com/images/DST/PANFLUTE_AN/verylarge">
<img class="partyhat" src="https://clifffordw.github.io/ClifffWidgets/Drops/Seasonal Icons/winterfeast.png">
<img class="wip" src="https://i.imgur.com/QqHArTg.png">
<img class="patreon" src="">`;



/*
https://i.pinimg.com/originals/6e/a7/b5/6ea7b5ac3d63422d2231dbd64953d786.png Anniversary
https://clifffordw.github.io/ClifffWidgets/Drops/Seasonal Icons/halloween.png Halloween
https://clifffordw.github.io/ClifffWidgets/Drops/Seasonal Icons/feast.png Winterfeast
*/



var drops = document.getElementsByClassName('drops')[0];







drops.insertAdjacentHTML('beforeEnd', myVar);


/*Widget Glow*/
root.style.setProperty('--glow', "#6C2192");


/*

#FE5200 Klei
#6C2192 Twitch
*/




/*Party Hat for anniversary*/
var partyhat = document.getElementsByClassName('partyhat')[0];
partyhat.style.display = 'none';
partyhat.style.position = 'absolute';
partyhat.style.setProperty("transform", "rotate(35deg)");



document.getElementsByClassName('wip')[0].style.display = "none"
document.getElementsByClassName('p')[0].style.display = "none"


document.getElementsByClassName('patreon')[0].style.display = "none"





/*Deactivated Drops*/
document.getElementsByClassName('bg-flair')[0].style.filter = "brightness(100%) drop-shadow(0mm 0mm 2mm rgb(0, 0, 0))";
document.getElementsByClassName('bg-portrait')[0].style.filter = "brightness(100%) drop-shadow(0mm 0mm 2mm rgb(0, 0, 0))";
document.getElementsByClassName('bg-item')[0].style.filter = "brightness(100%) drop-shadow(0mm 0mm 2mm rgb(0, 0, 0))";





/*document.getElementsByClassName('b')[0].style.color = "#F47209"*/


document.getElementsByClassName('wip')[0].style.position = "absolute"
document.getElementsByClassName('wip')[0].style.left = "260px"
document.getElementsByClassName('wip')[0].style.top = "75px"
document.getElementsByClassName('wip')[0].style.width = "64px"
document.getElementsByClassName('wip')[0].style.height = "auto"


document.getElementsByClassName('wip')[0].style.filter = "drop-shadow(0mm 0mm .6mm rgb(0, 0, 0, 1))"

document.getElementsByClassName('drops')[0].style.top = "100px"
document.getElementsByClassName('drops')[0].style.position = "absolute"




var DropReleaseDate = new Date("March 24, 2022 18:00:00").getTime();