var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("contact-name").value;
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
        
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Please enter your first and last name";
        return false;
    }

    nameError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}

function validatePhone(){
    var phone = document.getElementById("contact-phone").value;
    if(phone.length == 0){
        phoneError.innerHTML = "Phone number is required";
        return false;
    }

    if(phone.length >=12){
        phoneError.innerHTML = "phone number should be 10 digits";
        return false;
    }

    if(!phone.match(/^[0-9]{10,12}$/)){
        phoneError.innerHTML = "only numbers are allowed";
        return false;
    }

    phoneError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}

function validateEmail(){
    var email = document.getElementById("contact-email").value;
    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*@[A-Za-z]*\.[A-Za-z]{2,3}$/)){
        emailError.innerHTML = "Email Invalid";
        return false;
    }

    emailError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}


function validateMessage(){
    var message = document.getElementById("contact-Message").value;
    var required = 30;
    var left = required - message.length;

    if(left  > 0){
        messageError.innerHTML = left + " more characters is required";
        return false;
    }


    messageError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = "Form has errors";
        setTimeout(function(){submitError.style.display = "none";}, 3000);
        return false;
    }
}