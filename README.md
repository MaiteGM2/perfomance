The goal of this exercise is to analyze the performance of different code fragments and evaluate their efficiency using benchmarking techniques. Examples of common operations, such as loops and variable handling, will be performed and the execution time of each will be measured to compare their performance.

To measure times, you can use console.time (read documentation)
console.time("for loop")
console.timeEnd("for loop");

1. Comparing loops:
Implement a for loop, a while loop, and a forEach loop that iterate over a list of 1,000,000 elements.
Measure the execution time of each one and compare them. Which loop is faster and why?

2. Using variables:
Create two versions of a function that performs a simple mathematical operation 1,000,000 times: one where you use local variables and another where you use global variables.
Measure the execution time of each version. Which is more time-efficient and why?

3. Code optimization:
Write a function that uses string concatenation with the + operator and another that uses
string templates (template literals) in a repetitive operation.

Measure the execution time of both versions. Which is faster and how does the number of operations influence performance?
