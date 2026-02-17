// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.nav-bar-menu .icon');
    const mobileMenu = document.querySelector('.nav-bar-menu .menu-bar');
    
    if (menuIcon && mobileMenu) {
        menuIcon.addEventListener('click', function() {
            mobileMenu.classList.toggle('show');
            
            // Change icon based on menu state
            const icon = menuIcon.querySelector('i');
            if (mobileMenu.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on a link
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('show');
                const icon = menuIcon.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuIcon.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.remove('show');
                const icon = menuIcon.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});
    
