CREATE TABLE uudised(
                        id int primary key AUTO_INCREMENT,
                        teema varchar(30),
                        kuupaev date,
                        kirjeldus TEXT);

INSERT INTO uudised(teema, kuupaev, kirjeldus)
VALUES ('ilm', '2023-09-12', 'Täna on soe ilm. ');
SELECT * FROM uudised;

ALTER TABLE uudised ADD COLUMN varv varchar(15);

CREATE TABLE kalad(
                      id int primary key AUTO_INCREMENT,
                      kalanimi varchar(20),
                      pilt TEXT,
                      varv varchar(10));
INSERT INTO kalad (kalanimi)
VALUES ('Seva');
SELECT * FROM kalad;