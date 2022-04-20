-- MariaDB dump 10.19  Distrib 10.7.3-MariaDB, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: armatupc
-- ------------------------------------------------------
-- Server version	10.7.3-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `memory`
--

DROP TABLE IF EXISTS `memory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `memory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `precio` float(10,2) NOT NULL,
  `marca` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `memory`
--

LOCK TABLES `memory` WRITE;
/*!40000 ALTER TABLE `memory` DISABLE KEYS */;
INSERT INTO `memory` VALUES
(1,'Disco Duro Interno Seagate Barracuda 3.5\'\', 2TB, SATA III, 6 Gbit/s, 5400RPM, 256MB Cache ',900.00,'Seagate Barracuda','./img/barracuda2tb.jpg','Almacenamiento'),
(2,'Disco Duro Interno Western Digital WD Caviar Blue 3.5\'\', 1TB, SATA III, 6 Gbit/s, 7200RPM, 64MB Cache ',800.00,'Western Digital ','./img/western1tb.jpg','Almacenamiento'),
(5,'SSD Kingston NV1 NVMe, 250GB, PCI Express 3.0, M.2',619.00,'Kingston 250GB M.2','./img/kingstonssd250gb.jpg','Almacenamiento'),
(6,'SSD Kingston KC600 NAND 3D TLC, 512GB, SATA III, 2.5\'\', 7mm ',1569.00,'Kingston KC600 512GB','./img/KingstonKC600.jpg','Almacenamiento'),
(10,'Memoria  Red DDR4, 3200MHZ, 8GB, Non-ECC, CL16, XMP',700.00,'XPG Spectrix','./img/RAMXPGGAMMIX83200.jpg','RAM'),
(11,'Memoria Ram XPG Spectrix D50 Tungsten Grey DDR4, 3200MHz, 8GB, Non-ECC, CL16, XMP',779.00,'XPG Spectrix','./img/xpgD5083200.jpg','RAM'),
(12,'Kit Memoria RAM Patriot Viper Steel DDR4, 3200MHz, 16GB (2x 8 GB), Non-ECC, CL16 ',1469.00,'Patriot Viper Steel','./img/PatriotViperSteel283200.jpg','RAM');
/*!40000 ALTER TABLE `memory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `motherboard`
--

DROP TABLE IF EXISTS `motherboard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `motherboard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `precio` float(10,2) NOT NULL,
  `marca` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `generacion` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `motherboard`
--

LOCK TABLES `motherboard` WRITE;
/*!40000 ALTER TABLE `motherboard` DISABLE KEYS */;
INSERT INTO `motherboard` VALUES
(1,'ASUS PRIME A320M-K',1000.00,'Amd','./img/a320mk.jpg',100),
(2,'Tarjeta Madre Gigabyte Micro ATX GA-A320M-H, S-AM4, AMD A320',900.00,'Amd','./img/aA320mh.jpg',100),
(3,'Tarjeta Madre ASUS Micro ATX TUF Gaming B450M-Plus II',2000.00,'Amd','./img/aB450MPlusII.jpg',100),
(6,'Tarjeta Madre AORUS B450 AORUS PRO WIFI',3000.00,'Amd','./img/AB450AORUS.jpg',100),
(7,'Tarjeta Madre Biostar Micro ATX H310MHP',1200.00,'Intel','./img/IH310MHP.jpg',9),
(8,'Tarjeta Madre ASUS ATX ROG STRIX B550-F GAMING',5000.00,'Amd','./img/ROGSTRIXB550-F.jpg',100),
(9,'Tarjeta Madre AORUS Z390 Aorus Elite',4500.00,'Intel','./img/AORUSZ390.jpg',9),
(10,'Tarjeta Madre Biostar ATX Z490A-SILVER',3000.00,'Intel','./img/Z490A-SILVER.jpg',10),
(11,'Tarjeta Madre ASUS Micro ATX PRIME H410M-E,',1700.00,'Intel','./img/H410M-E.jpg',10),
(12,'Tarjeta Madre ASUS Micro ATX Prime B660M-A',3000.00,'Intel','./img/B660M-A.jpg',12),
(13,'Tarjeta Madre ASUS ATX PRIME Z690-A',6000.00,'Intel','./img/Z690-A.jpg',12);
/*!40000 ALTER TABLE `motherboard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `procesadores`
--

DROP TABLE IF EXISTS `procesadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `procesadores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `precio` float(10,2) NOT NULL,
  `marca` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `generacion` int(11) NOT NULL,
  `imagen` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `procesadores`
--

LOCK TABLES `procesadores` WRITE;
/*!40000 ALTER TABLE `procesadores` DISABLE KEYS */;
INSERT INTO `procesadores` VALUES
(1,'Intel i3 9100',2000.00,'Intel',9,'./img/I9100.jpg'),
(2,'Intel i3 10100',2300.00,'Intel',10,'./img/I10100.jpg'),
(3,'Intel i3 12100',2500.00,'Intel',12,'./img/I12100.jpg'),
(4,'Intel i5 9400',3500.00,'Intel',9,'./img/I9400.jpg'),
(5,'Intel i5 10400',3400.00,'Intel',10,'./img/I10400.jpg'),
(6,'Intel i5 12400',4300.00,'Intel',12,'./img/I12400.jpg'),
(7,'Ryzen 3 3200G',3200.00,'Amd',3,'./img/amdR3200g.jpg'),
(8,'Ryzen 5 3400G',4000.00,'Amd',3,'./img/amdR3400g.jpg'),
(9,'Ryzen 7 3700X ',9000.00,'Amd',3,'./img/amdR3700x.jpg'),
(10,'Ryzen 9 3950X',12000.00,'Amd',3,'./img/amdR3950x.jpg'),
(11,'Ryzen 3 PRO 4350G',3300.00,'Amd',4,'./img/amdR4350g.jpg'),
(12,'Ryzen 5 PRO 4650G',5000.00,'Amd',4,'./img/amdR4650g.jpg'),
(13,'Ryzen 5 5600G ',5200.00,'Amd',5,'./img/amdR5600g.jpg'),
(14,'Ryzen 9 5900X',12000.00,'Amd',5,'./img/amdR5900x.jpg'),
(15,'Ryzen 7 5800X',9000.00,'Amd',5,'./img/amdR5800x.jpg'),
(16,'Intel i7-10700',7000.00,'Intel',10,'./img/I10700.jpg');
/*!40000 ALTER TABLE `procesadores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-16  7:59:39
