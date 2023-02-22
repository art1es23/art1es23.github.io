export default function submitForm(formID) {
  const form = document.getElementById(formID);
  const inputs = Array.from(document.querySelectorAll("input")).filter(
    (item) => !item.classList.contains("submit-button")
  );

  const textareas = document.querySelectorAll("textarea");

  const clearInputs = () => {
    inputs.forEach((input) => {
      console.log(input);
      input.type === "checkbox" ? (input.checked = false) : (input.value = "");
    });
    textareas.forEach((input) => (input.value = ""));
  };

  const phone_input = document.getElementById("phone");

  phone_input.addEventListener("input", () => {
    phone_input.setCustomValidity("");
    phone_input.checkValidity();
  });

  phone_input.addEventListener("invalid", () => {
    if (phone_input.value === "") {
      phone_input.setCustomValidity("Enter phone number!");
    } else {
      phone_input.setCustomValidity(
        "Enter phone number in this format: 0674307890"
      );
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const chooseServices = formData.getAll("chooseServices");
    const message = formData.get("message");

    const txt = `Full Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nChoose services: ${chooseServices}\n${message}\n`;

    fetch(
      "https://api.telegram.org/bot6087831368:AAFmLrIXYVNn0qSRIAKvq6mCMwPcjX9peds/sendMessage",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "300994675",
          parse_mode: "html",
          text: txt,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        clearInputs();
      })
      .catch((error) => console.error(error));
  });
}

// export { submitForm };
