document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Доброго вам дня, ${name})! Ви надіслали повідомдення і воно успішно прийшло на нашу корпоративну пошту ми надішлемо вам відповідь через 2хв. або якщо ви хочете ще швидше то поставте хоча б 3 за роботу🥺 я старався`);
        console.log('Name:', name, 'Email:', email, 'Message:', message);
        this.reset();
    } else {
        alert('Ви знайшли великодку вітаю пишіть далі)!');
    }
});

window.onload = function() {
    window.scrollTo(0, 0);

    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
};