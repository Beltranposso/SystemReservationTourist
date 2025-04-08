-- Tabla de Usuarios
CREATE TABLE Usuarios (
    id_usuario INT PRIMARY KEY,
    nombre VARCHAR(100)
);

-- Tabla de Guías
CREATE TABLE Guias (
    id_guia INT PRIMARY KEY,
    nombre VARCHAR(100),
    especialidad VARCHAR(100)
);

-- Tabla de Experiencias
CREATE TABLE Experiencias (
    id_experiencia INT PRIMARY KEY,
    nombre VARCHAR(100),
    precio DECIMAL(10,2),
    capacidad_maxima INT,
    id_guia INT,
    FOREIGN KEY (id_guia) REFERENCES Guias(id_guia)
);

-- Tabla de Reservas (intermedia para relación M:N entre Usuarios y Experiencias)
CREATE TABLE Reservas (
    id_reserva INT PRIMARY KEY,
    id_usuario INT,
    id_experiencia INT,
    fecha_reserva DATE,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_experiencia) REFERENCES Experiencias(id_experiencia)
);
