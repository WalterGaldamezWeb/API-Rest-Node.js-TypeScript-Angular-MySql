CREATE DATABASE productos_db;

USE productos_db;

CREATE TABLE productos(
    id INT (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150), 
    descripcion VARCHAR(255),
    imagen VARCHAR(255),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE productos;