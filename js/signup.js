function processSignUp() {
  event.preventDefault();
  
 /*  Included just for the basis of the assignment so that it can be shown
  that the email address was captured after form submission */
  console.log("Thanks for signing up for our mailing list, "+ document.getEmail.email.value+"!");
  
  /* Message displayed to user in the form input field */
  document.getEmail.email.value = "Thanks for signing up!";
  
}

function restorePlaceHolderText() {
 /* This is an on-focus function that clears any email address and
  restores the input field default of jane@company.com */
  
  document.getEmail.email.value = "";
  
}