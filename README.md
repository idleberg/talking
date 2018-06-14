# Minimal Working Example of Providing and Consuming Services Between Atom Packages

## Introduction

It would be nice if your Atom package might call some code in another Atom package, right? To do this, one package can provide a service and another package can consume that service.

## The Deal

Package One provides a service -- a function that can log the string "A Thing!" to the console" -- and Package Two consumes this service.

## The Code

### Package 1

"Package1.js" contains a function called `ProvidePackage1()` and Package One's `package.json` file registers this function in a `providedServices` field. (The `versions` subfield is so you don't break services as you update your package: you can introduce new functions for new versions while still providing the older versions' services.)

### Package 2

"Package2.js" contains a function called `ConsumePackage1()` and Package Two's `package.json` registers this function in a `consumedServices` field. (You have a versions subfield here, too.)

## Instructions for Use

Fire up Atom with these two packages loaded -- call `apm link package1 package2` from your local repo clone to load these packages on Atom startup -- and open Atom. `ctrl+alt+l` will log a string from package1, while `ctrl+alt+L` will use package one's provided service to log the same string via package two.
