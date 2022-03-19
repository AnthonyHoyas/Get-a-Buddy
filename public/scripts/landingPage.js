let testBtn = document.getElementById('testBtn');


testBtn.addEventListener('click', (event) => {
    event.preventDefault();
    alert('working');
    console.log('working');
})