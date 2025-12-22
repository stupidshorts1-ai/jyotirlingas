document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       SCROLL-TRIGGERED ROW ANIMATION
       ===================================== */

    const table = document.querySelector(".main-table");
    if (!table) return;

    const rows = table.querySelectorAll("tbody tr");

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    rows.forEach((row, index) => {
                        row.style.animationDelay = `${index * 0.2}s`;
                        row.classList.add("animate");
                    });
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(table);


    /* =====================================
       ROW CLICK NAVIGATION
       ===================================== */

    rows.forEach(row => {
        const link = row.getAttribute("data-link");

        if (link) {
            row.style.cursor = "pointer";
            row.setAttribute("tabindex", "0");

            row.addEventListener("click", () => {
                window.location.href = link;
            });

            // keyboard accessibility
            row.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    window.location.href = link;
                }
            });
        }
    });

});
