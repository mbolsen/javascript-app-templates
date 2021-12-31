CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20) UNIQUE DEFAULT 'Anonymous'
);

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userid INT,
  text VARCHAR(150),
  roomname VARCHAR(20) DEFAULT 'Lobby',
  FOREIGN KEY (userid)
    REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Message'
--
-- ---

-- DROP TABLE IF EXISTS `message`;

-- CREATE TABLE `message` (
--   `id` INTEGER AUTO_INCREMENT DEFAULT UNIQUE,
--   `userid` INTEGER NULL DEFAULT NULL,
--   `text` VARCHAR(150) NULL DEFAULT NULL,
--   `roomname` VARCHAR(20) NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'Users'
-- --
-- -- ---

-- DROP TABLE IF EXISTS `users`;

-- CREATE TABLE `users` (
--   `id` INTEGER AUTO_INCREMENT DEFAULT UNIQUE,
--   `username` VARCHAR(20) NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
-- KEY ()
-- );

-- -- ---
-- -- Foreign Keys
-- -- ---

-- ALTER TABLE `message` ADD FOREIGN KEY (userid) REFERENCES `users` (`id`);

-- -- ---
-- Table Properties
-- ---

-- ALTER TABLE `Message` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Message` (`id`,`userid`,`text`,`roomname`) VALUES
-- ('','','','');
-- INSERT INTO `Users` (`id`,`username`) VALUES
-- ('','');