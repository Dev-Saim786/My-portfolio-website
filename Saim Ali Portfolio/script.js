function showSidebar() {
    const show = document.getElementById('open');
    const sidebar = document.getElementById('sidenav');
    const hide = document.getElementById('close');
    const toggleDark = document.getElementById('light');
    const checkDark = document.body;

    // Toggle sidebar open
    show.addEventListener('click', () => {
        sidebar.classList.add('active');
    });

    // Toggle sidebar close
    hide.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });

    // Close sidebar when clicking links
    const listItems = document.querySelectorAll('.links');
    listItems.forEach(item => {
        item.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    });

    // Dark mode functionality
    function darkmode() {
        checkDark.classList.toggle('dark');
        
        if (checkDark.classList.contains('dark')) {
            toggleDark.style.filter = 'invert(1)'
            show.style.filter = 'invert(1)';
            hide.style.filter = 'invert(1)';
        } else {
            show.style.filter = 'none';
            hide.style.filter = 'none';
            toggleDark.style.filter = 'none';
        }
    }

    // Add dark mode toggle event listener
    toggleDark.addEventListener('click', darkmode);
}

// Call the function to initialize
showSidebar();