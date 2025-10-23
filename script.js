// ========== Quadratic Solver ==========
document.getElementById("solveBtn").addEventListener("click", solveQuadratic);
document.getElementById("resetQuad").addEventListener("click", resetQuadratic);

function solveQuadratic() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const error = document.getElementById("quadError");
  const result = document.getElementById("quadResult");

  error.textContent = "";
  result.textContent = "";

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    error.textContent = "Please enter valid numeric values for a, b, and c.";
    return;
  }
  if (a === 0) {
    error.textContent = "Value of 'a' cannot be zero.";
    return;
  }

  const D = b * b - 4 * a * c;
  let output = Discriminant (D) = ${D.toFixed(2)}<br>;

  if (D > 0) {
    const root1 = (-b + Math.sqrt(D)) / (2 * a);
    const root2 = (-b - Math.sqrt(D)) / (2 * a);
    output += Two distinct real roots:<br>x₁ = ${root1.toFixed(3)}, x₂ = ${root2.toFixed(3)};
  } else if (D === 0) {
    const root = -b / (2 * a);
    output += One real repeated root:<br>x = ${root.toFixed(3)};
  } else {
    const real = (-b / (2 * a)).toFixed(3);
    const imag = (Math.sqrt(-D) / (2 * a)).toFixed(3);
    output += Two complex conjugate roots:<br>x₁ = ${real} + ${imag}i, x₂ = ${real} - ${imag}i;
  }

  result.innerHTML = output;
}

function resetQuadratic() {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("c").value = "";
  document.getElementById("quadResult").textContent = "";
  document.getElementById("quadError").textContent = "";
}

// ========== Grading System ==========
document.getElementById("gradeBtn").addEventListener("click", computeGrade);
document.getElementById("resetGrade").addEventListener("click", resetGrade);

function computeGrade() {
  const score = parseInt(document.getElementById("score").value);
  const error = document.getElementById("gradeError");
  const result = document.getElementById("gradeResult");

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
  document.getElementById("score").value = "";
  document.getElementById("gradeResult").textContent = "";
  document.getElementById("gradeError").textContent = "";
}