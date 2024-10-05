console.log("First")
document.getElementById('signup-form').addEventListener('submit', function(e) {
    console.log("Second")
    e.preventDefault();
  
    const firstName = document.getElementById('first-name').value;
    console.log("fisrt name ", firstName)
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const password = document.getElementById('password').value;
  
    // Log the form data to the console
    console.log('Form Submitted!');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
  });
  