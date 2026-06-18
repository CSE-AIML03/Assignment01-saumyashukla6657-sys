// ===================== CART SYSTEM =====================

let cartCount = Number(localStorage.getItem("cart")) || 0;

const cart = document.querySelector(".nav-cart");

const badge = document.createElement("span");

badge.style.backgroundColor = "orange";
badge.style.color = "black";
badge.style.padding = "2px 8px";
badge.style.borderRadius = "50%";
badge.style.marginLeft = "5px";
badge.innerText = cartCount;

cart.appendChild(badge);

// ===================== TOAST NOTIFICATION =====================

function showToast(message) {

    const toast = document.createElement("div");

    toast.innerText = message;

    toast.style.position = "fixed";
    toast.style.top = "20px";
    toast.style.right = "20px";
    toast.style.background = "#232f3e";
    toast.style.color = "white";
    toast.style.padding = "15px";
    toast.style.borderRadius = "10px";
    toast.style.zIndex = "1000";
    toast.style.boxShadow = "0 0 10px rgba(0,0,0,0.4)";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2500);
}

// ===================== SEARCH FILTER =====================

const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    document.querySelectorAll(".box").forEach(box => {

        const title =
            box.querySelector("h2")
            .innerText
            .toLowerCase();

        if (title.includes(value)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }

    });

});

// ===================== PRODUCT FEATURES =====================

document.querySelectorAll(".box").forEach(box => {

    const title =
        box.querySelector("h2").innerText;

    // Wishlist Heart

    const heart = document.createElement("span");

    heart.innerHTML = "🤍";

    heart.style.float = "right";
    heart.style.cursor = "pointer";

    box.querySelector("h2").appendChild(heart);

    heart.addEventListener("click", (e) => {

        e.stopPropagation();

        heart.innerHTML =
            heart.innerHTML === "🤍"
            ? "❤️"
            : "🤍";

    });

    // Rating

    const rating = document.createElement("div");

    rating.innerHTML = "⭐⭐⭐⭐☆";

    rating.style.marginTop = "10px";

    box.querySelector(".box-content")
        .appendChild(rating);

    // Add To Cart

    box.addEventListener("click", () => {

        cartCount++;

        badge.innerText = cartCount;

        localStorage.setItem(
            "cart",
            cartCount
        );

        showToast(
            `${title} added to cart 🛒`
        );

    });

});

// ===================== BACK TO TOP =====================

document.querySelector(".foot-panel1")
.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===================== LOCATION UPDATE =====================

document.querySelector(".nav-address")
.addEventListener("click", () => {

    const city = prompt(
        "Enter your city"
    );

    if(city){

        document.querySelector(
            ".add-first"
        ).innerText =
        `Delivering to ${city}`;

        showToast(
            `Location updated to ${city}`
        );
    }

});

// ===================== SCROLL PROGRESS BAR =====================

const progress =
document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.width = "0%";
progress.style.background = "orange";
progress.style.zIndex = "9999";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent =
        (scrollTop / height) * 100;

    progress.style.width =
        percent + "%";

});

// ===================== DEAL OF THE DAY =====================

const dealBanner =
document.createElement("div");

dealBanner.style.background =
"#febd69";

dealBanner.style.color =
"black";

dealBanner.style.textAlign =
"center";

dealBanner.style.padding =
"10px";

dealBanner.style.fontWeight =
"bold";

document.body.insertBefore(
    dealBanner,
    document.body.firstChild
);

const deals = [

"🔥 50% OFF on Electronics",
"📱 Mobile Sale Live",
"🎁 Buy 1 Get 1 Free",
"🚚 Free Delivery Today",
"💥 Flash Sale Started"

];

function updateDeal() {

    dealBanner.innerText =
    deals[Math.floor(
        Math.random() *
        deals.length
    )];

}

updateDeal();

setInterval(updateDeal, 5000);

// ===================== DARK MODE =====================

const darkBtn =
document.createElement("button");

darkBtn.innerText = "🌙";

darkBtn.style.position = "fixed";
darkBtn.style.bottom = "20px";
darkBtn.style.left = "20px";
darkBtn.style.padding = "10px";
darkBtn.style.border = "none";
darkBtn.style.borderRadius = "50%";
darkBtn.style.cursor = "pointer";
darkBtn.style.zIndex = "999";

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("darkMode");

    darkBtn.innerText =
    document.body.classList.contains("darkMode")
    ? "☀️"
    : "🌙";

});

// ===================== WELCOME MESSAGE =====================

window.addEventListener("load", () => {

    setTimeout(() => {

        showToast(
            "Welcome to Amazon Clone 🚀"
        );

    }, 1000);

});