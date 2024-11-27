DROP DATABASE IF EXISTS biblioteca;
CREATE DATABASE IF NOT EXISTS biblioteca;
USE biblioteca;

CREATE TABLE libros (
    id_libro INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    genero VARCHAR(100) NOT NULL,
    editorial VARCHAR(255) NOT NULL,
    año INT NOT NULL,
    isbn VARCHAR(13) UNIQUE NOT NULL,
    cantidad INT NOT NULL,
    ubicacion VARCHAR(100) NOT NULL
);