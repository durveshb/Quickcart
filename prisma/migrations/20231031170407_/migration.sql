-- CreateTable
CREATE TABLE `Product` (
    `id` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `category` ENUM('incense_stick', 'camphor', 'home_care') NOT NULL,
    `fragrance` ENUM('kesar_chandan', 'kesar', 'twilight', 'rose', 'pineapple', 'lemon', 'plain') NOT NULL,
    `packaging` ENUM('round', 'box', 'pouch', 'zipper', 'bottle') NOT NULL,
    `weight` ENUM('g50', 'g100', 'g200', 'ml50', 'ml100', 'ml200') NOT NULL,
    `price` INTEGER NOT NULL,

    UNIQUE INDEX `Product_name_key`(`name`),
    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
