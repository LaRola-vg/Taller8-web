drop database if exists taller8web;
create database taller8web;
use taller8web;

create table ciudad(
idCiu	int		not null,
nombreCiu	varchar(10)	not null,
descripcionCiu	varchar(50)	not null,
primary key (nombreCiu)
);

create table tipodocumento(
idTipo	int 	not null,
nombreTipo	varchar(10)	not null,
descripcionTipo varchar(50) not null,
primary key (nombreTipo)
);

create table persona(
idPer	int		NOT NULL	auto_increment,
nombrePer	varchar(50)	NOT NULL,
apellidoPer	varchar(50)	not null,
fk_tipodocPer	varchar(10),
documentoPer	varchar(10)	not null,
fk_residenciaPer	varchar(10),
fechanacPer		varchar(10)	not null,
emailPer		varchar(50) not null,
telefonoPer		varchar(10) not null,
ususarioPer		varchar(20) not null,
passwordPer		varchar(10)	not null,
CONSTRAINT fk_ciudad_persona FOREIGN KEY (fk_residenciaPer) REFERENCES taller8web.ciudad(nombreCiu),
CONSTRAINT fk_tipodocumento_persona FOREIGN KEY (fk_tipodocPer) REFERENCES taller8web.tipodocumento(nombreTipo),
primary key (idPer)
);

INSERT INTO ciudad VALUES (1, 'Bogota', 'capital de colombia');
INSERT INTO ciudad VALUES (2, 'Medellin', 'bandeja paisa');
INSERT INTO ciudad VALUES (3, 'Bucaramanga', 'ciudad bonita');

INSERT INTO tipodocumento VALUES (1, 'TI', 'Tarjeta de identidad');
INSERT INTO tipodocumento VALUES (2, 'CC', 'cedula de ciudadania');
INSERT INTO tipodocumento VALUES (3, 'passport', 'pasaporte');
