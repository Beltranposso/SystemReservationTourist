-- Tabla de Usuarios
CREATE TABLE Usuarios (
    id_usuario INT PRIMARY KEY,
    nombre VARCHAR(100),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabla de Guías
CREATE TABLE Guias (
    id_guia INT PRIMARY KEY,
    nombre VARCHAR(100),
    especialidad VARCHAR(100),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabla de Experiencias
CREATE TABLE Experiencias (
    id_experiencia INT PRIMARY KEY,
    nombre VARCHAR(100),
    precio DECIMAL(10,2),
    capacidad_maxima INT,
    id_guia INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_guia) REFERENCES Guias(id_guia)
);

-- Tabla de Reservas (intermedia para relación M:N entre Usuarios y Experiencias)
CREATE TABLE Reservas (
    id_reserva INT PRIMARY KEY,
    id_usuario INT,
    id_experiencia INT,
    fecha_reserva DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_experiencia) REFERENCES Experiencias(id_experiencia)
);


INSERT INTO Guias (id_guia, nombre, especialidad) VALUES
(1, 'Laura Ramírez', 'Montañismo'),
(2, 'Carlos Díaz', 'Snorkel');

INSERT INTO Experiencias (id_experiencia, nombre, precio, capacidad_maxima, id_guia) VALUES
(1, 'Senderismo en el Nevado', 100.00, 12, 1),
(2, 'Aventura en las Cascadas', 80.00, 15, 1),
(3, 'Exploración Submarina', 150.00, 10, 2);


INSERT INTO Usuarios (id_usuario, nombre) VALUES
(1, 'Ana Torres'),
(2, 'Miguel Rojas'),
(3, 'Sofía Luna'),
(4, 'Javier Herrera'),
(5, 'Camila Gómez');


INSERT INTO Reservas (id_reserva, id_usuario, id_experiencia, fecha_reserva) VALUES
(1, 1, 1, '2025-04-08'),
(2, 2, 2, '2025-04-09'),
(3, 3, 3, '2025-04-10'),
(4, 4, 1, '2025-04-11');
