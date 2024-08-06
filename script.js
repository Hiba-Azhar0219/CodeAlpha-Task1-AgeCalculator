function calculateAgeAndWellness() {
  const birthdate = new Date(document.getElementById("birthdate").value);
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDifference = today.getMonth() - birthdate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthdate.getDate())
  ) {
    age--;
  }

  document.getElementById("result").innerText = `Your age is ${age} years.`;

  let recommendations = "";

  if (age >= 0 && age <= 12) {
    recommendations = `
            <h2>Recommended for Children (0-12 years)</h2>
            <p><strong>Nutrition:</strong> Balanced diet with a variety of fruits, vegetables, lean proteins, and whole grains.</p>
            <p><strong>Exercise:</strong> At least 1 hour of physical activity daily, including play, sports, and activities that strengthen bones and muscles.</p>
            <p><strong>Wellness Tip:</strong> Ensure regular sleep patterns and maintain hydration.</p>
        `;
  } else if (age >= 13 && age <= 19) {
    recommendations = `
            <h2>Recommended for Teenagers (13-19 years)</h2>
            <p><strong>Nutrition:</strong> Focus on nutrient-dense foods, adequate protein intake, and limit processed foods.</p>
            <p><strong>Exercise:</strong> At least 1 hour of moderate to vigorous activity daily, including sports and fitness routines.</p>
            <p><strong>Wellness Tip:</strong> Balance screen time with physical activities and ensure adequate sleep.</p>
        `;
  } else if (age >= 20 && age <= 39) {
    recommendations = `
            <h2>Recommended for Adults (20-39 years)</h2>
            <p><strong>Nutrition:</strong> Maintain a balanced diet rich in vegetables, fruits, lean proteins, and healthy fats.</p>
            <p><strong>Exercise:</strong> At least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity weekly, plus muscle-strengthening exercises.</p>
            <p><strong>Wellness Tip:</strong> Manage stress through relaxation techniques and ensure regular health check-ups.</p>
        `;
  } else if (age >= 40 && age <= 59) {
    recommendations = `
            <h2>Recommended for Middle-aged Adults (40-59 years)</h2>
            <p><strong>Nutrition:</strong> Focus on heart-healthy foods, reduce sodium intake, and increase fiber.</p>
            <p><strong>Exercise:</strong> Regular physical activity, including cardio and strength training, tailored to fitness levels.</p>
            <p><strong>Wellness Tip:</strong> Prioritize mental health, maintain a healthy weight, and monitor blood pressure.</p>
        `;
  } else if (age >= 60) {
    recommendations = `
            <h2>Recommended for Seniors (60+ years)</h2>
            <p><strong>Nutrition:</strong> Nutrient-dense foods with a focus on calcium, vitamin D, and hydration.</p>
            <p><strong>Exercise:</strong> Gentle exercises like walking, stretching, balance training, and light strength exercises.</p>
            <p><strong>Wellness Tip:</strong> Stay socially active, ensure regular medical check-ups, and prioritize mental well-being.</p>
        `;
  } else {
    recommendations = `<p>Please enter a valid date of birth.</p>`;
  }

  document.getElementById("wellness-recommendations").innerHTML =
    recommendations;
}

document.addEventListener("DOMContentLoaded", () => {
  const icons = [
    "fas fa-heartbeat",
    "fas fa-dumbbell",
    "fas fa-apple-alt",
    "fas fa-carrot",
    "fas fa-water",
    "fas fa-running",
    "fas fa-calculator",
  ];

  const rows = 10;
  const cols = 10;
  const iconSize = 20;

  const body = document.body;
  const offsetX = window.innerWidth / cols;
  const offsetY = window.innerHeight / rows;

  for (let i = 0; i < rows * cols; i++) {
    const iconElement = document.createElement("i");
    iconElement.className = `icon ${
      icons[Math.floor(Math.random() * icons.length)]
    }`;
    const row = Math.floor(i / cols);
    const col = i % cols;
    iconElement.style.left = `${col * offsetX + offsetX / 2 - iconSize / 2}px`;
    iconElement.style.top = `${row * offsetY + offsetY / 2 - iconSize / 2}px`;
    body.appendChild(iconElement);
  }
});
