import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 60px)", 
        padding: "20px",
        flexWrap: "wrap",
      }}
    >
      {/* Text Content */}
      <div style={{ flex: "1", minWidth: "300px", textAlign: "center", padding: "20px" }}>
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            textShadow: "2px 2px 5px rgba(0,0,0,1)",
          }}
        >
          Welcome To My Profile!
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            maxWidth: "600px",
            textShadow: "1px 1px 3px rgba(0,0,0,1)",
            margin: "0 auto",
          }}
        >
          Here, you’ll discover more about my journey, including my education, 
          hobbies, and passions. Thank you for visiting!
        </p>
      </div>

      {/* Image */}
      <div style={{ flex: "1", minWidth: "300px", display: "flex", justifyContent: "center" }}>
        <img
          src="sda.jpg"
          alt="Profile"
          style={{
            maxWidth: "100%",
            maxHeight: "400px",
            borderRadius: "15px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
          }}
        />
      </div>
    </div>
  );
}

function About() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: "10px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        margin: "0 auto",
        maxWidth: "900px",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        About Me
      </h1>

      {/* Brief Introduction */}
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "800px",
          marginBottom: "20px",
          color: "#555",
        }}
      >
        I’m EJ, a passionate developer who loves creating clean, intuitive, and visually appealing websites and applications. 
        With a deep interest in web technologies and design, I’m continuously learning and improving my skills to craft seamless user experiences.
      </p>

      {/* Skills & Expertise */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "800px",
          marginBottom: "40px",
        }}
      >
        <div style={{ textAlign: "center", flex: 1, margin: "0 15px" }}>
          <h3 style={{ fontSize: "1.5rem", color: "#333" }}>Skills</h3>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              fontSize: "1rem",
              color: "#555",
            }}
          >
            <li>React.js</li>
            <li>Node.js</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
        <div style={{ textAlign: "center", flex: 1, margin: "0 15px" }}>
          <h3 style={{ fontSize: "1.5rem", color: "#333" }}>Tools</h3>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              fontSize: "1rem",
              color: "#555",
            }}
          >
            <li>Git</li>
            <li>Docker</li>
            <li>VS Code</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>

      {/* Contact CTA */}
      <div style={{ marginTop: "40px" }}>
        <a
          href="/contact"
          style={{
            padding: "12px 25px",
            fontSize: "1.2rem",
            backgroundColor: "#333",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none",
            transition: "background-color 0.3s",
          }}
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div
      style={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: "10px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        margin: "0 auto",
        maxWidth: "900px",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "30px",
        }}
      >
        My Education
      </h1>

      <div>
        {/* Education Timeline or List */}
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            fontSize: "1.2rem",
            color: "#555",
            textAlign: "left",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <li style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "1.5rem", color: "#333" }}>
              Bachelor of Science in Information System
            </h3>
            <p style={{ fontStyle: "italic", color: "#777" }}>
              Naga College Foundation Inc. (2024 - 2025)
            </p>
            <p style={{ color: "#555" }}>
              Currently Studying, Second Year
            </p>
          </li>
          <li style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "1.5rem", color: "#333" }}>
              High School Diploma
            </h3>
            <p style={{ fontStyle: "italic", color: "#777" }}>
              San Jose Pili National High School (2023 - 2024)
            </p>
            <p style={{ color: "#555" }}>
              Focused on Humss subjects, With Honor.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}


function Hobbies() {
  const hobbies = [
    {
      image: "basketball.jpg",
      description: "Basketball - Play with my friends.",
    },
    {
      image: "rider.jpg",
      description: "Ride a Motorcycle - Exploring the great outdoors.",
    },
    {
      image: "cook.jpg",
      description: "Cooking - Experimenting with delicious recipes.",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      {hobbies.map((hobby, index) => (
        <div
          key={index}
          style={{
            textAlign: "center",
            maxWidth: "300px",
            margin: "10px",
          }}
        >
          {/* Image */}
          <img
            src={hobby.image}
            alt={`Hobby ${index + 1}`}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          />
          {/* Description */}
          <p
            style={{
              marginTop: "10px",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            {hobby.description}
          </p>
        </div>
      ))}
    </div>
  );
}


function Contact() {
  return (
    <div
      style={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        margin: "0 auto",
        maxWidth: "900px",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "30px",
        }}
      >
        Contact Me
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          color: "#555",
          marginBottom: "30px",
        }}
      >
        You can reach out to me via any of the following platforms:
      </p>

      {/* Contact Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "30px",
        }}
      >
        <a
          href="https://github.com/EJAndrei"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "1.2rem",
            color: "#333",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.color = "#24292f")}
          onMouseOut={(e) => (e.target.style.color = "#333")}
        >
          GitHub
        </a>

        <a
          href="mailto:ejandreivillamer250@gmail.com"
          style={{
            fontSize: "1.2rem",
            color: "#333",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.color = "#d14836")}
          onMouseOut={(e) => (e.target.style.color = "#333")}
        >
          Gmail
        </a>
      </div>

      <p
        style={{
          fontSize: "1.2rem",
          color: "#555",
        }}
      >
        Feel free to connect with me via any of the links above. I look forward to hearing from you!
      </p>
    </div>
  );
}




function App() {
  const location = useLocation();

  const backgroundStyles = {
    "/": {
      backgroundImage: 'url("Jpan.gif")',
    },
    "/about": {
      backgroundImage: 'url("About.gif")',
    },
    "/education": {
      backgroundImage: 'url("Education.gif")',
    },
    "/hobbies": {
      backgroundImage: 'url("hobbies.gif")',
    },
    "/contact": {
      backgroundImage: 'url("Contact.gif")',
    },
  };

  const currentStyle = backgroundStyles[location.pathname] || {
    backgroundImage: 'url("Jpan.gif")',
  };

  return (
    <div
      style={{
        ...currentStyle,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        paddingTop: "60px",
        position: "relative",
      }}
    >
      <Navbar data-bs-theme="black" fixed="top">
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: "bold", color: "#1d1c1c" }}>
            EJ's Profile
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link-hover">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-hover">About</Nav.Link>
            <Nav.Link as={Link} to="/education" className="nav-link-hover">Education</Nav.Link>
            <Nav.Link as={Link} to="/hobbies" className="nav-link-hover">Hobbies</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-hover">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div style={{ color: 'dark', paddingTop: '80px', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Wrapper;