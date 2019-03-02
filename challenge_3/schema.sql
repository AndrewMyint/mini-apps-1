CREATE DATABASE checkout;

USE checkout;

CREATE TABLE users (
 UserId INTEGER AUTO_INCREMENT PRIMARY KEY,
 Username VARCHAR(100),
 UserPassword VARCHAR(100)
);

CREATE TABLE userAddress(
  AddressId INTEGER,
  line1 VARCHAR(200),
  line2 VARCHAR(200),
  City  VARCHAR(50),
  StateName VARCHAR(50),
  ZipCode VARCHAR(20),
  PhoneNumber INTEGER,
  FOREIGN KEY(AddressId) REFERENCES users(UserId)
);

CREATE TABLE creditCard(
  CreditId INTEGER,
  ExpiryDate VARCHAR(100),
  Cvv INTEGER,
  BillingZipCode VARCHAR(20),
  FOREIGN KEY(CreditId) REFERENCES users(UserId)
);