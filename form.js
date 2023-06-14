document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Checks that the password is 12345678
    const password = document.getElementById('password').value;
    const heading = document.getElementById('heading');

    if (password == '12345678')
        heading.textContent = 'Correct password';
    else
        alert('Incorrect password');

});