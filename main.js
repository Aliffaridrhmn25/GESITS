function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const kota = document.getElementById("kota").value;
  const no_hp = document.getElementById("no_hp").value;

  const status = checkboxIsChecked();

  return {
    name,
    email,
    kota,
    no_hp,
    status,
  };
}

function checkboxIsChecked() {
  const checkbox = document.getElementById("status");
  return checkbox.checked;
}

function validateFormData(formData) {
  var checkbox = checkboxIsChecked();

  if (formData !== null && checked) {
    return true;
  } else {
    return false;
  }
}
function submit(event) {
  event.preventDefault();

  const formData = handleGetFormData();
  const isValid = validateFormData(formData);
  const warningDiv = document.getElementById("warning");

  if (!isValid) {
    warningDiv.textContent = "Periksa form anda sekali lagi";
  } else {
    warningDiv.textContent = "";
    // Menampilkan alert jika data berhasil disimpan
    alert("Data berhasil disimpan!");
  }
}

const form = document.getElementById("my-form");
form.addEventListener("submit", submit);
