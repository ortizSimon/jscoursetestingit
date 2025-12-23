const submitButton = document.getElementById('submitBtn');

function submitFeedback() {
  // Leer valores del formulario
  const username = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const job = document.getElementById('job').value;
  const designation = document.getElementById('designation').value;
  const productType = document.getElementById('productType').value;
  const feedback = document.getElementById('feedbackText').value;

  // Mostrar en el bloque de userInfo
  document.getElementById('userName').textContent = username;
  document.getElementById('userAge').textContent = age;
  document.getElementById('userEmail').textContent = email;
  document.getElementById('userJob').textContent = job;
  document.getElementById('userDesignation').textContent = designation;
  document.getElementById('userProductChoice').textContent = productType;
  document.getElementById('userFeedback').textContent = feedback;

  document.getElementById('userInfo').style.display = 'block';
  alert('Thank you for your valuable feedback');
}

// Click del botón
submitButton.addEventListener('click', submitFeedback);

// Enter (solo si NO estás escribiendo en el textarea)
document.addEventListener('keydown', function (event) {
  const tag = document.activeElement.tagName.toLowerCase();
  if (event.key === 'Enter' && tag !== 'textarea') {
    submitFeedback();
  }
});
