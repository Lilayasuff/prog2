-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 10, 2024 at 06:22 PM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proyectoIntegrador`
--

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `descripcion` varchar(1500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `usuarios_id` int(10) UNSIGNED DEFAULT NULL,
  `productos_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id`, `descripcion`, `created_at`, `updated_at`, `deleted_at`, `usuarios_id`, `productos_id`) VALUES
(1, 'Las Adidas Forum Mid son increíbles! El diseño clásico y el ajuste cómodo las convierten en mis zapatillas favoritas. Además, la calidad de construcción es excelente. ¡Sin duda, una excelente opción para aquellos que buscan estilo y funcionalidad!', '2024-04-15 18:58:53', '2024-04-15 18:58:53', NULL, 1, 1),
(2, 'Estoy muy impresionado con las Adidas Forum Mid. El estilo retro es exactamente lo que estaba buscando y la durabilidad es impresionante. Después de meses de uso, todavía lucen como nuevas. ¡Recomendaría estas zapatillas a cualquier persona que busque un calzado confiable y elegante!', '2024-04-15 18:59:45', '2024-04-15 18:59:45', NULL, 2, 1),
(3, '¡Son un clásico que nunca pasa de moda y definitivamente son una excelente inversión para cualquier amante del calzado urbano!', '2024-04-15 19:00:17', '2024-04-15 19:00:17', NULL, 3, 1),
(4, 'Las Adidas Campus son perfectas para el uso diario!', '2024-04-15 19:41:08', '2024-04-15 19:41:08', NULL, 4, 2),
(5, 'Me encanta el aspecto de las Adidas Campus, pero la suela es un poco rígida y tardó un tiempo en ablandarse.', '2024-04-15 19:41:33', '2024-04-15 19:41:33', NULL, 5, 2),
(6, '¡Las recomendaría a cualquiera que busque zapatillas versátiles y elegantes!', '2024-04-15 19:41:59', '2024-04-15 19:41:59', NULL, 3, 2),
(7, '¡Estoy enamorado de mis Air Jordan 1 Mid! Son increíblemente cómodas y el estilo clásico es simplemente imbatible', '2024-04-15 19:42:35', '2024-04-15 19:42:35', NULL, 1, 3),
(8, '¡Definitivamente recomendaría estas zapatillas a cualquier amante del calzado urbano!', '2024-04-15 19:42:57', '2024-04-15 19:42:57', NULL, 2, 3),
(9, 'Me decepcionaron un poco las Air Jordan 1 Mid', '2024-04-15 19:43:18', '2024-04-15 19:43:18', NULL, 4, 3),
(10, 'Las Nike Blazer Mid \'77 son impresionantes. La calidad del cuero es excepcional y el estilo retro es inigualable.', '2024-04-15 19:43:44', '2024-04-15 19:43:44', NULL, 2, 4),
(11, 'Son perfectas para cualquier ocasión y siempre recibo elogios cuando las uso!', '2024-04-15 19:44:05', '2024-04-15 19:44:05', NULL, 3, 4),
(12, 'El ajuste era un poco estrecho en el antepié y la amortiguación no era tan suave como esperaba. No son ideales para largas caminatas.', '2024-04-15 19:44:25', '2024-04-15 19:44:25', NULL, 4, 4),
(13, 'Las Adidas Gazelle son increíbles. Son cómodas, elegantes y tienen un estilo retro que me encanta', '2024-04-15 19:45:06', '2024-04-15 19:45:06', NULL, 2, 5),
(14, 'Desafortunadamente, las Adidas Gazelle no cumplieron mis expectativas. La calidad del material no era tan alta como esperaba y la suela se desgastó rápidamente.', '2024-04-15 19:45:31', '2024-04-15 19:45:31', NULL, 1, 5),
(15, 'Son perfectas para combinar con cualquier atuendo y siempre reciben elogios!', '2024-04-15 19:45:50', '2024-04-15 19:45:50', NULL, 4, 5),
(16, 'Las Air Jordan 1 Low son increíbles. El estilo icónico de las Air Jordan 1 en un diseño de corte bajo es simplemente perfecto.', '2024-04-15 19:46:25', '2024-04-15 19:46:25', NULL, 2, 6),
(17, 'Son cómodas, elegantes y se adaptan a cualquier ocasión. Definitivamente, una excelente elección para cualquier amante del calzado deportivo', '2024-04-15 19:47:11', '2024-04-15 19:47:11', NULL, 3, 6),
(18, 'Estoy muy contento con mis Air Jordan 1 Low. El cuero es de alta calidad y el ajuste es perfecto. Además, la amortiguación en la entresuela proporciona una sensación de suavidad en cada paso. ¡Sin duda, las recomendaría a cualquiera que busque un estilo atemporal y una comodidad excepcional!', '2024-04-15 19:47:39', '2024-04-15 19:47:39', NULL, 5, 6),
(19, 'Estoy muy contento con mis Adidas Forum Low. El ajuste es perfecto y el estilo retro siempre recibe elogios. Además, la durabilidad es impresionante. Después de meses de uso, todavía lucen como nuevas. ¡Sin duda, las recomendaría a cualquiera que busque un calzado clásico y confiable!', '2024-04-15 19:48:19', '2024-04-15 19:48:19', NULL, 4, 7),
(20, 'El diseño clásico es perfecto para cualquier ocasión y la calidad de construcción es excepcional.', '2024-04-15 19:48:43', '2024-04-15 19:48:43', NULL, 3, 7),
(21, 'Son cómodas desde el primer momento y la suela de goma proporciona una tracción increíble. Definitivamente, una de mis zapatillas favoritas', '2024-04-15 19:49:14', '2024-04-15 19:49:14', NULL, 1, 7),
(22, 'La calidad de construcción es excepcional y el estilo retro es exactamente lo que estaba buscando. Son cómodas desde el primer momento y se adaptan perfectamente a mi pie. Definitivamente, una excelente elección para cualquier ocasión', '2024-04-15 19:49:51', '2024-04-15 19:49:51', NULL, 4, 8),
(23, 'No puedo decir que esté completamente satisfecho con las New Balance 550. Aunque inicialmente me encantó el diseño, encontré que la comodidad era un problema. Después de un tiempo de uso, comenzaron a causarme molestias en la planta del pie y en el talón', '2024-04-15 19:50:27', '2024-04-15 19:50:27', NULL, 2, 8),
(24, 'El diseño clásico es atemporal y la combinación de colores es perfecta. Además, la amortiguación en la entresuela proporciona una sensación de suavidad en cada paso', '2024-04-15 19:50:59', '2024-04-15 19:50:59', NULL, 1, 8),
(25, 'Las Nike Dunk Low son asombrosas! Tienen un estilo versátil que se adapta a cualquier situación y la comodidad es excepcional', '2024-04-15 19:51:31', '2024-04-15 19:51:31', NULL, 2, 9),
(26, '¡Definitivamente son mis zapatillas favoritas en este momento!', '2024-04-15 19:51:58', '2024-04-15 19:51:58', NULL, 4, 9),
(27, 'Son súper versátiles y el ajuste es perfecto. ¡Me encanta la sensación de calidad en cada paso y cómo complementan cualquier atuendo!', '2024-04-15 19:52:22', '2024-04-15 19:52:22', NULL, 1, 9),
(28, '¡Las Air Jordan Legacy 312 Low son una obra maestra! El diseño que combina elementos de diferentes modelos icónicos de Jordan es simplemente brillante.', '2024-04-15 19:52:52', '2024-04-15 19:52:52', NULL, 5, 10),
(29, 'No puedo decir que esté completamente satisfecho con las Air Jordan Legacy 312 Low. Aunque el estilo es genial, encontré que la calidad del material no era tan alta como esperaba.', '2024-04-15 19:53:13', '2024-04-15 19:53:13', NULL, 3, 10),
(30, 'Son sin duda mis zapatillas favoritas!', '2024-04-15 19:53:35', '2024-04-15 19:53:35', NULL, 2, 10);

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `producto` varchar(100) NOT NULL,
  `descripcion` varchar(1500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `imagen`, `producto`, `descripcion`, `created_at`, `updated_at`, `deleted_at`, `usuario_id`) VALUES
(1, 'foto.png', 'Adidas Forum Mid', 'Las Forum Mid ofrecen un excelente soporte al tobillo, lo que las hace ideales para el uso diario y para actividades deportivas.', '2024-04-15 18:39:20', '2024-04-15 18:55:22', '2024-04-15 18:55:22', 1),
(2, 'foto.png', 'Adidas Campus', 'Destacan por su parte superior de gamuza suave.', '2024-04-15 18:40:47', '2024-04-15 18:56:12', '2024-04-15 18:56:12', 5),
(3, 'foto.png', 'Nike Air Jordan 1 Mid', 'Equilibrio entre estilo clásico y rendimiento moderno.', '2024-04-15 19:31:03', '2024-04-15 19:31:03', NULL, 2),
(4, 'foto.png', 'Blazer Nike Mid 77', 'Ideales tanto para el uso diario como para actividades deportivas casuales.', '2024-04-15 19:33:27', '2024-04-15 19:33:27', NULL, 4),
(5, 'foto.png', 'Adidas Gazelle', 'Son conocidas por su simplicidad y versatilidad.', '2024-04-15 19:33:56', '2024-04-15 19:33:56', NULL, 3),
(6, 'foto.png', 'Air Jordan 1 Low', 'Las Air Jordan 1 Low ofrecen un estilo retro y una versatilidad que las convierten en una opción imprescindible para cualquier aficionado al calzado urbano y a la moda deportiva.', '2024-04-15 19:34:40', '2024-04-15 19:34:40', NULL, 3),
(7, 'foto.png', 'Adidas Forum Low', 'Las Adidas Forum Low son unas zapatillas de estilo retro con un diseño de corte bajo. Fabricadas con cuero de alta calidad y detalles icónicos de Adidas, ofrecen un aspecto clásico y versátil\'', '2024-04-15 19:35:24', '2024-04-15 19:35:24', NULL, 5),
(8, 'foto.png', 'New Balance 550', 'Las New Balance 550 son zapatillas de estilo retro que combinan una estética clásica con detalles modernos. Confeccionadas con materiales de alta calidad, como cuero y gamuza, las 550 ofrecen durabilidad y estilo.', '2024-04-15 19:36:22', '2024-04-15 19:36:22', NULL, 2),
(9, 'foto.png', 'Nike Dunk Low', 'Las Nike Dunk Low son zapatillas de estilo clásico y versátil. Con un diseño de corte bajo, ofrecen un aspecto casual y cómodo para el día a día', '2024-04-15 19:36:55', '2024-04-15 19:36:55', NULL, 1),
(10, 'foto.png', 'Air Jordan Legacy 312 Low', 'Estas zapatillas combinan elementos de varios modelos clásicos de Nike y Jordan para crear un diseño único y llamativo.', '2024-04-15 19:37:47', '2024-04-15 19:37:47', NULL, 4);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `foto` varchar(500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `password`, `fecha`, `dni`, `foto`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'fedefajre@gmail.com', '333214', '2024-04-15', 44366452, 'foto.png', '2024-04-15 18:01:41', '2024-04-15 18:01:41', NULL),
(2, 'lilayassuff@gmail.com', '324314', '2024-04-16', 44334662, 'foto.png', '2024-04-15 18:25:31', '2024-04-15 18:25:31', NULL),
(3, 'matelavan@gmail.com', '1234', '2024-04-17', 44444123, 'foto.png', '2024-04-15 18:25:44', '2024-04-15 18:25:44', NULL),
(4, 'pepepedro@gmail.com', '4321', '2024-04-18', 12345678, 'foto.png', '2024-04-15 18:25:53', '2024-04-15 18:25:53', NULL),
(5, 'ernestojuan@gmail.com', '98765', '2024-04-19', 87654321, 'foto.png', '2024-04-15 18:25:57', '2024-04-15 18:25:57', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuarios_id` (`usuarios_id`),
  ADD KEY `productos_id` (`productos_id`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `productos_id` FOREIGN KEY (`productos_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `usuarios_id` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
