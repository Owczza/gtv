window.onload = () => {
    displayactiveSlideIndex();
};

document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 37) {
      return;
    }
    nextSlide();
});

document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 39) {
        return;
    }
    prevSlide();
});

document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 38) {
      return;
    }
    scrollUp();
});

document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 40) {
        return;
    }
    scrollDown();
});

// document.addEventListener("keydown", event => {
//     if (event.isComposing || event.keyCode === 13) {
//         return;
//     }
//     openElement();
// });

// document.addEventListener("keydown", event => {
//     if (event.isComposing || event.keyCode === 8) {
//         return;
//     }
//     exitToMenu();
// });

function displayactiveSlideIndex() {
    var image = `./menu-icons/menu_${slides[activeSlideIndex].name}.jpg`;
    var navLeft = 
        activeSlideIndex > 0 ? `./menu-icons/${slides[activeSlideIndex-1].name}.png` : "";
    var navRight1 = 
        activeSlideIndex + 1 < slides.length ? `./menu-icons/${slides[activeSlideIndex+1].name}.png` : "";
    var navRight2 =
        activeSlideIndex + 2 < slides.length ? `./menu-icons/${slides[activeSlideIndex+2].name}.png` : "";
    document.getElementById("focus-nav-item").src=`${image}`;
    document.getElementById("left-nav-item").src=`${navLeft}`;
    document.getElementById("right-nav-item1").src=`${navRight1}`;
    document.getElementById("right-nav-item2").src=`${navRight2}`;
}

function nextSlide() {
    if (activeSlideIndex+1 < slides.length) {
      activeSlideIndex++
    } else {
      activeSlideIndex === slides.length
    }
    displayactiveSlideIndex();
}

function prevSlide() {
    if (activeSlideIndex > 0) {
        activeSlideIndex--
    } else {
        activeSlideIndex === 0
    }
    displayactiveSlideIndex();
}

function openElement() {
    document.getElementById(`${slides[activeSlideIndex].name}`).style.display="block";
    document.getElementById("menu").style.display="none";
}

function exitToMenu() {
    document.getElementById(`${slides[activeSlideIndex].name}`).style.display="none";
    document.getElementById("menu").style.display="block";
}

function scrollUp() {
    activeSlideIndex++;
    changeActive();
}

function scrollDown() {
    activeSlideIndex--;
    changeActive();
}

function changeActive() {
    var activeElement = document.getElementById(`${settingsMenu[activeSlideIndex].name}`);
}