 function validateForm() {
   const phone = document.getElementById("phone").value.trim();
   const password = document.getElementById("password").value.trim();
   const confirmPassword = document.getElementById("confirmPassword").value.trim();

   if (!/^\d{11}$/.test(phone)) {
     alert("Phone number must be exactly 11 digits.");
     return false;
  }

   const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
   if (!passPattern.test(password)) {
     alert("The password must be a minimum of eight characters and contain at least one uppercase letter, one lowercase letter, one numeral, and one special character..");
     return false;
  }

   if (password !== confirmPassword) {
     alert("The passwords entered do not match. Please try again.");
     return false;
  }

   alert("Form submitted successfully!");
  return true;
}