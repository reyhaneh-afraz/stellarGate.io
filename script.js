
const text = "𝚆𝚎 𝚝𝚊𝚕𝚔 𝚝𝚘 𝚜𝚝𝚊𝚛𝚜, 𝚍𝚛𝚒𝚗𝚔 𝚖𝚘𝚘𝚗𝚕𝚒𝚐𝚑𝚝,\n𝚊𝚗𝚍 𝚘𝚌𝚌𝚊𝚜𝚒𝚘𝚗𝚊𝚕𝚕𝚢 𝚠𝚊𝚟𝚎 𝚊𝚝 𝚊𝚕𝚒𝚎𝚗𝚜.\n𝙸𝚏 𝚜𝚙𝚊𝚌𝚎 𝚖𝚊𝚔𝚎𝚜 𝚢𝚘𝚞𝚛 𝚑𝚎𝚊𝚛𝚝 𝚜𝚔𝚒𝚙 𝚊 𝚋𝚎𝚊𝚝,\n𝚢𝚘𝚞'𝚛𝚎 𝚒𝚗 𝚝𝚑𝚎 𝚛𝚒𝚐𝚑𝚝 𝚐𝚊𝚕𝚊𝚡𝚢";
const text2 = " 𝚆𝚎 𝚝𝚊𝚕𝚔 𝚝𝚘 𝚜𝚝𝚊𝚛𝚜, 𝚍𝚛𝚒𝚗𝚔 𝚖𝚘𝚘𝚗𝚕𝚒𝚐𝚑𝚝,\n𝚊𝚗𝚍 𝚘𝚌𝚌𝚊𝚜𝚒𝚘𝚗𝚊𝚕𝚕𝚢 𝚠𝚊𝚟𝚎 𝚊𝚝 𝚊𝚕𝚒𝚎𝚗𝚜.\n𝙸𝚏 𝚜𝚙𝚊𝚌𝚎 𝚖𝚊𝚔𝚎𝚜 𝚢𝚘𝚞𝚛 𝚑𝚎𝚊𝚛𝚝 𝚜𝚔𝚒𝚙 𝚊 𝚋𝚎𝚊𝚝, 𝚢𝚘𝚞'𝚛𝚎 𝚒𝚗 𝚝𝚑𝚎 𝚛𝚒𝚐𝚑𝚝 𝚐𝚊𝚕𝚊𝚡𝚢 ";
const container = document.getElementById("typewriter");
let index = 0;

function typeWriter() {
  if (window.innerWidth <= 1000) {
    if (index < text.length) {
      container.innerHTML += (text[index] === "\n") ? "<br>" : text[index]
      index++;
      setTimeout(typeWriter, 50);
    }
  } else {
    if (index < text2.length) {
      container.innerHTML += (text2[index] === "\n") ? "<br>" : text2[index]
      index++;
      setTimeout(typeWriter, 50);
    }
  }

}
typeWriter()

const containerr = document.querySelector('.container');
const mainBtn = document.querySelector('.main-btn');

mainBtn.addEventListener("click", () => {
  containerr.classList.toggle('active');
});

const containerrr = document.querySelector(".container");

document.body.addEventListener("click", (event) => {

  if (!containerrr.contains(event.target)) {
    containerrr.classList.remove("active");
  }
});

const messages = [
  "𝘞𝘦𝘭𝘤𝘰𝘮𝘦, 𝘦𝘹𝘱𝘭𝘰𝘳𝘦𝘳",
  "𝘙𝘦𝘢𝘥𝘺 𝘵𝘰 𝘭𝘢𝘶𝘯𝘤𝘩 𝘪𝘯𝘵𝘰 𝘴𝘱𝘢𝘤𝘦"
];

let current = 0;
const messageBox = document.getElementById("message");

setInterval(() => {

  messageBox.style.opacity = 0;

  setTimeout(() => {
    current = (current + 1) % messages.length;
    messageBox.textContent = messages[current];
    messageBox.style.opacity = 1;
  }, 500);
}, 4000);




const btn = document.getElementById("login-btn");
const overlay = document.getElementById("loginOverlay");

btn.addEventListener("click", () => {
  overlay.classList.add("show");
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("show");
  }
});


const loginBox = document.querySelector(".login-box");
const enterBtn = loginBox.querySelector("button");
const passwordInput = loginBox.querySelector('input[type="password"]');

let message = document.createElement("div");
message.style.marginTop = "8px";
message.style.fontSize = "14px";
message.style.fontWeight = "bold";
loginBox.appendChild(message);

enterBtn.addEventListener("click", () => {
  const password = passwordInput.value;
  const hasUppercase = /[A-Z]/.test(password);
  const isLongEnough = password.length >= 6;

  if (!hasUppercase || !isLongEnough) {
    message.textContent = "𝖳𝗁𝖾 𝗉𝖺𝗌𝗌𝗐𝗈𝗋𝖽 𝗆𝗎𝗌𝗍 𝗁𝖺𝗏𝖾 𝖺𝗍 𝗅𝖾𝖺𝗌𝗍 6 𝖼𝗁𝖺𝗋𝖺𝖼𝗍𝖾𝗋𝗌 𝖺𝗇𝖽 𝗈𝗇𝖾 𝗎𝗉𝗉𝖾𝗋𝖼𝖺𝗌𝖾 𝗅𝖾𝗍𝗍𝖾𝗋";
    message.style.color = "red";
  } else {
    message.textContent = "𝖳𝗁𝖾 𝗉𝖺𝗌𝗌𝗐𝗈𝗋𝖽 𝗂𝗌 𝗏𝖺𝗅𝗂𝖽✅";
    message.style.color = "limegreen";
  }
});