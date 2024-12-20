//to fetch nav bar
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    // Insert the NERF bar into the target element (e.g., a <div> with id="navbar")
    document.getElementById('navbar').innerHTML = data;

    // Highlight the active link based on the current URL
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page file name
    const navLinks = document.querySelectorAll('.nav-link');

    // Loop through all nav links and add "active" to the matching one
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  })
  .catch(error => console.error('Error fetching Nav bar:', error));