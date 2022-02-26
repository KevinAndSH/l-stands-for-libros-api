-- CreateTable
CREATE TABLE `Genres` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductGenre` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER UNSIGNED NOT NULL,
    `genre_id` INTEGER UNSIGNED NOT NULL,

    INDEX `genre_id`(`genre_id`),
    INDEX `product_id`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Products` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `img_path` VARCHAR(50) NULL DEFAULT 'default.png',
    `name` VARCHAR(255) NOT NULL,
    `author` VARCHAR(50) NOT NULL,
    `isbn` VARCHAR(13) NOT NULL,
    `house` VARCHAR(50) NOT NULL,
    `price` INTEGER UNSIGNED NOT NULL,
    `sales` INTEGER UNSIGNED NULL DEFAULT 0,
    `rating` INTEGER NULL DEFAULT 0,
    `description` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserProduct` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `product_id` INTEGER UNSIGNED NOT NULL,
    `quantity` INTEGER NULL DEFAULT 1,
    `rating` TINYINT UNSIGNED NULL,

    INDEX `product_id`(`product_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `img_path` VARCHAR(50) NULL DEFAULT 'default.png',
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `category` VARCHAR(10) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` CHAR(60) NOT NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductGenre` ADD CONSTRAINT `ProductGenre_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `Genres`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ProductGenre` ADD CONSTRAINT `ProductGenre_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `Products`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `UserProduct` ADD CONSTRAINT `UserProduct_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `Products`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `UserProduct` ADD CONSTRAINT `UserProduct_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
