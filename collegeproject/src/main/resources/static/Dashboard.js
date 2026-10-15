const balance = document.getElementById("balance");
const toggleButton = document.getElementById("toggleBalance");

const actualDemoBalance = "₹ 52,450.00";
let balanceVisible = true;

toggleButton.addEventListener("click", function () {
    balanceVisible = !balanceVisible;

    balance.textContent = balanceVisible
        ? actualDemoBalance
        : "₹ •••••••";

    toggleButton.textContent = balanceVisible
        ? "Hide balance"
        : "Show balance";
});

document.querySelectorAll("[data-action]").forEach(function (button) {
    button.addEventListener("click", function () {
        const action = button.dataset.action;
        const message = document.getElementById("actionMessage");

        message.textContent =
            action + " selected. This demo feature is not connected to a bank.";
    });
});
