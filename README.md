#  Ping Pong 

#### By _**Bably Kumari**_

## Description

Web application that takes a number from a user and returns a range of numbers from 1 to the chosen number with the following exceptions:

   * Numbers divisible by 3 are replaced with "ping"
   * Numbers divisible by 5 are replaced with "pong"
   * Numbers divisible by 15 are replaced with "ping-pong"


## Setup/Installation Requirements

* [clone it](https://github.com/bablyseattle/ping-pong)
* _Open file "index.html" in your choice of browser_
* _Enjoy !_

## Known Bugs

_There are no known bugs at this time_

## Support and contact details

__

## Technologies Used
	* HTML
	* CSS
	* JavaScript
### Specifications
	1. It can count up to the provided number.
	 	* Example Input : 5
		* Example Output : 1,2,3,4,5
	2. It displays "ping" in place of numbers which are divisible by 3.
		* Example Input : 5
		* Example Output : 1,2,ping,4,5
	3. It displays "pong" in place of numbers which are divisible by 5.
		* Example Input : 5
		* Example Output : 1,2,ping,4,pong
	4. It displays "pingpong" in place of numbers which are divisible by 15. 
		* Example Input : 16
		* Example Output : 1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pingpong,16
	5. It doesnot allow input except numbers.
		* Example Input : "hello"
		* Example Output : "Invalid Input. Please enter a number!"
	6. It returns error when input field in empty.
		* Example Input : ""
		* Example Output : "Error : Please enter a number!"
	7. It prompt user to enter number >= 1 if user enter 0 or negative number.
		* Example Input : 0
		* Example Output : "Please enter number greator than or equal to 1"

### License

MIT License

Copyright (c) [2017] [Bably Kumari]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
