document.addEventListener('DOMContentLoaded', function() {
            // Navigation toggle functionality
            const menuToggle = document.querySelector('.menu-toggle');
            const closeNav = document.querySelector('.close-nav');
            const navbar = document.getElementById('navbar');
            const body = document.body;
            
            menuToggle.addEventListener('click', function() {
                navbar.classList.add('active');
                body.classList.add('menu-open');
            });
            
            closeNav.addEventListener('click', function() {
                navbar.classList.remove('active');
                body.classList.remove('menu-open');
            });
            
            // Close nav when clicking on a link
            document.querySelectorAll('.nav-items a').forEach(link => {
                link.addEventListener('click', function() {
                    navbar.classList.remove('active');
                    body.classList.remove('menu-open');
                });
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // View toggle functionality
            const viewButtons = document.querySelectorAll('.view-btn');
            const viewContents = document.querySelectorAll('.view-content');
            
            viewButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons and contents
                    viewButtons.forEach(btn => btn.classList.remove('active'));
                    viewContents.forEach(content => content.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Show corresponding content
                    const view = this.getAttribute('data-view');
                    document.querySelector(`.${view}-view`).classList.add('active');
                });
            });
            
            // Animate elements when they come into view
            const animateOnScroll = function() {
                const elements = document.querySelectorAll('.dual-purpose, .testimonials');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementPosition < windowHeight - 100) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                });
            };
            
            // Initial check
            animateOnScroll();
            
            // Check on scroll
            window.addEventListener('scroll', animateOnScroll);
        });