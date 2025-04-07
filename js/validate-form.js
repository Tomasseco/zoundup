function validateForm() {
    console.log("Validando formulario...");
    const form = document.getElementById("contact-form");
    const name = form.elements["nombre"].value.trim();
    const email = form.elements["email"].value.trim();
    const dto = form.elements["departamento"].value;
    const question = form.elements["consulta"].value.trim();
  
    // Limpiar errores previos
    clearErrors();
  
    let valid = true;
  
    if (name === "") {
      showError("error-nombre", "Por favor, ingrese su nombre.");
      valid = false;
    }
  
    if (email === "") {
      showError("error-email", "El email es obligatorio.");
      valid = false;
    } else if (!validateEmail(email)) {
      showError("error-email", "El formato del email no es válido.");
      valid = false;
    }
  
    if (dto === "") {
      showError("error-departamento", "Seleccione un departamento.");
      valid = false;
    }
  
    if (question === "") {
      showError("error-consulta", "La consulta no puede estar vacía.");
      valid = false;
    } else if (question.length < 10) {
      showError("error-consulta", "La consulta debe tener al menos 10 caracteres.");
      valid = false;
    }
    if (valid) {
        clearErrors();
        showOk("Se ha enviado el formulario correctamente.");
        form.elements["nombre"].value = "";
        form.elements["email"].value = "";
        form.elements["departamento"].value = "";
        form.elements["consulta"].value = "";
      return false;
    }

  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  
  function showError(id, message) {
    const errorDiv = document.getElementById(id);
    if (errorDiv) {
      errorDiv.textContent = message;
    }
  }

  function showOk(message) {
    const successDiv = document.getElementById("consulta-satisfactoria");
    if (successDiv) {
        successDiv.textContent = message;
    }
  }
  
  function clearErrors() {
    const errorDivs = document.querySelectorAll(".error");
    errorDivs.forEach(div => div.textContent = "");
  }
  