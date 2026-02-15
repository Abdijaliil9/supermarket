// ===============================
// QEYBTA JUMLADA
// ===============================
const jumlaButtons = document.querySelectorAll('.center .btn3');

jumlaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert("qudartan xarunta company-ga ayad ka heleysa");
    });
});

// ===============================
// QEYBTA TAFARIQDA
// ==============================
let total = 1;

const prices = {
    toon: 4,
    baamiye: 3.5,
    ansalato: 2,
    kabsar: 1.25,
    qaro: 4,
    barbaroni: 1.5,
    baradho: 3.2,
    karooto: 2.2
};

const totalText = document.getElementById('totalAmount');
const tafariqButtons = document.querySelectorAll('.qudaar .btn3');

tafariqButtons.forEach(btn => {
    btn.addEventListener('click', () => {

        // magaca sheyga
        const itemName = btn.previousElementSibling.textContent;
        alert(itemName+ " "+ "is added to the cart");

        // ku dar qiimaha
        const id = btn.id;
        if (prices[id]) {
            total += prices[id];
            totalText.textContent = "$" + total.toFixed(2);
        }
    });
});
// qeybta kore
let kor=document.getElementById("kor")
kor.addEventListener("click", () => {
    orderSection.style.display = "block";
    orderSection.scrollIntoView({ behavior: "smooth" });
});

// order
// PROCEED ORDER BUTTON
// PROCEED ORDER

const proceedBtn = document.getElementById("order");
const orderSection = document.getElementById("orderSection");

proceedBtn.addEventListener("click", () => {
    orderSection.style.display = "block";
    orderSection.scrollIntoView({ behavior: "smooth" });
});

// SEND ORDER (HTML RESULT)
const sendOrderBtn = document.getElementById("sendOrder");
const orderResult = document.getElementById("orderResult");
const resultText = document.getElementById("resultText");

sendOrderBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const location = document.getElementById("location").value;
    const message = document.getElementById("message").value;

    if (name ===  "" || email === "" || location === "" || message ==="") {
        alert("Fadlan buuxi dhammaan xogta muhiimka ah");
        return;
    }
    if (/\d/.test(name)) {
    alert("Magaca wa ino ka koban yahy xarfo kaliya ❌");
    return;
}


    // Ku qor HTML-ka
    resultText.innerHTML = `
        <strong>Magac:</strong> ${name} <br>
        <strong>Gmail:</strong> ${email} <br>
        <strong>Goobta Delivery:</strong> ${location} <br>
        <strong>Fariin:</strong> ${message} 
        
    `;

    orderResult.style.display = "block";
    orderResult.scrollIntoView({ behavior: "smooth" });
    
});
