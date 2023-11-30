CREATE DATABASE db_sprint5ç

USE db_sprint5;

create table if not exists cargos(
id int auto_increment primary key not null,
nome varchar(50) not null,
descricao varchar(125),
permissao int not null
);

create table if not exists usuarios(
id int auto_increment primary key not null,
nome varchar(50) not null,
email varchar(50) not null,
cpf varchar(11) unique not null,
senha varchar(64) not null, /*hash de senha*/
email_confirmado boolean,
id_cargo int not null,
foreign key(id_cargo) references cargos(id)
);

create table if not exists artigos(
id int auto_increment primary key not null,
titulo varchar(70) not null,
texto text not null,
data_artigo date,
id_usuario int not null,
FOREIGN KEY(id_usuario) REFERENCES usuarios(id)
);

create table if not exists imagens(
id int auto_increment primary key not null,
src varchar(225) not null,
descricao varchar(250),
id_artigo int not null,
FOREIGN KEY(id_artigo) REFERENCES artigos(id)
);

create table if not exists categorias(
id int auto_increment primary key not null,
nome varchar(50) not null,
descricao varchar(250)
);

/*Associacao entre Imagens e Categoria*/
create table if not exists artigos_x_categorias(
id_categoria int not null,
id_artigo int not null,
foreign key(id_artigo) references artigos(id),
foreign key(id_categoria) references categorias(id),
primary key(id_categoria, id_artigo) /*Uso de uma chave primaria composta*/
);



/************Insercao de Valores no Banco************/

INSERT INTO cargos(nome, descricao, permissao) VALUES ("administrador", "acesso total ao sistema.", 1), ("usuario_comum", "Pode visualizar e interagir com a postagem", 2);
SELECT * FROM CARGOS;

INSERT INTO usuarios(nome, email, cpf, senha, email_confirmado, id_cargo) VALUES ("Pedro", "pedro@gmail.com", "12345678900", "root", true, 1), ("Fabricio", "fabricio@gmail.com", "00987654321", "comum123", false, 2);
SELECT * FROM USUARIOS;

INSERT INTO artigos(titulo, texto, data_artigo, id_usuario) VALUES 
("netflix vs nasa", "Agora a nasa ira concorrer contra a netflix, pois criou um sistema de streaming sobre conteudo relacionado a ciencia, etc", "2023-11-12", 1),
("chatgpt: uma revolucao", "nova revolucao na tecnologia, chatgpt agora consegue ser integrado a outros sistemas de inteligencia artificial.", "2023-11-15", 1);
SELECT * FROM artigos;

INSERT INTO imagens(src, descricao, id_artigo) VALUES ("./img/nasa-vs-netflix.png", "Foto da Logo da Nasa vs a Netflix", 1), ("./img/chatgpt-revolucao.png", "Foto da Logo do ChatGPT", 2);
SELECT * FROM imagens;

INSERT INTO categorias(nome, descricao) VALUES ("tech", "conteudo sobre o mundo tech"), ("science", "conteudo sobre ciencia e pesquisas");
SELECT * FROM categorias;


INSERT INTO artigos_x_categorias(id_categoria, id_artigo) VALUES (1,1);
SELECT * FROM artigos_x_categorias;



/************Clausulas de Consultas (SELECT)************/
SELECT u.nome, c.nome FROM usuarios AS u
INNER JOIN cargos AS c ON u.id_cargo = c.id
WHERE u.email_confirmado = TRUE;
    
SELECT a.titulo, a.texto from artigos AS a
INNER JOIN artigos_x_categorias AS ac ON a.id = ac.id_artigo
INNER JOIN categorias AS ca ON ac.id_categoria = ca.id
WHERE ca.nome = 'tech';
    
SELECT artigos.titulo, usuarios.nome FROM artigos
JOIN usuarios ON artigos.id_usuario = usuarios.id;

SELECT usuarios.nome, COUNT(artigos.id) AS 'Número de Artigos'
FROM usuarios
JOIN artigos ON usuarios.id = artigos.id_usuario
GROUP BY usuarios.nome;
