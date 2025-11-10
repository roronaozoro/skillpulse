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
        <div class="modal-training-content">
          <p class="modal-training-intro">
            Our Mechanical System Optimization programs enhance engineering performance by integrating reliability-centered maintenance,
            advanced diagnostics, and Industry 4.0 technologies — empowering professionals to ensure operational excellence and system reliability.
          </p>

          <ul class="modal-training-list">
            <li><i class="fa fa-bolt"></i> Fasteners Dynamics: Analysis, Reliability & Maintenance</li>
            <li><i class="fa fa-cogs"></i> Industrial Motion Control: Transmission Components & Systems</li>
            <li><i class="fa fa-gear"></i> Tribology and Maintenance of Bearings & Seals</li>
            <li><i class="fa fa-compress"></i> Engineering Pneumatics: Design, Analysis & Industrial Applications</li>
            <li><i class="fa fa-robot"></i> Industrial Mechatronics: PLC & Sensor Technologies</li>
            <li><i class="fa fa-wrench"></i> Zero Breakdown Strategy: Failure Analysis of Components</li>
            <li><i class="fa fa-chart-line"></i> Reliability 4.0: Condition-Based Monitoring Essentials</li>
            <li><i class="fa fa-globe"></i> Industry 4.0: Implementation of IoT Devices</li>
            <li><i class="fa fa-balance-scale"></i> Calibration Excellence: Accuracy in Industrial Measurements</li>
          </ul>
        </div>
      `
    }
,
    soft_skill_training: {
      title: "Soft Skill Trainings",
      icon: "users",
      content: `
        <div class="modal-training-content">
          <p class="modal-training-intro">
            Empower professionals with the behavioral and managerial skills required to lead, collaborate, and drive performance excellence in dynamic industrial environments.
          </p>

          <ul class="modal-training-list">
            <li><i class="fa fa-lightbulb-o"></i> Kaizen: The Impact of Continuous Improvement</li>
            <li><i class="fa fa-bar-chart"></i> Application of Data Analysis Tools</li>
            <li><i class="fa fa-cogs"></i> Process Analysis & Development</li>
            <li><i class="fa fa-user-circle"></i> Leadership Competency</li>
            <li><i class="fa fa-industry"></i> Lean Manufacturing</li>
          </ul>
        </div>
      `
    }
,
   industrial_solution: {
     title: "Engineering Solutions",
     icon: "cog",
     content: `
       <div class="modal-training-content">
         <p class="modal-training-intro">
           We provide sustainable, high-impact industrial engineering solutions powered by advanced technologies —
           enhancing productivity, ensuring reliability, and driving manufacturing excellence across sectors.
         </p>

         <ul class="modal-training-list">
           <li><i class="fa fa-wrench"></i> Installation & Servicing</li>
           <li><i class="fa fa-cogs"></i> Advanced Tools Sales & Service</li>
           <li><i class="fa fa-balance-scale"></i> Instrument Calibration Services</li>
           <li><i class="fa fa-industry"></i> Machine Maintenance & Troubleshooting</li>
           <li><i class="fa fa-microchip"></i> Automation System Design, Calibration & Maintenance</li>
           <li><i class="fa fa-search"></i> Industrial Inspection</li>
         </ul>
       </div>
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