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

