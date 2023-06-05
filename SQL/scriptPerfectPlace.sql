CREATE DATABASE PerfectPlace;

USE PerfectPlace;

CREATE TABLE Empresa(
	idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (45),
    cnpj CHAR (14)
);

INSERT INTO Empresa VALUES
(null, 'SPTech', '12345678901234'),
(null, 'Safra', '11223344556677'),
(null, 'Box Delivery', '22334455667788');

CREATE TABLE Usuario(
	idUsuario INT AUTO_INCREMENT,
    nome VARCHAR (20),
    email VARCHAR(60),
    senha CHAR (8),
    fkEmpresa INT,
    CONSTRAINT fkUsuarioEmpresa FOREIGN KEY (fkEmpresa) REFERENCES Empresa (idEmpresa),
    CONSTRAINT pkCompostaUsuarioEmpresa PRIMARY KEY (idUsuario, fkEmpresa)
);

SELECT * FROM Usuario;

CREATE TABLE LocalSensor(
	idLocal INT PRIMARY KEY AUTO_INCREMENT,
    CEP CHAR(8),
    estado VARCHAR(25),
    cidade VARCHAR(25),
    bairro VARCHAR (25),
    rua VARCHAR (25),
    numero VARCHAR (5)
);

TRUNCATE TABLE LocalSensor;

SELECT * FROM LocalSensor;

INSERT INTO LocalSensor VALUES 
(null, '08490490', 'São Paulo', 'São Paulo', 'Consolação', 'Rua Haddock Lobo', '595'),
(null, '08490490', 'São Paulo', 'São Paulo', 'Paraíso', 'Rua Haddock Lobo', '595'),
(null, '08490490', 'São Paulo', 'São Paulo', 'Bela Vista', 'Rua Haddock Lobo', '595'),
(null, '08490490', 'São Paulo', 'São Paulo', 'Cerqueira César', 'Rua Haddock Lobo', '595'),
(null, '08490490', 'São Paulo', 'São Paulo', 'Jardim Paulista', 'Rua Haddock Lobo', '595');

SELECT * FROM LocalSensor;

CREATE TABLE Sensor(
	idSensor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (20),
    funcionalidade VARCHAR (30),
    fkLocal INT,
    CONSTRAINT fkSensorLocal FOREIGN KEY (fkLocal) REFERENCES LocalSensor (idLocal)
);

INSERT INTO Sensor VALUES
(null, 'dht11', 'Umidade', 1),
(null, 'lm35', 'Temperatura', 1),
(null, 'trc5000', 'Proximidade', 1),
(null, 'dht11', 'Umidade', 2),
(null, 'lm35', 'Temperatura', 2),
(null, 'trc5000', 'Proximidade', 2),
(null, 'dht11', 'Umidade', 3),
(null, 'lm35', 'Temperatura', 3),
(null, 'trc5000', 'Proximidade', 3),
(null, 'dht11', 'Umidade', 4),
(null, 'lm35', 'Temperatura', 4),
(null, 'trc5000', 'Proximidade', 4),
(null, 'dht11', 'Umidade', 5),
(null, 'lm35', 'Temperatura', 5),
(null, 'trc5000', 'Proximidade', 5);

Select * FROM Leitura WHERE fkSensor = 2;

SELECT 
Sensor.idSensor as ID_Sensor,
Sensor.nome as Sensor,
Sensor.funcionalidade as Tipo,
LocalSensor.bairro as Bairro,
Leitura.Dado as Dado FROM Sensor JOIN LocalSensor ON idLocal = fkLocal 
		JOIN Leitura ON idSensor = fkSensor WHERE fkLocal = 1 AND idSensor = 2 ORDER BY Leitura.Dado LIMIT 1;

CREATE TABLE Leitura(
	idLeitura INT AUTO_INCREMENT,
    Dado INT,
    DataLeitura datetime default current_timestamp,
    fkSensor INT, CONSTRAINT fkDashboardSensor FOREIGN KEY (fkSensor) REFERENCES Sensor(idSensor),
    CONSTRAINT pkDashboard PRIMARY KEY (idLeitura, fkSensor)
);

DROP TABLE LocalSensor;

insert into Leitura
values (null, 1, default, 3),
	   (null, 0, default, 3),
       (null, 1, default, 3),
       (null, 1, default, 3),
       (null, 1, default, 3),
       (null, 0, default, 3);
       
insert into Leitura
values (null, 0, default, 3),
	   (null, 1, default, 3),
       (null, 0, default, 3),
       (null, 1, default, 3),
       (null, 0, default, 3),
       (null, 0, default, 3),
       (null, 0, default, 3),
	   (null, 1, default, 3),
       (null, 1, default, 3);


DROP Table Leitura;

SELECT * FROM Leitura;
SELECT * FROM Leitura WHERE fkSensor = 1;
SELECT * FROM Leitura WHERE fkSensor = 2;
SELECT * FROM Leitura WHERE fkSensor = 3;

INSERT INTO Leitura (dado, fkSensor) VALUES (1, 1);
INSERT INTO Leitura (dado, fkSensor) VALUES (0, 1);
INSERT INTO Leitura (dado, fkSensor) VALUES (1, 2);
INSERT INTO Leitura (dado, fkSensor) VALUES (10, 2);
INSERT INTO Leitura (dado, fkSensor) VALUES (7, 8);
INSERT INTO Leitura (dado, fkSensor) VALUES (30, 5);
INSERT INTO Leitura (dado, fkSensor) VALUES (36, 11);
INSERT INTO Leitura (dado, fkSensor) VALUES (3, 14);
INSERT INTO Leitura (dado, fkSensor) VALUES (1, 3);

-- Select Brandão 

select count(*) as QtdAcionamento, fksensor as Sensor,
if(minute(DataLeitura)>24 and minute(DataLeitura)<48, minute(DataLeitura)-24, 
if(minute(DataLeitura)>48 and minute(DataLeitura)<60, minute(DataLeitura)-36, minute(DataLeitura))
)
as Ajustado
from leitura where fksensor = 3
group by fkSensor, Ajustado  order by Ajustado;

-- Select Brandão

SELECT 
	Dado as Dado, 
	DataLeitura, DATE_FORMAT(DataLeitura,'%H:%i:%s') as DataLeitura
FROM Leitura WHERE fkSensor = 1 ORDER BY idLeitura DESC LIMIT 7;

SELECT 
	Dado as Dado, 
	DataLeitura, DATE_FORMAT(DataLeitura,'%H:%i:%s') as DataLeitura
FROM Leitura WHERE fkSensor = 2 ORDER BY idLeitura DESC LIMIT 7;

SELECT 
	Dado as Dado, 
	DataLeitura, DATE_FORMAT(DataLeitura,'%H:%i:%s') as DataLeitura
FROM Leitura WHERE fkSensor = 3 ORDER BY idLeitura DESC LIMIT 7;

SELECT 
	COUNT(Dado) as Total 
FROM Leitura WHERE fkSensor = 3 AND Dado LIKE '1';

DROP TABLE Leitura;
SELECT * FROM Usuario;

SELECT
            Sensor.idSensor as ID_Sensor, 
            Sensor.nome as Sensor,
            Sensor.funcionalidade as Tipo,
            LocalSensor.bairro as Bairro,
            Leitura.Dado as Dado,
            Leitura.DataLeitura as Data FROM Sensor JOIN LocalSensor ON idLocal = fkLocal 
		        JOIN Leitura ON idSensor = fkSensor WHERE idSensor = 14 ORDER BY Data DESC LIMIT 1;