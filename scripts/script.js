document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.getElementById("last-modified");
    if (lastModified) {
        lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }

    const courseTitle = document.getElementById("course-title");
    if (courseTitle) {
        courseTitle.innerHTML = "WDD 131 Dynamic Web Fundamentals";
    }

    const copyrightYear = document.getElementById("copyright-year");
    if (copyrightYear) {
        copyrightYear.innerHTML = `Fernando Caballero &copy; ${new Date().getFullYear()} Uruguay`;
    }
});
