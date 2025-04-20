document.getElementById("language").addEventListener("change", function() {
  updateText(this.value);
});

function updateText(language) {
  let welcomeText = document.getElementById("welcomeText");

  switch (language) {
      case 'fa':
          welcomeText.textContent = "به بیمارستان اسکیلستونا خوش آمدید. لطفا زبان خود را انتخاب کرده و شماره شناسایی خود را وارد کنید.";
          break;
      case 'en':
          welcomeText.textContent = "Welcome to Eskilstuna Hospital. Please choose your language and enter your personal number to proceed.";
          break;
      case 'ar':
          welcomeText.textContent = "مرحبا بكم في مستشفى إسكلستونا. يرجى اختيار لغتك وإدخال رقمك الشخصي للمتابعة.";
          break;
      case 'sv':
          welcomeText.textContent = "Välkommen till Eskilstuna sjukhus. Vänligen välj ditt språk och ange ditt personnummer för att fortsätta.";
          break;
      default:
          welcomeText.textContent = "Please choose a valid language.";
  }
}

function playVoice() {
  let language = document.getElementById("language").value;
  let msg = new SpeechSynthesisUtterance();

  switch (language) {
      case 'fa':
          msg.text = "به بیمارستان اسکیلستونا خوش آمدید. لطفا زبان خود را انتخاب کرده و شماره شناسایی خود را وارد کنید.";
          msg.lang = 'fa-IR';
          break;
      case 'en':
          msg.text = "Welcome to Eskilstuna Hospital. Please choose your language and enter your personal number to proceed.";
          msg.lang = 'en-US';
          break;
      case 'ar':
          msg.text = "مرحبا بكم في مستشفى إسكلستونا. يرجى اختيار لغتك وإدخال رقمك الشخصي للمتابعة.";
          msg.lang = 'ar-SA';
          break;
      case 'sv':
          msg.text = "Välkommen till Eskilstuna sjukhus. Vänligen välj ditt språk och ange ditt personnummer för att fortsätta.";
          msg.lang = 'sv-SE';
          break;
      default:
          msg.text = "Please choose a valid language.";
          msg.lang = 'en-US';
  }

  window.speechSynthesis.speak(msg);
}

function checkAppointment() {
  let personalNumber = document.getElementById("personalNumber").value;

  if (personalNumber.length > 0) {
      window.location.href = "confirmation/confirmation.html";
  } else {
      alert("Please enter a valid personal number.");
  }
}