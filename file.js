// Initialize Isotope
var iso = new Isotope('.portfolio-item', {
    itemSelector: '.item',
    layoutMode: 'fitRows'
});

// Select all menu items
var menuItems = document.querySelectorAll('.portfolio-menu ul li');

// Add click event listeners
menuItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        // Remove 'active' class from all
        menuItems.forEach(function(li) {
            li.classList.remove('active');
        });

        // Add 'active' class to clicked item
        this.classList.add('active');

        // Get filter from data attribute
        var selector = this.getAttribute('data-filter');

        // Filter Isotope items
        iso.arrange({
            filter: selector
        });
    });
});
