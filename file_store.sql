-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2024 at 04:13 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `file_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `category_list`
--

CREATE TABLE `category_list` (
  `id` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category_list`
--

INSERT INTO `category_list` (`id`, `category`, `category_name`) VALUES
(1, 1, 'Home equipment'),
(2, 2, 'Sports'),
(3, 3, 'Furniture'),
(4, 4, 'Vehicle'),
(5, 5, 'Technology');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `sku` varchar(255) NOT NULL,
  `variant_id` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount_percentage` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `category` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `product_id`, `sku`, `variant_id`, `price`, `discount_percentage`, `description`, `category`) VALUES
(1, 'Ball', 41, 'ABC-10658', 3, '59.30', 32, 'A high-quality that is perfect for everyday use.', 3),
(2, 'Car', 38, 'ABC-76983', 1, '54.65', 26, 'A high-quality that is perfect for everyday use.', 4),
(3, 'Drill', 8, 'ABC-94371', 4, '96.09', 4, 'A high-quality that is perfect for everyday use.', 5),
(4, 'Sofa', 21, 'ABC-29907', 2, '20.92', 32, 'A high-quality that is perfect for everyday use.', 1),
(5, 'Hammer', 77, 'ABC-10584', 4, '49.50', 25, 'A high-quality that is perfect for everyday use.', 3),
(6, 'Screwdriver', 80, 'ABC-60756', 1, '82.75', 38, 'A high-quality that is perfect for everyday use.', 3),
(7, 'Tablet', 54, 'ABC-31619', 4, '79.55', 14, 'A high-quality that is perfect for everyday use.', 4),
(8, 'Ball', 49, 'ABC-64308', 2, '91.48', 5, 'A high-quality that is perfect for everyday use.', 2),
(9, 'Ball', 58, 'ABC-27336', 1, '92.87', 8, 'A high-quality that is perfect for everyday use.', 3),
(10, 'Chair', 85, 'ABC-52589', 4, '61.60', 22, 'A high-quality that is perfect for everyday use.', 4),
(11, 'Car', 78, 'ABC-67316', 3, '88.86', 15, 'A high-quality that is perfect for everyday use.', 4),
(12, 'Ball', 11, 'ABC-83766', 4, '44.24', 8, 'A high-quality that is perfect for everyday use.', 2),
(13, 'Sofa', 79, 'ABC-58341', 1, '13.77', 21, 'A high-quality that is perfect for everyday use.', 2),
(14, 'Jeans', 21, 'ABC-69624', 3, '53.46', 17, 'A high-quality that is perfect for everyday use.', 2),
(15, 'Tablet', 8, 'ABC-28234', 3, '58.62', 30, 'A high-quality that is perfect for everyday use.', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category_list`
--
ALTER TABLE `category_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category_list`
--
ALTER TABLE `category_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
