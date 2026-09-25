let targetText = document.getElementById("messageBox");
let fontType = document.getElementById("fontTypeList");
let fontSize = document.getElementById("fontSizeList");
let italicCheckBox = document.getElementById("italicFont");
let boldCheckBox = document.getElementById("boldFont");
let underlineCheckBox = document.getElementById("underLined");

const fontMap = {
  sans: "sans-serif",
  timesNewRoman: "'Times New Roman', serif"
};

function applyStyles() {
  targetText.style.fontFamily = fontMap[fontType.value];
  targetText.style.fontSize = fontSize.value;
  targetText.style.fontStyle = italicCheckBox.checked ? "italic" : "normal";
  targetText.style.fontWeight = boldCheckBox.checked ? "bold" : "normal";
  targetText.style.textDecoration = underlineCheckBox.checked ? "underline" : "none";
}

document.getElementById("welcomeForm").addEventListener("change", applyStyles);
applyStyles();