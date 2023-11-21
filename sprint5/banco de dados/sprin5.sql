USE db_sprint5;

create table if not exists cargos(
id int auto_increment primary key,
nome varchar(50),
descricao varchar(125),
permissao int
);

create table if not exists usuarios(
id int auto_increment primary key,
nome varchar(50),
email varchar(50),
cpf varchar(11) unique,
senha varchar(64), /*hash de senha*/
email_confirmado boolean,
id_cargo int,
foreign key(id_cargo) references cargos(id)
);

create table if not exists artigos(
id int auto_increment primary key,
titulo varchar(70),
texto text,
data_artigo datetime,
id_usuario int,
FOREIGN KEY(id_usuario) REFERENCES usuarios(id)
);

create table if not exists imagens(
id int auto_increment primary key,
src varchar(225),
descricao varchar(250),
id_artigo int,
FOREIGN KEY(id_artigo) REFERENCES artigos(id)
);

create table if not exists categorias(
id int auto_increment primary key,
nome varchar(50),
descricao varchar(250)
);

/*Associacao entre Imagens e Categoria*/
create table if not exists categorias_x_imagens(
id_categoria int,
id_imagem int,
id_artigo int,
foreign key(id_artigo) references artigos(id),
foreign key(id_categoria) references categorias(id),
primary key(id_categoria, id_imagem) /*Uso de uma chave primaria composta*/
);