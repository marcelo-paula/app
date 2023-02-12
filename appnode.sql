-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 13-Fev-2023 às 00:43
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `appnode`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `firshName` varchar(255) NOT NULL,
  `email` text NOT NULL,
  `PASSWORD` text NOT NULL,
  `created_at` date DEFAULT curdate(),
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`idUser`, `name`, `lastName`, `firshName`, `email`, `PASSWORD`, `created_at`, `updated_at`) VALUES
(2, 'igor cacerez', 'cacerez', 'igor', 'igor.cacerez@gmail.com', 'igor123@', '2023-02-12', NULL),
(4, 'eu sou foda', 'testandosdjn', 'teste', 'teste@gmail.com', '9090', '2023-02-12', NULL),
(5, 'eu sou foda 123', 'testandosdjn', 'teste 123', 'teste@gmail.com', '9090', '2023-02-12', NULL),
(6, 'edewqd', 'jkhbkjb', 'hahahahaha', 'marcelo_xavierpaula@hotmail.com', 'dsfbgewjhgfwjegf', '2023-02-12', NULL),
(7, 'igão', 'jkhbkjb', 'hahahahaha', 'marcelo_xavierpaula@hotmail.com', 'dsfbgewjhgfwjegf', '2023-02-12', NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
