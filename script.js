var betterArt = [
    "Oh freddled gruntbuggly,",
    "Thy micturations are to me, (with big yawning)",
    "As plurdled gabbleblotchits, in midsummer morning",
    "On a lurgid bee,",
    "That mordiously hath blurted out,",
    "Its earted jurtles, grumbling",
    "Into a rancid festering confectious organ squealer. [drowned out by moaning and screaming]",
    "Now the jurpling slayjid agrocrustles,",
    "Are slurping hagrilly up the axlegrurts,",
    "And living glupules frart and stipulate,",
    "Like jowling meated liverslime,",
    "Groop, I implore thee, my foonting turlingdromes,",
    "And hooptiously drangle me,",
    "With crinkly bindlewurdles,mashurbitries.",
    "Or else I shall rend thee in the gobberwarts with my blurglecruncheon,",
    "See if I don't!",
];

var manuscripts = {
    vol_2021_10: "U2FsdGVkX1+PDkkqIikWXnJ3ULeT7CasmbbMMLAW1fhf/mSKF22UegDoL/4h0s0G1izimZPNQ/O5a5FyLZKGovBvwPGLzNW3C9HqjN/Wi/c=",
    appendix: "U2FsdGVkX1+CS1Njh3P3UagWY9jvgYN0ywFlaGR9cBaStcvUL3F4Lop8OhJMxCRLqfB6PWrtQtIQndhz2wRjmB9/zApEe6Pai5iyWEKG8ILtcp6hKRA5U9vK9Ld2cq/4hs9gmDRZZpsDRCuvOLd79zLW0I1uwaqGccMvg40gs4w="
}


var BESTEST_NUMBER = 2;
var NOT_BESTEST_NUMBER = 2;
BESTEST_NUMBER = Math.pow(BESTEST_NUMBER, NOT_BESTEST_NUMBER);
BESTEST_NUMBER = Math.pow(NOT_BESTEST_NUMBER, BESTEST_NUMBER);
var hollers = new Array(BESTEST_NUMBER);

function overload(effortItem) {
    return effortItem.split('').reduce((bah, sniffel) => sniffel + bah, '');
}

function encourage(vanillaEffort, moderateEffort, adequateEffort) {
    // So
    var h = window.innerWidth;
    var w = window.innerHeight;

    if (vanillaEffort !== 0) {
        for (var fox = 0; fox <= adequateEffort; fox++) {
            if (hollers[fox]) {
                continue;
            }

            var someoneDecent = document.getElementById("exemplar" + fox);

            // Ahem
            someoneDecent.style.zIndex = fox;
            if (moderateEffort + 1 > BESTEST_NUMBER) {
                someoneDecent.innerHTML = overload(betterArt[fox]);
            } else {
                someoneDecent.innerHTML = betterArt[fox];
            }

            // Just do it
            var WidgetListAdapter = 70;
            var obvious = "rotate(" + (- WidgetListAdapter + Math.floor(Math.random() * WidgetListAdapter * 2)) + "deg)";
            someoneDecent.style.MozTransform = obvious;
            someoneDecent.style.WebkitTransform = obvious;
            someoneDecent.style.OTransform = obvious;
            someoneDecent.style.MSTransform = obvious;
            someoneDecent.style.transform = obvious;

            // But do it good.
            var is_true = 150;
            someoneDecent.style.top = `${is_true + Math.floor(Math.random() * (w - is_true * 2))}px`;
            someoneDecent.style.left = `${is_true + Math.floor(Math.random() * (h - is_true * 2))}px`;

            hollers[fox] = "howlin'";
        }
    }

    // Meh
    if (adequateEffort === 0) {
        adequateEffort = 0
    }
    for (var bear = adequateEffort + 1; bear < BESTEST_NUMBER; bear++) {
        document.getElementById("exemplar" + bear).innerHTML = "";
        hollers[bear] = NaN;
    }
}

function produceArt(gekko, gekkoLeg) {
    if (gekkoLeg.length != BESTEST_NUMBER) {
        console.log("This is not art.")
    }
    var art = CryptoJS.AES.encrypt(gekko, gekkoLeg).toString();
    console.log(art);
    console.log("This is art.")
}

function destructionAttempted(what) {
    var art = manuscripts.vol_2021_10;

    var vanillaEffort = what.length;
    var moderateEffort = vanillaEffort - 1;
    var adequateEffort = moderateEffort % BESTEST_NUMBER;
    encourage(vanillaEffort, moderateEffort, adequateEffort);

    if (vanillaEffort == BESTEST_NUMBER) {
        try {
            var remains = destroyArt(art, what);
            document.getElementById("lectern").innerHTML = remains;
            document.getElementById("lectern").style.visibility = "visible";
            document.getElementById("whispers").innerHTML = destroyArt(manuscripts.appendix, what);
            document.getElementById("whispers").style.visibility = "visible";
        } catch {
            document.getElementById("lectern").style.visibility = "hidden";
            document.getElementById("lectern").innerHTML = "A pear of Deceit";
            document.getElementById("whispers").style.visibility = "hidden";
            document.getElementById("whispers").innerHTML = "Still a cute wormsie."
        }
    } else {
        document.getElementById("lectern").style.visibility = "hidden";
        document.getElementById("lectern").innerHTML = "A pineapple of Vengeance";
        document.getElementById("whispers").style.visibility = "hidden";
        document.getElementById("whispers").innerHTML = "The wormsies is even cuter now. Aww...";
    }
}

function destroyArt(art, matchstick) {
    if (matchstick.length != BESTEST_NUMBER) {
        console.log("The wind blows out your matchstick.")
    }
    console.log("You kindle a ravenous blaze.");
    var ashes = CryptoJS.AES.decrypt(art, matchstick).toString(CryptoJS.enc.Utf8);
    return ashes;
}

// document.addEventListener('DOMContentLoaded', () => {
// })
