$(document).ready(() => {
    resetScreen()
    checkIfSocial();
})

function changeScreen(sel) {
    localStorage.setItem("screen", sel.value)
    resetScreen()
}

function setFullScreen() {
    $("select").val("full")
    $("#phone").removeClass("smartphone")
    $("#phone").addClass("full-screen")
    $("#content-container").addClass("full-screen")
}

function setMobileScreen() {
    $("select").val("phone")
    $("#phone").removeClass("full-screen")
    $("#content-container").removeClass("full-screen")
    $("#phone").addClass("smartphone")
}

function refreshIframe() {
    document.getElementById("frame").srcdoc += ""
}

function resetScreen() {
    const screen = localStorage.getItem("screen")
    if (screen) {
        if (screen === "phone") {
            setMobileScreen()
            refreshIframe()
        } else {
            setFullScreen()
            refreshIframe()
        }
    } else {
        localStorage.setItem("screen", "phone")
        resetScreen()
    }
}

//TODO: Write code to disable the phone vs full dropdown and just have it full screen when there is a query paramater

function checkIfSocial() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    
    if(params.share && params.share === '1') {
        $('#screen_type').remove();
        setFullScreen();
    }
}
