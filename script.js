function goTo(id) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(id);

    target.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function chooseAge(choice) {

    if (choice === "money") {
        goTo("money");
    }

    else if (choice === "mature") {
        goTo("mature");
    }

    else if (choice === "sleep") {
        goTo("sleep");
    }

    else if (choice === "food") {
        goTo("food");
    }

}


/* =========================
   RESTART
========================= */

function restart() {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById("opening").classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}