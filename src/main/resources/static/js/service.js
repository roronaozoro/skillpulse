const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalImageContainer = document.getElementById('modalImageContainer');
const closeBtn = document.querySelector('.close-btn');

  // 🔹 Detailed content database
  const modalData = {
    technical_training_section: {
      title: "Mechanical System Optimization",
      icon: "cpu",
      content: `
        <ul>
          <li>Fasteners Dynamics: Analysis, Reliability & Maintenance</li>
          <li>Industrial Motion Control: Transmission Components & Systems</li>
          <li>Tribology and Maintenance of Bearings & Seals</li>
          <li>Engineering Pneumatics: Design, Analysis & Industrial Applications</li>
          <li>Industrial Mechatronics: PLC & Sensor Technologies</li>
          <li>Zero Breakdown Strategy: Failure Analysis of Component</li>
          <li>Reliability 4.0: Condition Based Monitoring Essentials</li>
          <li>Industry 4.0: Implementation of IoT Devices</li>
          <li>Calibration Excellence: Accuracy in Industrial Measurements</li>
        </ul>
      `
    },
    soft_skill_training: {
      title: "Soft Skill Trainings",
      icon: "users",
      content: `
        <ul>
          <li>Kaizen: The impact of Continuous Improvement</li>
          <li>Application of Data Analysis Tools</li>
          <li>Process Analysis& Development</li>
          <li>Leadership Competency</li>
          <li>Lean Manufacturing</li>
        </ul>
      `
    },
   industrial_solution: {
     title: "Engineering Solutions",
     icon: "cog",
     content: `
       <p>
         We deliver sustainable industrial engineering solutions powered by cutting-edge technology,
         driving manufacturing excellence. Our strategic approach reduces operational costs and
         accelerates business growth.
       </p>
       <ul>
         <li>Installation & Servicing</li>
         <li>Advanced Tools Sales & Service</li>
         <li>Instrument Calibration Services</li>
         <li>Machine Maintenance & Troubleshooting</li>
         <li>Automation System Design, Calibration & Maintenance</li>
         <li>Industrial Inspection</li>
       </ul>
     `
   }
  };

  // 🔹 Handle Read More button clicks
  document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const target = btn.getAttribute('href').replace('#', '');
      const data = modalData[target];

      if (data) {
        modalTitle.textContent = data.title;
        modalText.innerHTML = data.content;
        modalImageContainer.innerHTML = data.image
          ? `<img src="${data.image}" alt="${data.title}">`
          : '';
        document.querySelector('.modal-icon').setAttribute('data-lucide', data.icon);
        lucide.createIcons();
      } else {
        modalTitle.textContent = "More Information";
        modalText.innerHTML = "<p>Details coming soon.</p>";
        modalImageContainer.innerHTML = '';
      }

      modal.style.display = 'flex';
    });
  });

  closeBtn.onclick = () => (modal.style.display = 'none');
  window.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };