-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 09, 2025 at 09:15 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bd_przychodnia`
--

-- --------------------------------------------------------

--
-- Table structure for table `t_pacjent`
--

CREATE TABLE `t_pacjent` (
  `pesel` varchar(11) NOT NULL,
  `imie` varchar(20) DEFAULT NULL,
  `nazwisko` varchar(20) DEFAULT NULL,
  `telefon` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `t_pacjent`
--

INSERT INTO `t_pacjent` (`pesel`, `imie`, `nazwisko`, `telefon`) VALUES
('07251416266', 'Julia', 'Nowak', '987608424'),
('68042745794', 'Kamil', 'Bartkowski', '800100251'),
('74070635721', 'Zuzanna', 'Raczkiewicz', '608853154'),
('86012946684', 'Zofia', 'Krawczyk', '987608424'),
('86032444153', 'Szymon', 'Kowalski', '647364262');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_pacjent`
--
ALTER TABLE `t_pacjent`
  ADD PRIMARY KEY (`pesel`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
