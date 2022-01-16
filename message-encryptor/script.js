const encrypter = document.querySelector(".encrypter");
const innerPasword = ["!", "*", "%", "v", "@", "H", "m", "$", "^", "g"];
const textarea = document.querySelector(".encrypter__message");
const passwordInput = document.querySelector(".encrypter__user-password-input");

//encrypt
//1 firstIter text + innerPsw get odd and add them to the left and rest to the right
//2 secondIter newText + psw and all odd left other right
function encrypt(text, psw) {
  let localText = text.trim();
  let localPsw = psw.trim();

  let leftHalf = "";
  let rightHalf = "";
  let fullText = localText + innerPasword.join("");

  for (let i = 0; i < 2; i++) {
    if (i === 1) {
      fullText += localPsw;
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
  let localText = encryptedText.trim();
  let localPsw = psw.trim();

  let leftHalf, rightHalf;
  let fullText = localText;

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
      fullText = fullText.slice(0, fullText.length - localPsw.length);
    }
    if (j === 1) {
      fullText = fullText.slice(0, fullText.length - innerPasword.length);
    }
  }

  return fullText;
}

const getUserText = function () {
  const textareaValue = textarea.value;
  const passwordValue = passwordInput.value;
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

const disableButton = function (type) {
  type.setAttribute("disabled", "");
  type.classList.add("btn-disabled");
};

const displayInputsContent = function (type, text, userPassword) {
  if (type.classList.contains("encrypter__btn-encrypt")) {
    disableButton(type);
  }
  textarea.value = text;
  textarea.setAttribute("readonly", "");

  passwordInput.value = userPassword;
  passwordInput.setAttribute("readonly", "");
};

const encryptHandler = function (e) {
  const [userText, userPassword] = getUserText();
  if (checkInputsLength(userText, userPassword)) {
    return;
  }
  const encryptedText = encrypt(userText, userPassword);
  displayInputsContent(e, encryptedText, userPassword);
};

encrypter.addEventListener("click", function (e) {
  if (e.target.classList.contains("encrypter__btn-encrypt")) {
    encryptHandler(e.target);
  }
});

//
//
//
//test encryptor
const userText1 = "This is an encrypted message";
const userPsw1 = "aaaaaaaa";

const userText2 = "Hello Emit";
const userPsw2 = "fwf1451wf5a84fw";

const encryptedText = "s eydsev$T anp s!@^aaaahinctma*Hgis reeg%maaaa";
const pswEncrypted = "aaaaaaaa";

const encryptedText2 = "lm*HglE!@^w15w58fe tv$Hoi%mff41fa4w";

// console.log("encrypted--", encrypt(userText1, userPsw1));
console.log("encrypted--", encrypt(userText2, userPsw2));
console.log("decrypted--", decrypt(encryptedText2, userPsw2));
// console.log("decrypted--", decrypt(encryptedText, pswEncrypted));
