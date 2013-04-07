Insallatsioonijuhend
===============

Paigaldada andmebaas, eelistatult MySQL.
Andmebaasi struktuuri loomine: 


[code]
CREATE TABLE erakond (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nimi VARCHAR(255) NOT NULL
);


CREATE TABLE piirkond (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nimi VARCHAR(255) NOT NULL
);


CREATE TABLE kandidaat (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nimi VARCHAR(255) NOT NULL,
töökoht VARCHAR(255),
sünniaeg DATE,
erakonna_id INT,
piirkonna_id INT,
FOREIGN KEY (erakonna_id) REFERENCES erakond(id),
FOREIGN KEY (piirkonna_id) REFERENCES piirkond(id),
UNIQUE (nimi)
);


CREATE TABLE haaletaja (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nimi VARCHAR(255) NOT NULL,
isikukood CHAR (11),
valitu_id INT,
piirkonna_id INT,
UNIQUE (isikukood),
FOREIGN KEY (valitu_id) REFERENCES kandidaat(id),
FOREIGN KEY (piirkonna_id) REFERENCES piirkond(id)
);
[/code]



Testandmete lisamine:

[code]
INSERT INTO erakond (nimi)
values ('Roheline');
INSERT INTO erakond (nimi)
values ('Kollane');
INSERT INTO erakond (nimi)
values ('Sinine');
INSERT INTO erakond (nimi)
values ('Pruun');


INSERT INTO piirkond (nimi)
values ('Tartumaa');
INSERT INTO piirkond (nimi)
values ('Valgamaa');
INSERT INTO piirkond (nimi)
values ('Järvamaa');
INSERT INTO piirkond (nimi)
values ('Harjumaa');


INSERT INTO kandidaat (nimi, töökoht, sünniaeg, erakonna_id, piirkonna_id)
values ('Ferdinand Fuksia', 'riigikogulane', '1948-02-07', '1', '3');
INSERT INTO kandidaat (nimi, töökoht, sünniaeg, erakonna_id, piirkonna_id)
values ('Ildegaard Ilumeel', 'maalikunstnik', '1957-05-09', '2', '4');
INSERT INTO kandidaat (nimi, töökoht, sünniaeg, erakonna_id, piirkonna_id)
values ('Janaida Jalutova', 'postiljon', '1945-09-01', '3', '1');
INSERT INTO kandidaat (nimi, töökoht, sünniaeg, erakonna_id, piirkonna_id)
values ('Leila Lagerfeld', 'kokk', '1960-08-12', '4', '2');
INSERT INTO kandidaat (nimi, töökoht, sünniaeg, erakonna_id, piirkonna_id)
values ('Eduard Ekskavaator', 'kopajuht', '1973-09-02', '1', '3');
INSERT INTO kandidaat (nimi, töökoht, sünniaeg, erakonna_id, piirkonna_id)
values ('Gerhard Gätegõverdus', 'kulturist', '1982-06-11', '2', '4');


INSERT INTO haaletaja (nimi, isikukood, valitu_id, piirkonna_id)
values ('Harald Hamster', 35505263861, '1', '3');
[/code]


Paigaldada Eclipse Google Appengine Pluginiga.
Luua Eclipse-is uus Google Web Application projekt ning kopeerida GitHubi repositooriumist failid sinna.
Sisestada projekti seadetest andmebaasi aadress ja kasutajainfo.
Käivitada Web Application-ina.

