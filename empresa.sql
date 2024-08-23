-- Cria o banco de dados teste
CREATE DATABASE teste;
-- Define o banco de dados como corrente  
USE teste;
-- Apaga o banco de dados
Drop DATABASE teste; 

CREATE DATABASE empresa;
-- Lista todos os bancos de dados existentes (nao importa minusculo ou maiusculo)
SHOW databases; 
USE empresa; 
CREATE TABLE cadfun (
	codigo INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(40) NOT NULL,
    dpto CHAR(2),
    funcao CHAR(20),
    salario DECIMAL(10, 2)
);
-- Lista todas as tabelas existentes do banco de dados em uso
SHOW TABLES;

-- Mostra a estrutura da tabela
DESCRIBE cadfun;

-- Insere registro na tabela e define código automaticamente 
INSERT INTO cadfun (nome, dpto, funcao, salario)
VALUES ('Joao da silva', '2', 'GERENTE', 7985.75);

-- Forma simplificada de inserir na tabela valores
INSERT INTO cadfun VALUE (2, 'Wilson Macedo', '3', 'Programador', 3985.75);
INSERT INTO cadfun VALUES(3, 'Ana Bastos', '2', 'ANALISTA', 4985.75);

-- Lista todos os registros, com todos os campos:
SELECT * FROM cadfun;

-- Lista todos os registros mas apenas os campos nome e funcao:
SELECT nome, funcao FROM cadfun;

-- Lista todos registros, mas apenas o campo nome onde depto = 3 
SELECT nome FROM cadfun WHERE dpto = '3';

-- Lista nome e salario por ordem alfabetica do campo nome 
SELECT nome, salario FROM cadfun ORDER BY nome;

-- Lista nome e salario e ordena de forma descendente
SELECT nome, salario FROM cadfun ORDER BY nome DESC;

-- Ordem ascendente do dpto e ordem descendente do nome:
SELECT dpto, nome FROM cadfun ORDER BY nome DESC;

-- Lista todos os nomes onde dpto='3', por ordem ascendente de nome:
Select nome from cadfun WHERE dpto = '3' ORDER BY nome;

-- Alteração de registros: muda o dpto da ana bastos
UPDATE cadfun SET dpto='3' where nome = 'ANA BASTOS';

-- Alteracao de registros: aumenta todos os salarios em 10% // regra dp arredondamento e por isso o warning
UPDATE cadfun SET salario = salario *1.10;

-- Apaga todos os registros da tabela 
DELETE FROM cadfun; 

-- OBS: Insira novos registros para poder prosseguir!
INSERT INTO cadfun VALUE (2, 'Marcelo Souza', '2', 'Programador', 3985.75);

-- Apaga registro pelo nome:
DELETE FROM cadfun Where nome = 'Marcelo Souza';

-- Apaga registro pelo dpto 
DELETE FROM cadfun WHERE dpto = '2';

-- Altera tabela. Insere o campo admissao do tipo data
ALTER TABLE cadfun add admissao DATE;

-- 	Atualiza campo admissao:
UPDATE cadfun SET admissao = '2024-04-17' WHERE funcao = 'Programador';

-- Lista por data de admissao:
SELECT nome, admissao FROM cadfun WHERE MONTH(admissao) = 04;

-- Lista por data de admissao:
SELECT nome, admissao FROM cadfun where admissao >='2024-01-01';

 


