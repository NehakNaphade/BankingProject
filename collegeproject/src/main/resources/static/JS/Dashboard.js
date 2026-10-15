const links = document.querySelectorAll(".sidebar nav a");
const pageTitle = document.getElementById("pageTitle");
const message = document.getElementById("message");

links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        if (link.getAttribute("href") === "#") {
            event.preventDefault();
        }

        links.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

        const page = link.dataset.page || "Dashboard";
        pageTitle.textContent = page;
        message.textContent =
            page === "Dashboard"
                ? "Showing the dashboard demo."
                : page + " selected. Backend integration is pending.";
    });
});
