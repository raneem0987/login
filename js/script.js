document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    

    if (username && password) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        
        window.location.href = 'index.html';
    } else {
        alert('Please enter both username and password.');
    }
});
