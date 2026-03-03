fetch("profile.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Nepodařilo se načíst JSON");
    }
    return response.json();
  })
  .then(data => {

    // Jméno
    const nameElement = document.querySelector("#name");
    nameElement.textContent = data.name;

    // Skills
    const skillsList = document.querySelector("#skills");

    data.skills.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillsList.appendChild(li);
    });

    // Interests
    const interestsSection = document.querySelector("#interests");

    data.interests.forEach(interest => {
      const p = document.createElement("p");
      p.textContent = interest;
      interestsSection.appendChild(p);
    });

  })
  .catch(error => {
    console.error("Chyba:", error);
    document.body.innerHTML += "<p>Chyba při načítání dat.</p>";
  });
