fetch('/zine/presets/bar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;
    })
    .catch(error => {
        console.error('Error al cargar el encabezado:', error);
    });