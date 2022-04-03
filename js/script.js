$(document).ready(() => {
    resetScreen();
    checkIfSocial();
});

function changeScreen(sel) {
  setLocalResolution(sel.value);
}

function setLocalResolution(value) {
  try {
    localStorage.setItem("screen", value);
     resetScreen();
  } catch(err) {
    // Manually set screen if localStorage is now allowed on permissions
    if(value === 'phone') {
      setMobileScreen();
      refreshIframe();
    } else {
      setFullScreen();
      refreshIframe();
    }
  }
}

function setFullScreen() {
    $("select").val("full");
    $("#phone").removeClass("smartphone");
    $("#phone").addClass("full-screen");
    $("#content-container").addClass("full-screen");
}

function setMobileScreen() {
    $("select").val("phone");
    $("#phone").removeClass("full-screen");
    $("#content-container").removeClass("full-screen");
    $("#phone").addClass("smartphone");
}

function refreshIframe() {
    document.getElementById("frame").srcdoc += "";
}

function resetScreen() {

    try {
      const screen = localStorage.getItem("screen");
      if (screen) {
          if (screen === "phone") {
              setMobileScreen();
              refreshIframe();
          } else {
              setFullScreen();
              refreshIframe();
          }
      } else {
          setLocalResolution("phone");
      }
    }
    catch(err) {
      // iFrames cannot be accessed by other browser's localStorage hence why the height and width
      // are cut from other computers. Must set to full screen if access to browser data is not permitted 
      setMobileScreen();
      refreshIframe();
    }
}

function checkIfSocial() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    
    if(params.share && params.share === '1') {
        $('#screen_type').remove();
        setFullScreen();
        refreshIframe();
    }
}
