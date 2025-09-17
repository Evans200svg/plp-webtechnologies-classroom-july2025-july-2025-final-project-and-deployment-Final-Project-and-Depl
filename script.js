// Highlight nav links on hover
document.querySelectorAll('.nav .ul li a').forEach(link => {
    link.addEventListener('mouseenter', () => link.classList.add('nav-hover'));
    link.addEventListener('mouseleave', () => link.classList.remove('nav-hover'));
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Course card hover effect
document.querySelectorAll('.course-item').forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('course-hover'));
    card.addEventListener('mouseleave', () => card.classList.remove('course-hover'));
});

// Toast notification for "Enroll now"
const enrollBtn = document.querySelector('.btn');
if (enrollBtn) {
    enrollBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showToast('Redirecting to enrollment...');
        setTimeout(() => window.location.href = enrollBtn.href, 1200);
    });
}

// Toast function
function showToast(message) {
    let toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '30px';
    toast.style.right = '30px';
    toast.style.background = '#222';
    toast.style.color = '#fff';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '8px';
    toast.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    toast.style.zIndex = '9999';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1000);
}

// Dark mode toggle button
const footer = document.querySelector('footer');
if (footer) {
    let darkBtn = document.createElement('button');
    darkBtn.textContent = '🌙 Dark Mode';
    darkBtn.style.marginLeft = '16px';
    darkBtn.style.padding = '6px 12px';
    darkBtn.style.borderRadius = '6px';
    darkBtn.style.border = 'none';
    darkBtn.style.cursor = 'pointer';
    footer.appendChild(darkBtn);

    darkBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
}