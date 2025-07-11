
 document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll("#services div");
    cards.forEach((card, index) => {
      card.style.opacity = 0;
      card.style.transform = "translateY(40px)";
      setTimeout(() => {
        card.style.transition = "all 0.8s ease";
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }, index * 300);
    });
  });

/* style.css */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #000;
  color: whitesmoke;
  padding: 0;
  line-height: 1.6;
  overflow-x: hidden;
}

nav {
  display: flex;
  justify-content: center;
  background: rgba(219, 150, 12, 0.1);
  padding: 15px;
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(8px);
  animation: navPulse 2s ease-in-out infinite;
  border: 2px solid rgb(219, 150, 12);
  border-radius: 12px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 20px;
  font-weight: medium;
  transition: transform 0.3s;
}

nav a:hover {
  transform: scale(1.1);
}

@keyframes navPulse {
  0%, 100% {
    box-shadow: 0 0 10px rgba(219, 150, 12, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(219, 150, 12, 0.9);
  }
}

.container {
  max-width: 900px;
  width: 100%;
  margin: 60px auto;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(12px);
  padding: 60px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1s ease-in;
}

header {
  text-align: center;
  margin-bottom: 60px;
  animation: fadeInUp 1.2s ease-in;
}

.profile-pic {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 25px;
  border: 4px solid rgb(219, 150, 12);
  box-shadow: 0 0 20px rgba(219, 150, 12, 0.5);
  transition: transform 0.5s;
}

.profile-pic:hover {
  transform: scale(1.05);
}

.highlight {
  color: rgb(219, 150, 12);
}

.title {
  font-size: 1.5rem;
  color: #ccc;
}

section {
  margin-bottom: 60px;
  padding: 20px 0;
  animation: fadeInUp 1s ease-in;
}

h2 {
  color: rgb(219, 150, 12);
  border-bottom: 1px solid rgb(219, 150, 12);
  padding-bottom: 10px;
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.skill-bar {
  margin-bottom: 20px;
}

.skill-bar p {
  margin: 0 0 8px;
  font-size: 1rem;
  color: white;
  font-weight: bold;
}

.bar {
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;
  height: 20px;
}

.progress {
  background-color:rgb(138, 134, 123);
  height: 100%;
  transition: width 1s ease-in-out;
}

.project {
  margin-bottom: 25px;
}

.social-icons {
  position: relative;
  height: 150px;
  width: 40px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInUp 1s ease-in;
}

.social-icons a {
  font-size: 24px;
  color: white;
  margin: 10px 0;
  animation: iconFloat 2s ease-in-out infinite;
  border: 2px solid rgb(219, 150, 12);
  padding: 8px;

  transition: transform 0.3s, color 0.3s;
}

.social-icons a:nth-child(1) { animation-delay: 0s; }
.social-icons a:nth-child(2) { animation-delay: 0.2s; }
.social-icons a:nth-child(3) { animation-delay: 0.4s; }

.social-icons a:hover {
  color: rgb(219, 150, 12);
  transform: scale(1.2);
}

@keyframes iconFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.projects-list a {
  display: block;
  color: white;
  margin-bottom: 10px;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.projects-list a:hover {
  color: rgb(219, 150, 12);
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

form input,
form textarea {
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

form button {
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: rgb(219, 150, 12);
  color: #000;
  cursor: pointer;
  transition: background 0.3s;
  font-weight: bold;
}

form button:hover {
  background: #fff;
  color: rgb(219, 150, 12);
}

footer {
  text-align: center;
  color: #aaa;
  margin-top: 40px;
  padding-bottom: 20px;
  font-size: 0.9rem;
}

@media (max-width: 600px) {
  .container {
    padding: 30px;
    margin: 30px 10px;
  }
  .profile-pic {
    width: 180px;
    height: 180px;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

#services img:hover {
    transform: scale(1.05);
    transition: transform 0.4s ease;
  }
  #about a:hover {
    background-color: white;
    color: rgb(219, 150, 12);
  }
  @media (max-width: 768px) {
      .services-container {
        flex-direction: column;
        align-items: center;
      }
      .service-box {
        width: 90%;
      }
    }





  @media (max-width: 768px) {
  .services-container {
    flex-direction: column;
    align-items: center;
  }
  .service-box {
    width: 90%;
  }
}

  