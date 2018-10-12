-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 12, 2018 at 10:38 PM
-- Server version: 10.0.36-MariaDB-0ubuntu0.16.04.1
-- PHP Version: 7.0.32-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test2`
--

-- --------------------------------------------------------

--
-- Table structure for table `manufacturers`
--

CREATE TABLE `manufacturers` (
  `id` int(10) UNSIGNED NOT NULL,
  `name_` varchar(250) NOT NULL,
  `image` varchar(20) NOT NULL DEFAULT 'default.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `manufacturers`
--

INSERT INTO `manufacturers` (`id`, `name_`, `image`) VALUES
(1, 'bridgestone', 'default.png'),
(2, 'fulda', 'fulda.png'),
(3, 'barum', 'barum.png'),
(4, 'lassa', 'lassa.png');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(250) NOT NULL,
  `manufacturer_id` int(10) NOT NULL,
  `price` double NOT NULL,
  `discount_price` double NOT NULL,
  `in_stock` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `manufacturer_id`, `price`, `discount_price`, `in_stock`) VALUES
(1, 'blizzak LM-25', 1, 200, 200, 1),
(2, 'conveo trac', 2, 450, 450, 1),
(3, 'Brillantis 2', 3, 200, 200, 1),
(4, 'ICEWAYS 2', 3, 400, 300, 1);

-- --------------------------------------------------------

--
-- Table structure for table `products_properties`
--

CREATE TABLE `products_properties` (
  `id` int(10) UNSIGNED NOT NULL,
  `properti_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products_properties`
--

INSERT INTO `products_properties` (`id`, `properti_id`, `product_id`) VALUES
(3, 1, 1),
(4, 2, 2),
(5, 3, 3),
(6, 4, 4);

-- --------------------------------------------------------

--
-- Table structure for table `properties`
--

CREATE TABLE `properties` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(250) NOT NULL,
  `diameter` int(2) NOT NULL,
  `width` int(3) NOT NULL,
  `pcd` int(11) NOT NULL,
  `et` int(2) NOT NULL,
  `type` int(2) NOT NULL,
  `logo` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `properties`
--

INSERT INTO `properties` (`id`, `name`, `diameter`, `width`, `pcd`, `et`, `type`, `logo`) VALUES
(1, 'blizzak LM-25', 14, 145, 35, 10, 13, 10),
(2, 'conveo trac', 14, 185, 15, 10, 14, 10),
(3, 'Brillantis 2', 13, 135, 15, 10, 13, 10),
(4, 'ICEWAYS 2', 18, 185, 35, 35, 18, 35);

-- --------------------------------------------------------

--
-- Table structure for table `ratings`
--

CREATE TABLE `ratings` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `rating` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ratings`
--

INSERT INTO `ratings` (`id`, `product_id`, `rating`) VALUES
(1, 1, 4),
(2, 2, 5),
(3, 3, 3),
(4, 4, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `manufacturers`
--
ALTER TABLE `manufacturers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products_properties`
--
ALTER TABLE `products_properties`
  ADD PRIMARY KEY (`id`),
  ADD KEY `properti_id` (`properti_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `manufacturers`
--
ALTER TABLE `manufacturers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `products_properties`
--
ALTER TABLE `products_properties`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `properties`
--
ALTER TABLE `properties`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `manufacturers`
--
ALTER TABLE `manufacturers`
  ADD CONSTRAINT `manufacturers_ibfk_1` FOREIGN KEY (`id`) REFERENCES `manufacturers` (`id`);

--
-- Constraints for table `products_properties`
--
ALTER TABLE `products_properties`
  ADD CONSTRAINT `products_properties_ibfk_1` FOREIGN KEY (`properti_id`) REFERENCES `properties` (`id`),
  ADD CONSTRAINT `products_properties_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `ratings`
--
ALTER TABLE `ratings`
  ADD CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
