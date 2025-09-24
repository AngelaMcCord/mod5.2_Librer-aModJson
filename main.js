// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        // Aquí simulas leer el JSON con un retraso de 1 segundo
        callback(biblioteca);
    }, 1000);
}

// 1. Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

// 2. Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    // Aquí falta la simulación de escribir el libro en el "archivo" (es decir, agregarlo al objeto)
    setTimeout(() => {
        biblioteca.libros.push(nuevoLibro);
        console.log(`Libro agregado: ${titulo}`);
    }, 1000);
}

// 3. Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    // Simula un retraso antes de actualizar la disponibilidad
    setTimeout(() => {
        const libro = biblioteca.libros.find(l => l.titulo === titulo);
        if (libro) {
            libro.disponible = nuevoEstado; // cambiamos el estado
            console.log(`Disponibilidad actualizada: ${titulo} -> ${nuevoEstado ? "Disponible" : "Prestado"}`);
            } else {
            console.log(`Libro no encontrado: ${titulo}`);
        }  
    }, 1000);
}
// 4. Simulación

// Ejemplo de cómo ejecutar la aplicación
mostrarLibros();
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibilidad("1984", false);

mostrarLibros();
agregarLibro("El código DaVinci", "Dan Brown", "Misterio", true);

setTimeout(() => {
    mostrarLibros();
    actualizarDisponibilidad("1984", false);
}, 3000);

setTimeout(() => {
    mostrarLibros();
}, 6000);

setTimeout(() => {
    mostrarLibros();
    actualizarDisponibilidad("El código DaVinci", false);
}, 6000);

/* resultados:
1. Cien años de soledad - Gabriel García Márquez (Disponible)      
2. 1984 - George Orwell (Prestado)
3. El principito - Antoine de Saint-Exupéry (Disponible)
4. El código DaVinci - Dan Brown (Disponible)
Disponibilidad actualizada: El código DaVinci -> Prestado
*/