"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
/*const applyDiscount = (price, disc) => price * disc
alert(`your discounted price is ${applyDiscount(disc, price)}`)*/

const isTrue = (T) => T === true

const isFalse = (F) => F === false

const not = (notThis) => !notThis

const addOne = (plusOne) => ++ plusOne

const isEven = (even) => even % 2 === 0

const isIdentical = (same1, same2) => same1 === same2

const isEqual = (equal1, equal2) => equal1 == equal2

const or = (this1, that1) => this1 || that1

const and = (and1, and2) => and1 && and2

const concat = (concat1, concat2) => String(concat1) + String(concat2)
//or
const concat = (concat1, concat2) => "" + concat1 + concat2
//the "" cause the function to consider the result as a string being added


