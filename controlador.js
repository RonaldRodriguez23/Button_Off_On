const toggleSwitch = document.getElementById('toggleSwitch');

toggleSwitch.addEventListener('click', () => {
    toggleSwitch.classList.toggle('active');
    const isActive = toggleSwitch.classList.contains('active');
    toggleSwitch.setAttribute('aria-checked', isActive ? 'true' : 'false');
});

const toggleSwitch2 = document.getElementById('toggleSwitch2');

toggleSwitch2.addEventListener('click', () => {
    toggleSwitch2.classList.toggle('active');
    toggleSwitch2.setAttribute('aria-checked',isActive ? 'true': 'false')
});