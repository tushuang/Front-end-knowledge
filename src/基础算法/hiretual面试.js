// Boolean search is powerful in sourcing and recruiting.
// We will use machine learning prediction to provide relations among skills. Now we need a function to transfer those relations to a string with correct boolean format.

// Example1:
// input: [["java", "python"], ["machine learning", "deep learning"]]
// output: ("java" OR "python") AND ("machine learning" OR "deep learning")

// Example2:
// input: [[["java", "maven", "spring"], "python", ["java", "maven", "spring"]], ["machine learning", "deep learning"]]
// output: (("java" OR "maven" OR "spring") AND "python" AND ("java" OR "maven" OR "spring")) AND ("machine learning" OR "deep learning")

// Follow up:
// There are some boolean are unnecessary. For example: (Java OR Java 8) AND (Python OR Python 3) are equivalent to Java AND Python since the search is checking with substring.
// Can you simplify the boolean string to make search speed faster?
// Plus, what if search mechanism is by token instead of substring.

function get(arr) {
  return arr.reduce((a, b) => {
    if (Array.isArray(b)) {
      return a ? a + " AND (" + get(b) + ")" : "(" + get(b) + ")";
    } else {
      return a ? a + " OR " + b : b;
    }
  }, "");
}

console.log(
  get([
    [["java", "maven", "spring"], "python", ["java", "maven", "spring"]],
    ["machine learning", "deep learning"],
  ])
);
