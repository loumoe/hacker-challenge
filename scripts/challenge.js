//
// ---------------------------------------------------------
// Hi! Are you here to find the answer to Challenge 3?
// Scroll down to the "Read the JavaScript" section, your answer is hidden there!
// ---------------------------------------------------------
//

window.addEventListener("DOMContentLoaded", (event) => {

  //
  // ---------------------------------------------------------
  // Hidden password challenge
  // ---------------------------------------------------------
  //

  const hiddenPasswordSubmitBtn = document.querySelector("button.hidden-password");
  const hiddenPasswordField = document.querySelector("input.hidden-password");

  if (hiddenPasswordSubmitBtn) {
    hiddenPasswordSubmitBtn.addEventListener("click", event => {
      if (hiddenPasswordField.value == hiddenPasswordField.getAttribute("data-password")) {
        window.location.href = "/challenges/hard/bat.html";
      } else {
        throwError();
      };
    });
  };

  //
  // ---------------------------------------------------------
  // Disabled button challenge
  // ---------------------------------------------------------
  //

  const disabledBtn = document.querySelector("button[disabled]");

  if (disabledBtn) {
    disabledBtn.addEventListener("click", event => {
      window.location.href = "/challenges/hard/fox.html";
    });
  };

  //
  // ---------------------------------------------------------
  // Read the JavaScript challenge
  // ---------------------------------------------------------
  //

  if (document.body.id == "js-challenge") {
    document.addEventListener("dblclick", function (e) {
      window.location.href = "/challenges/hard/duck.html";
    });
  };

  //
  // ---------------------------------------------------------
  // Local Storage challenge
  // ---------------------------------------------------------
  //

  const storagePasswordSubmitBtn = document.querySelector("button.storage");
  const storagePasswordField = document.querySelector("input.storage");
  const storagePassword = "h0ud1n1";

  if (storagePasswordSubmitBtn) {
    localStorage.setItem("password", storagePassword);
    storagePasswordSubmitBtn.addEventListener("click", event => {
      const password = localStorage.getItem("password");
      if (storagePasswordField.value == password) {
        window.location.href = "/challenges/hard/gecko.html";
      } else {
        throwError();
      }
    });
  } else {
    localStorage.removeItem("password", storagePassword);
  };

  //
  // ---------------------------------------------------------
  // JavaScript Console challenge
  // ---------------------------------------------------------
  //

  const consolePasswordSubmitBtn = document.querySelector("button.console");
  const consolePasswordField = document.querySelector("input.console");
  const consolePassword = `pr${1+2}st${0}`;
  let clickCount = 0;
  let clickMax = 3;

  if (consolePasswordSubmitBtn) {
    console.log("-------------------------------------------------")
    console.log(`Click the submit button on this page ${clickMax - clickCount} times to receive the password.`)

    consolePasswordSubmitBtn.addEventListener("click", event => {
      if (consolePasswordField.value == consolePassword) {
        window.location.href = "/challenges/hard/hare.html";
      } else {
        throwError();

        if (clickCount >= 2) {
          console.log(`The password is ${consolePassword}`)
        } else {
          clickCount++;
          console.log(`Click the submit button on this page ${clickMax - clickCount} more times to receive the password.`)
        };
      };
    });
  };
});

  //
  // ---------------------------------------------------------
  // Styles challenge
  // ---------------------------------------------------------
  //

  const stylesPasswordSubmitBtn = document.querySelector("button.styles-btn");
  const stylesPasswordField = document.querySelector("input.styles-password");
  const stylesPassword = "hocus pocus"

  if (stylesPasswordSubmitBtn) {
    stylesPasswordSubmitBtn.addEventListener("click", event => {
      if (stylesPasswordField.value == stylesPassword) {
        window.location.href = "/challenges/hard/jellyfish.html";
      } else {
        throwError();
      };
    });
  };


  //
  // ---------------------------------------------------------
  // Pico ctf Challenges
  // ---------------------------------------------------------
  //

  //
  // ---------------------------------------------------------
  // Inspector
  // ---------------------------------------------------------
  //

  const inspectorSubmitButton = document.querySelector("button.inspector");
  const inspectorPasswordField = document.querySelector("input.inspector");
  const inspectorPassword = "picoCTF{tru3_d3t3ct1ve_0r_ju5t_lucky?2e7b23e3}"

  if (inspectorSubmitButton) {
    inspectorSubmitButton.addEventListener("click", event => {
      if (inspectorPasswordField.value == inspectorPassword) {
        window.location.href = "/success.html";
      } else {
        throwError();
      };
    });
  };

  //
  // ---------------------------------------------------------
  // GET aHEAD
  // ---------------------------------------------------------
  //

  const getaheadSubmitButton = document.querySelector("button.getahead");
  const getaheadPasswordField = document.querySelector("input.getahead");
  const getaheadPassword = "picoCTF{r3j3ct_th3_du4l1ty_2e5ba39f}"

  if (getaheadSubmitButton) {
    getaheadSubmitButton.addEventListener("click", event => {
      if (getaheadPasswordField.value == getaheadPassword) {
        window.location.href = "/success.html";
      } else {
        throwError();
      };
    });
  };


  //
  // ---------------------------------------------------------
  // Who are you?
  // ---------------------------------------------------------
  //


  const whoareyouSubmitButton = document.querySelector("button.whoareyou");
  const whoareyouPasswordField = document.querySelector("input.whoareyou");
  const whoareyouPassword = "flag"

  if (whoareyouSubmitButton) {
    whoareyouSubmitButton.addEventListener("click", event => {
      if (whoareyouPasswordField.value == whoareyouPassword) {
        window.location.href = "/success.html";
      } else {
        throwError();
      };
    });
  };

    // ---------------------------------------------------------
  // Picobrowser
  // ---------------------------------------------------------
  //


  const picobrowserSubmitButton = document.querySelector("button.picobrowser");
  const picobrowserPasswordField = document.querySelector("input.picobrowser");
  const picobrowserPassword = "picoCTF{p1c0_s3cr3t_ag3nt_e9b160d0}"

  if (picobrowserSubmitButton) {
    picobrowserSubmitButton.addEventListener("click", event => {
      if (picobrowserPasswordField.value == picobrowserPassword) {
        window.location.href = "/success.html";
      } else {
        throwError();
      };
    });
  };

 

