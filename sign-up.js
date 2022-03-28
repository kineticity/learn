//const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

var success=0;
// form.addEventListener('submit', e => {
// 	e.preventDefault();
	
// 	checkInputs();
// 	if(success!=4)
// 	{
// 		e.preventDefault();
// 	}
// });

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const atposition=emailValue.indexOf('@');
    const dotposition=emailValue.lastIndexOf('.');
	
	
    
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
		return false;
	} else {
		setSuccessFor(username);
		success++;
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
		return false;
		/*document.getElementById("demo").innerHTML ="Please enter a valid email\natposition"+atposition+"dotposition:"+dotposition+"email length"+emailValue.length;*/
	} else {
		setSuccessFor(email);
		success++;
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
		return false;
	} else {
		setSuccessFor(password);
		success++;
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
		return false;
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
		return false;
	} else{
		setSuccessFor(password2);
		success++
	}
	if(success==4)
	{
		return true;
	}
	else{
		return false;
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	/*return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
*/
    const atposition=email.indexOf('@');
    const dotposition=email.lastIndexOf('.');
    if(atposition<1|| dotposition<atposition+2|| dotposition+2>=email.length)
    {
	    //alert("Please enter a valid email\natposition"+atposition+"dotposition:"+dotposition+"email length"+email.length);
	    return false;
    } 
	else
	{
		return true;
	}
}













