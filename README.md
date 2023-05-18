# week3-challenge

## Description
This is a random password generator. It will take user unput to generate a password of specified length (8-128 characters) and contain at least 1 character from each character class that the user requests.

There is an error checking algorithm in place to detect whether the user has entered a valid password length, and also a number. It the user enters a number that is too small, too large, or NaN, then the prompt will repeatedly until the user inputs a valid password length.

There is an error checking algorithm that detects whether the user has selected any character classes. As a password cannot be generated without knowing which character classes to pull from, the prompts will cycle repeatedly until the user selects at least one.

An array is generated to store all of the characters that will be used in the password. A second array of index numbers is then generated in a random order. The password becomes the characters from the first array in the order that the index array specifies. There is an antiduplication algorithm built into the index array so that it contains the same number of indices as the character array, and that each index is never duplicated. In this way, it is ensured that all characters from the character array get used and that all of the users inputs are satisfied.

The password is then returned from the password generation function so that it can be displayed to the user.

## Usage
Prompts and confirms will be presented to the user when they click the "Generate Password" button. The user is required to answer the prompts and confirm the details of the password they want generated.

## Visual

[This is a picture of what the full webpage looks like after a password has been generated with 20 characters and all character classes enabled](/images/webpage.jpeg)

## URLs

[This is the GitHub repository for this webpage](https://github.com/Shippo704/week3-challenge)

[This is the deployed webpage]()
