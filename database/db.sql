create database aeropuerto

use aeropuerto



create table flys (idFly int not null primary key auto_increment,
			destiny varchar(10),
			origin varchar(10),
			remarks varchar(15),
			gate varchar(10),
			timeArrive time,
			timeOut time,
			fligthNum varchar(6));

insert into flys(destiny, origin, remarks, gate, timeArrive, timeOut, fligthNum) values
('CHICAGO','GLASGOW','BAGSDELIVERED', NULL, '19:35', NULL,'LY448');