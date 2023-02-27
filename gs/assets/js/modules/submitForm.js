export default function submitForm(formID) {
  const form = document.getElementById(formID);
  const inputs = Array.from(document.querySelectorAll("input")).filter(
    (item) => !item.classList.contains("submit-button")
  );

  const textareas = document.querySelectorAll("textarea");

  const messageContent = {
    loading: `It's loading. Please wait..`,
    success: `Thank you! We contact you later.`,
    failure: `Sorry.. Please try again.`,
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
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

  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: "300994675",
        parse_mode: "html",
        text: data,
      }),
    });

    return await res.text();
  };

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const URL =
      "https://api.telegram.org/bot6107487606:AAFkxB893l1vzE0PIjIA-lRqWiclu2zNFv8/sendMessage";

    const formData = new FormData(event.currentTarget);

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const chooseServices = formData.getAll("chooseServices");
    const message = formData.get("message");

    const txt = `Full Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nChoose services: ${chooseServices}\n${message}\n`;

    const messageEl = document.querySelector(".status-message");

    messageEl.textContent = messageContent.loading;
    messageEl.classList.add("visible");

    postData(URL, txt)
      .then((response) => {
        messageEl.textContent = messageContent.success;
        // response.json();
      })
      .catch((error) => (messageEl.textContent = messageContent.failure))
      .finally(() => {
        setTimeout(() => {
          messageEl.classList.remove("visible");
        }, 4000);
        clearInputs();
      });
  });
}
