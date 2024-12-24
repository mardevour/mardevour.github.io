fetch('../content/portada.md')
            .then(response => response.text())
            .then(text => {
                document.getElementById('markdown-content').innerHTML = marked(text);
            })
            .catch(error => console.error('Error al cargar el archivo:', error));