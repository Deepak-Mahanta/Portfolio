// -----------------FLOTTING NAV----------------
const flotingNavs = document.querySelectorAll(".floting-nav a");

const removeActiveClass = () => {
  flotingNavs.forEach((nav) => {
    nav.classList.remove("active");
  });
};

flotingNavs.forEach((nav) => {
  nav.addEventListener("click", () => {
    removeActiveClass();
    nav.classList.add("active");
  });
});

// -----------------RESUME----------------
const resumeRight = document.querySelector(".resume-right");
const experienceContent = `
<h4>Experience</h4>
           <p>Here, you will find more information about my internships.</p>
          <ul>           
            <li>
              <h6>Jun 2024 – Apr 2024</h6>
              <h5>Full Stack Web Development Intern</h5>
              <p>Business Web Solution</p>             
              
            </li>
          </ul>
          <ul>           
            <li>
              <h6>Dec 2022 – Feb 2023</h6>
              <h5>Cyber security virtual internship program</h5>
              <p>EduSkills Foundation · Internship</p>             
              
            </li>
          </ul>

`;
const experienceBtn = document.querySelector(".experience-btn");
experienceBtn.addEventListener("click", () => {
  resumeRight.innerHTML = experienceContent;
  experienceBtn.classList.add("primary");
  resumeRight.className = "resume-right";
  // remove classes from other button
  aboutBtn.classList.remove("primary");
  skillsBtn.classList.remove("primary");
  educationBtn.classList.remove("primary");
});
// set experience content as the default content for resume right when page lods
resumeRight.innerHTML = experienceContent;

// =========EDUCATION ===========
const educationBtn = document.querySelector(".education-btn");
const educationContent = `<h4>Education</h4>
                <p>Here, you will find information about my educational background.</p>
                <ul>
                    <li>
                        <h5>Biju Patnaik University of Technology </h5>
                        <p>

                           I completed my <b>B.Tech</b> degree at the <b>Konark Institute of Science and Technology</b>, affiliated with <b>Biju Patnaik University of Technology.</b>
                        </p>
                    </li>
                    
                   
                </ul>`;

educationBtn.addEventListener("click", () => {
  resumeRight.innerHTML = educationContent;
  resumeRight.classList.add("education");
  resumeRight.className = "resume-right education ";

  educationBtn.classList.add("primary");
  // remove classes from other button
  aboutBtn.classList.remove("primary");
  skillsBtn.classList.remove("primary");
  experienceBtn.classList.remove("primary");
});

// ============ skills ==========

const skillsContent = `<h4>Skills</h4>
<p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
<ul>
    <li><img src="./assets/html.png" alt="ReactJS logo"></li>
    <li><img src="./assets/css.png" alt="ReactJS logo"></li>
    <li><img src="./assets/js.png" alt="ReactJS logo"></li>
    <li><img src="./assets/react.png" alt="ReactJS logo"></li>
    <li><img src="./assets/node.png" alt="NodeJS logo"></li>
    <li><img src="./assets/next.png" alt="NextJS logo"></li>
    <li><img src="./assets/tailwind.png" alt="Tailwind logo"></li>
    <li><img src="./assets/figma.png" alt="Prisma logo"></li>
    <li><img src="./assets/mongodb.png" alt="MongoDB logo"></li>
    <li><img src="./assets/jwt.png" alt="JWT logo"></li>
    <li><img src="./assets/logo-mysql-170x115.png" alt="mysql logo"></li>
    
</ul>`;

const skillsBtn = document.querySelector(".skills-btn");
skillsBtn.addEventListener("click", () => {
  resumeRight.innerHTML = skillsContent;
  resumeRight.className = "resume-right skills";
  skillsBtn.classList.add("primary");
  // remove classes from other button
  aboutBtn.classList.remove("primary");
  experienceBtn.classList.remove("primary");
  educationBtn.classList.remove("primary");
});

// ========== ABOUT ===========
const aboutContact = `<h4>About me</h4>
                
                 <p> <b>FrontEnd Developer</b> <br/>
                  With a keen eye for design and usability, I ensure that every interface I create is intuitive, responsive, and visually appealing.  
                 <p> <b>Backend Developer</b> <br/>
                    With expertise in database management, server configuration, and API development, I ensure that backend systems are scalable, efficient, and secure. 
                 
                 </p> 
                 <p> I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <b> contact</b> me.
                 
                 </p> 

                   

                 
                 
                 `;

const aboutBtn = document.querySelector(".about-btn");
aboutBtn.addEventListener("click", () => {
  resumeRight.innerHTML = aboutContact;
  resumeRight.className = "resume-right about";
  aboutBtn.classList.add("primary");
  // remove classes from other button
  skillsBtn.classList.remove("primary");
  experienceBtn.classList.remove("primary");
  educationBtn.classList.remove("primary");
});

//============== mixitup (project section) ----
const containerEl = document.querySelector(".projects-container");
let mixer = mixitup(containerEl, {
  animation: {
    enable: false,
  },
});
mixer.filter("*");

// -------------------------theme -------------

const themeToggler = document.querySelector(".nav-theme-btn");
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-them-variables");
  if (document.body.classList == "") {
    themeToggler.innerHTML = `<i class="ri-moon-line"></i>`;
    window.localStorage.setItem("portfolio-theme", "");
  } else {
    themeToggler.innerHTML = `<i class="ri-sun-line"></i>`;
    window.localStorage.setItem("portfolio-theme", "dark-them-variables");
  }
});

//  ----------use theme for local storage on page loading ---
const bodyClass = window.localStorage.getItem("portfolio-theme");
document.body.className = bodyClass;

// /contact form

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Optionally, perform your form submission here (via AJAX, etc.)

    // Submit the form
    this.submit(); // Submits the form with data

    // After submission, clear the form fields
    this.reset(); // This will clear all the input fields
  });
