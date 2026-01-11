document.addEventListener("DOMContentLoaded", () => {
    const copyrightYear = document.getElementById("copyright-year");
    if (copyrightYear) {
        copyrightYear.innerHTML = `&copy; ${new Date().getFullYear()}`;
    }
    const lastModified = document.getElementById("last-modified");
    if (lastModified) {
        lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }
});
