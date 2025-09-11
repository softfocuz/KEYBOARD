let inputText = document.querySelector("#inputText");
let deleteText = document.querySelector("#escKey");
let capsLock = false;
let shift = false;

const tapShift = {
  "1": "!",
  "2": "@",
  "3": "#",
  "4": "$",
  "5": "%",
  "6": "^",
  "7": "&",
  "8": "*",
  "9": "(",
  "0": ")",
  "-": "_",
  "=": "+",
  "[": "{",
  "]": "}",
  "\\": "|",
  ";": ":",
  "'": "\"",
  ",": "<",
  ".": ">",
  "/": "?",
  "`": "~"
};

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.id;
    let value = btn.value;

    switch (id) {
      case "backspaceKey":
        inputText.value = inputText.value.slice(0, -1);
        break;

      case "enterKey":
        inputText.value += "\n";
        break;

      case "tabKey":
        inputText.value += "\t";
        break;

      case "spaceKey":
        inputText.value += " ";
        break;

      case "capsLockKey":
        capsLock = !capsLock;
        break;

      case "shiftKey1":
      case "shiftKey2":
        shift = !shift;
        break;

      case "escKey":
        inputText.value = "";
        break;


      default:
        if (value) {
          let basicKeys = value;

          if (/[a-z]/i.test(basicKeys)) {
            if ((capsLock && !shift)||(!capsLock && shift)){  
              basicKeys = basicKeys.toUpperCase();
            } else {
              basicKeys = basicKeys.toLowerCase();
            }
          }

          else if (shift && tapShift[basicKeys]) {
            basicKeys = tapShift[basicKeys];
          } 

          inputText.value += basicKeys;

          if (shift) shift = false; 
        }
    }
  });
});

