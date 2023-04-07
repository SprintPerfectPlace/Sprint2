CREATE DATABASE PerfectPlace;

USE PerfectPlace;

CREATE TABLE Empresa(
	idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (45),
    cnpj CHAR (14),
    qtdSensores INT
);

CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (20),
    sobrenome VARCHAR (20),
    email VARCHAR(60),
    senha CHAR (8),
    fkEmpresa INT,
    CONSTRAINT fkUsuarioEmpresa FOREIGN KEY (fkEmpresa) REFERENCES Empresa (idEmpresa)
);

CREATE TABLE LocalSensor(
	idLocal INT PRIMARY KEY AUTO_INCREMENT,
    bairro VARCHAR (25),
    rua VARCHAR (25),
    numero VARCHAR (5),
    fkEmpresa INT,
    CONSTRAINT fkLocalEmpresa FOREIGN KEY (fkEmpresa) REFERENCES Empresa (idEmpresa)
);

CREATE TABLE Sensor(
	idSensor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (20),
    funcionalidade VARCHAR (30),
    fkLocal INT,
    CONSTRAINT fkSensorLocal FOREIGN KEY (fkLocal) REFERENCES LocalSensor (idLocal)
);

CREATE TABLE Leitura(
	idLeitura INT PRIMARY KEY AUTO_INCREMENT,
    dado VARCHAR (10),
    fkSensor INT,
    CONSTRAINT fkLeituraSensor FOREIGN KEY (fkSensor) REFERENCES Sensor (idSensor)
);