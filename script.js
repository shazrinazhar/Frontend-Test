function confirmNavigation(socialMedia) {
    var confirmation = confirm(`Do you want to navigate to ${socialMedia}?`);
    if (confirmation) {
        window.location.href = socialMedia === 'YouTube' ? 'https://www.youtube.com/' :
            socialMedia === 'Twitter' ? 'https://twitter.com/' :
                socialMedia === 'LinkedIn' ? 'https://www.linkedin.com/' : '#';
    }
}



const link = document.getElementById('linkOne');
const drop = document.getElementById('dropDown');
const closeBtn = document.getElementById('close');

// Toggle dropdown on link click
link.addEventListener('click', () => {
    drop.classList.toggle('toggle');
});

// Toggle dropdown on close button click
closeBtn.addEventListener('click', () => {
    drop.classList.toggle('toggle');
});

// Hide dropdown when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideDropDown = drop.contains(event.target);
    const isClickOnLink = link.contains(event.target);

    if (!isClickInsideDropDown && !isClickOnLink) {
        drop.classList.remove('toggle');
    }
});

