const encrypter = document.querySelector(".encrypter");
const innerPasword = ["!", "*", "%", "v", "@", "H", "m", "$", "^", "g"];
const textarea = document.querySelector(".encrypter__message");
const passwordInput = document.querySelector(".encrypter__user-password-input");
const encryptBtn = encrypter.querySelector(".encrypter__btn-encrypt");
const decryptBtn = encrypter.querySelector(".encrypter__btn-decrypt");
let lastBtn = null;

//encrypt
//1 firstIter text + innerPsw get odd and add them to the left and rest to the right
//2 secondIter newText + psw and all odd left other right
function encrypt(text, psw) {
  let leftHalf = "";
  let rightHalf = "";
  let fullText = text + innerPasword.join("");

  for (let i = 0; i < 2; i++) {
    if (i === 1) {
      fullText += psw;
    }
    for (let j = 0; j < fullText.length; j++) {
      const element = fullText[j];
      if (j % 2 !== 0) {
        leftHalf += element;
      } else {
        rightHalf += element;
      }
    }

    fullText = leftHalf + rightHalf;
    leftHalf = "";
    rightHalf = "";
  }

  return fullText;
}

//decrypt
//1 text in half and select 1 from right/ 1 from left
//2 slice psw from right
//3 rpt 1 text in half and 1 from right/1from left
//4 slice innerPsw
//5 check psw

function decrypt(encryptedText, psw) {
  let leftHalf, rightHalf;
  let fullText = encryptedText;

  for (let j = 0; j < 2; j++) {
    let halfIndex = Math.floor(fullText.length / 2);
    let halfFullText = fullText.length / 2;

    leftHalf = fullText.slice(0, halfIndex);
    rightHalf = fullText.slice(halfIndex);
    fullText = "";

    //select one letter from right and one from left repeated till whole word
    for (let i = 0; i < Math.ceil(halfFullText); i++) {
      fullText += rightHalf[i];
      if (typeof leftHalf[i] !== "undefined") {
        fullText += leftHalf[i];
      }
    }

    if (j === 0) {
      fullText = fullText.slice(0, fullText.length - psw.length);
    }
    if (j === 1) {
      fullText = fullText.slice(0, fullText.length - innerPasword.length);
    }
  }

  return fullText;
}

const getUserText = function () {
  const textareaValue = textarea.value.trim();
  const passwordValue = passwordInput.value.trim();
  return [textareaValue, passwordValue];
};

const checkInputsLength = function (userText, userPassword) {
  if (userText < 8 || userPassword < 8) {
    const minLengthPop = encrypter.querySelector(
      ".encrypter__required-popup"
    ).classList;
    minLengthPop.add("encrypter__required-popup-enable");
    setTimeout(
      () => minLengthPop.remove("encrypter__required-popup-enable"),
      3000
    );
    return true;
  }
};

const disableButton = function (btnEncOrDec) {
  btnEncOrDec.classList.toggle("btn-disabled");
  btnEncOrDec.toggleAttribute("disabled");

  if (lastBtn) {
    lastBtn.classList.toggle("btn-disabled");
    lastBtn.toggleAttribute("disabled");
  }
  lastBtn = btnEncOrDec;
};

const toggleSuccessEncrypt = function () {
  textarea.classList.toggle("encrypter__success-completed");
  passwordInput.classList.toggle("encrypter__success-completed");
  const copyBtns = document.querySelectorAll(
    ".encrypter__message-btn , .encrypter__user-password-btn"
  );
  copyBtns.forEach((btn) => btn.classList.remove("btn-hidden"));
};

const displayInputsContent = function (btnEncOrDec, text, userPassword) {
  if (btnEncOrDec.classList.contains("encrypter__btn-encrypt")) {
    textarea.setAttribute("readonly", "");
  } else {
    textarea.removeAttribute("readonly");
  }
  disableButton(btnEncOrDec);
  toggleSuccessEncrypt();
  textarea.value = text;

  passwordInput.value = userPassword;
  passwordInput.setAttribute("readonly", "");
};

const copyInputText = function (btnNode) {
  let localInput = textarea;
  navigator.clipboard.writeText(textarea.value);
  if (btnNode.classList.contains("encrypter__user-password-btn")) {
    localInput = passwordInput;
    navigator.clipboard.writeText(passwordInput.value);
  }
  localInput.select();
  localInput.setSelectionRange(0, 99999);
};

const mainHandler = function (btnNode, btnType) {
  const [userText, userPassword] = getUserText();
  if (checkInputsLength(userText, userPassword)) {
    return;
  }
  if (btnType === "encrypt") {
    const encryptedText = encrypt(userText, userPassword);
    displayInputsContent(btnNode, encryptedText, userPassword);
  }
  if (btnType === "decrypt") {
    const decryptedText = decrypt(userText, userPassword);
    displayInputsContent(btnNode, decryptedText, userPassword);
  }
  if (btnType === "copy") {
    copyInputText(btnNode);
  }
};

encrypter.addEventListener("click", function (e) {
  if (e.target.classList.contains("encrypter__btn-encrypt")) {
    mainHandler(e.target, "encrypt");
  }
  if (e.target.classList.contains("encrypter__btn-decrypt")) {
    mainHandler(e.target, "decrypt");
  }
  if (e.target.classList.contains("encrypter__message-btn")) {
    mainHandler(e.target, "copy");
  }
  if (e.target.classList.contains("copy-btn")) {
    mainHandler(e.target, "copy");
  }
});
