SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

DROP TABLE IF EXISTS `images`;
DROP TABLE IF EXISTS `car`;

CREATE TABLE IF NOT EXISTS `car` (
	`VID` varchar(255) NOT NULL,
	`item_number` varchar(25) NOT NULL,
	`name` varchar(255),
	`year` int(5),
	`lower_price` int(11),
	`higher_price` int(11),
	`mileage` int(11),
	`cylinders` varchar(5),
	`city_mpg` int(5),
	`highway_mpg` int(5),
	`engine` varchar(10),
	PRIMARY KEY (`item_number`, `VID`)
);

INSERT INTO `car` (`VID`, `item_number`, `name`, `year`, `lower_price`, `higher_price`, `mileage`, `cylinders`, `city_mpg`, `highway_mpg`, `engine`) VALUES
	('3GNDA13D96S631406', '1395P', 'Ford Focus', 2012, 8500, 9000, 200000, 'L4', 20, 20, '1.3');

CREATE TABLE IF NOT EXISTS `images` (
	`item_number` varchar(25) NOT NULL,
	`image_name` varchar(255),
	FOREIGN KEY (`item_number`) REFERENCES car(`item_number`)
);

INSERT INTO `images` (`item_number`, `image_name`)
	VALUES ('1395P', '1.jpg'), ('1395P', '2.jpg'), ('1395P', '3.jpg'), ('1395P', '4.jpg'), ('1395P', '5.jpg'), ('1395P', '6.jpg');