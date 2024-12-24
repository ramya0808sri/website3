// Function to show the selected page and hide others
function showPage(page) {
  // Hide all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  // Show the selected page
  const selectedPage = document.getElementById(page);
  if (selectedPage) {
    selectedPage.style.display = 'block';
  }
}

// Initially show the "Home" section when the page loads
window.onload = () => {
  showPage('home');
};