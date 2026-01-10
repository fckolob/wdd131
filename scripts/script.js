let lastModified = document.getElementById("last-modified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;
let courseTitle = document.getElementById("course-title");
courseTitle.textContent = "WDD 131 Dynamic Web Fundamentals";
let copyrightYear = document.getElementById("copyright-year");
copyrightYear.innerHTML = `Fernando Caballero &copy; ${new Date().getFullYear()} Uruguay`;