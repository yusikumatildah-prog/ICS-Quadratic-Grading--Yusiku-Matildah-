<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Quadratic Solver & Grading System</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f5f7fa;
      color: #222;
      margin: 40px;
      line-height: 1.6;
    }
    h1 {
      text-align: center;
      color: #00509e;
    }
    section {
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      padding: 20px;
      margin-bottom: 30px;
    }
    label { display: block; margin-top: 10px; }
    input {
      padding: 6px;
      margin-top: 4px;
      width: 100%;
      box-sizing: border-box;
    }
    button {
      margin-top: 15px;
      padding: 8px 16px;
      border: none;
      background: #0078d7;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover { background: #005bb5; }
    .result {
      margin-top: 15px;
      background: #e9f5ff;
      padding: 10px;
      border-radius: 8px;
    }
    .error {
      color: red;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <h1>Quadratic Equation Solver & Grading System</h1>

  <!-- Quadratic Solver Section -->
  <section>
    <h2>1️⃣ Quadratic Equation Solver (ax² + bx + c = 0)</h2>
    <label for="a">Enter a:</label>
    <input type="number" id="a" step="any">
    <label for="b">Enter b:</label>
    <input type="number" id="b" step="any">
    <label for="c">Enter c:</label>
    <input type="number" id="c" step="any">
    <button onclick="solveQuadratic()">Compute</button>
    <button onclick="resetQuadratic()">Reset</button>
    <div id="quadError" class="error"></div>
    <div id="quadResult" class="result"></div>
  </section>

  <!-- Grading System Section -->
  <section>
    <h2>2️⃣ Score to Grade Converter</h2>
    <label for="score">Enter Score (0–100):</label>
    <input type="number" id="score" step="1">
    <button onclick="computeGrade()">Compute Grade</button>
    <button onclick="resetGrade()">Reset</button>
    <div id="gradeError" class="error"></div>
    <div id="gradeResult" class="result"></div>
  </section>

  <script>
    // ===== Quadratic Solver =====
    function solveQuadratic() {
      const a = parseFloat(document.getElementById('a').value);
      const b = parseFloat(document.getElementById('b').value);
      const c = parseFloat(document.getElementById('c').value);
      const error = document.getElementById('quadError');
      const result = document.getElementById('quadResult');
      error.textContent = "";
      result.textContent = "";

      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        error.textContent = "Please enter valid numeric values for a, b, and c.";
        return;
      }
      if (a === 0) {
        error.textContent = "Value of a cannot be zero.";
        return;
      }

      const D = b*b - 4*a*c;
      let output = Discriminant (D) = ${D.toFixed(2)}<br>;

      if (D > 0) {
        const root1 = (-b + Math.sqrt(D)) / (2*a);
        const root2 = (-b - Math.sqrt(D)) / (2*a);
        output += Two distinct real roots:<br>x₁ = ${root1.toFixed(3)}, x₂ = ${root2.toFixed(3)};
      } else if (D === 0) {
        const root = -b / (2*a);
        output += One real repeated root:<br>x = ${root.toFixed(3)};
      } else {
        const real = (-b / (2*a)).toFixed(3);
        const imag = (Math.sqrt(-D) / (2*a)).toFixed(3);
        output += Two complex conjugate roots:<br>x₁ = ${real} + ${imag}i, x₂ = ${real} - ${imag}i;
      }

      result.innerHTML = output;
    }

    function resetQuadratic() {
      document.getElementById('a').value = "";
      document.getElementById('b').value = "";
      document.getElementById('c').value = "";
      document.getElementById('quadResult').textContent = "";
      document.getElementById('quadError').textContent = "";
    }

    // ===== Grading System =====
    function computeGrade() {
      const score = parseInt(document.getElementById('score').value);
      const error = document.getElementById('gradeError');
      const result = document.getElementById('gradeResult');
      error.textContent = "";
      result.textContent = "";

      if (isNaN(score)) {
        error.textContent = "Please enter a valid score.";
        return;
      }
      if (score < 0 || score > 100) {
        error.textContent = "Score must be between 0 and 100.";
        return;
      }

      let grade = "";
      if (score >= 85) grade = "A+";
      else if (score >= 75) grade = "A";
      else if (score >= 65) grade = "B+";
      else if (score >= 60) grade = "B";
      else if (score >= 55) grade = "C+";
      else if (score >= 50) grade = "C";
      else grade = "D";

      result.textContent = Score ${score} → Grade ${grade};
    }

    function resetGrade() {
      document.getElementById('score').value = "";
      document.getElementById('gradeResult').textContent = "";
      document.getElementById('gradeError').textContent = "";
    }
  </script>
</body>
</html>