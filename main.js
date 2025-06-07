 document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  // Toggle mobile menu
  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenuOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });

  // Close mobile menu
  mobileMenuClose.addEventListener('click', function() {
    mobileMenu.classList.add('translate-x-full');
    mobileMenuOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  });

  mobileMenuOverlay.addEventListener('click', function() {
    mobileMenu.classList.add('translate-x-full');
    mobileMenuOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  });

  // Mobile dropdown functionality
  const dropdownButtons = document.querySelectorAll('.mobile-dropdown-btn');
  
  dropdownButtons.forEach(button => {
    button.addEventListener('click', function() {
      const dropdown = this.nextElementSibling;
      const isExpanded = dropdown.classList.contains('hidden');
      
      // Close all other dropdowns first
      document.querySelectorAll('.mobile-dropdown').forEach(d => {
        if (d !== dropdown) {
          d.classList.add('hidden');
          // Reset the arrow rotation on other buttons
          const otherBtn = d.previousElementSibling;
          otherBtn.querySelector('svg').style.transform = 'rotate(0deg)';
        }
      });
      
      // Toggle current dropdown
      if (isExpanded) {
        dropdown.classList.remove('hidden');
        this.querySelector('svg').style.transform = 'rotate(180deg)';
      } else {
        dropdown.classList.add('hidden');
        this.querySelector('svg').style.transform = 'rotate(0deg)';
      }
    });
  });
});

          document.getElementById('viewAllBtn').addEventListener('click', function (e) {
        e.preventDefault();
        const extra = document.getElementById('extra-articles');
        extra.classList.toggle('hidden');
        this.textContent = extra.classList.contains('hidden') ? 'View all' : 'Show less';
    });