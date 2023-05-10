function submitForm(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores del formulario
    var nombre = document.querySelector('input[name="nom"]').value;
    var correo = document.querySelector('input[name="correo"]').value;
    var sugerencia = document.querySelector('textarea[name="men"]').value;

    // Crear un objeto FormData y agregar los datos del formulario
    var formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('correo', correo);
    formData.append('sugerencia', sugerencia);

    // Enviar los datos al servidor utilizando fetch
    fetch('https://api.example.com/form', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        if (response.ok) {
            console.log('¡Formulario enviado!');
            // Aquí puedes realizar acciones adicionales después de enviar el formulario
        } else {
            console.error('Error al enviar el formulario.');
        }
    })
    .catch(function(error) {
        console.error('Error de red:', error);
    });
}