$(document).ready(() => {
    resetScreen()
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