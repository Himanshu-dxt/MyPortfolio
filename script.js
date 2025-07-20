document.addEventListener('DOMContentLoaded', function() {
            // Sidebar toggle functionality
            const menuToggle = document.querySelector('.menu-toggle');
            const sidebar = document.getElementById('sidebar');
            const body = document.body;
            let isOpen = false;

            menuToggle.addEventListener('click', function() {
                isOpen = !isOpen;
                
                if (isOpen) {
                    sidebar.classList.add('active');
                    body.classList.add('sidebar-open');
                    menuToggle.innerHTML = '<i class="fas fa-times"></i>';
                    menuToggle.style.transform = 'rotate(90deg)';
                } else {
                    sidebar.classList.remove('active');
                    body.classList.remove('sidebar-open');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                    menuToggle.style.transform = 'rotate(0deg)';
                }
            });

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        // Close sidebar if open
                        if (isOpen) {
                            sidebar.classList.remove('active');
                            body.classList.remove('sidebar-open');
                            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                            menuToggle.style.transform = 'rotate(0deg)';
                            isOpen = false;
                        }
                        
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