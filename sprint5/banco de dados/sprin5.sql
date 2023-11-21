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
data_artigo datetime,
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
create table if not exists artigos_x_categoria(
id_categoria int not null,
id_artigo int not null,
foreign key(id_artigo) references artigos(id),
foreign key(id_categoria) references categorias(id),
primary key(id_categoria, id_artigo) /*Uso de uma chave primaria composta*/
);

