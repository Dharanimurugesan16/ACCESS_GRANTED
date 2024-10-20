import React from 'react';
import image1 from './assests/1.jpeg';  // Import different images
import image2 from './assests/1.png';
import image3 from './assests/e.jpeg';

function App() {
  const blogContent = {
    sections: [
      {
        heading: "Introduction",
        content: (
          <>
            In today’s fast-paced market, gathering and acting on customer feedback is crucial for keeping products relevant and competitive. During a recent hackathon, I took on the challenge of creating an Integrated Customer Feedback Management System that streamlines feedback collection and analysis, helping businesses make data-driven decisions for product development and innovation.
            <p>In this blog, I’ll walk you through how I built this system, the tools and technologies I used, and the key features that make it a valuable asset for businesses.</p>
          </>
        )
      },
      {
        heading: "System Features",
        content: (
          <>
            <p>Here’s an overview of the key features implemented in the system:</p>
            <ul>
              <li>Product surveys</li>
              <li>Customer support interactions</li>
              <li>Social media comments</li>
            </ul>
            <p>This form captures feedback with essential fields like user ratings, comments, and product categories.</p>
          </>
        )
      },
      {
        heading: "Automated Follow-Up",
        content: "An automated follow-up email feature was implemented to send personalized messages to customers after they submit feedback. These emails express gratitude for their input and provide updates on how their feedback is being addressed or integrated. This approach strengthens customer relationships by keeping them informed about the impact of their suggestions on product development."
      }
    ]
  };

  const images = [image1, image2, image3];

  const containerStyle = {
    fontFamily: '"Arial", sans-serif',
    lineHeight: 1.6
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#333',
    color: 'white'
  };

  const logoStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold'
  };

  const navStyle = {
    display: 'flex'
  };

  const navListStyle = {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const navItemStyle = {
    marginLeft: '20px'
  };

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s'
  };

  //const navLinkHoverStyle = {
    //color: '#ddd'
  //};

  const sectionContainerStyle = (isEven) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '40px 0',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    flexDirection: isEven ? 'row' : 'row-reverse'
  });

  const textContentStyle = {
    flex: 2,
    padding: '20px'
  };

  const imageContainerStyle = (isEven) => ({
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: isEven ? '20px' : 0,
    marginRight: !isEven ? '20px' : 0
  });

  const imageStyle = {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const footerStyle = {
    textAlign: 'center',
    padding: '20px 0',
    marginTop: '20px',
    borderTop: '2px solid #eee',
    fontSize: '0.9em',
    color: '#777'
  };

  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <header style={headerStyle}>
        <h1 style={logoStyle}>Blog</h1>
        <nav style={navStyle}>
          <ul style={navListStyle}>
            <li style={navItemStyle}><a href="#section1" style={navLinkStyle}>Introduction</a></li>
            <li style={navItemStyle}><a href="#section2" style={navLinkStyle}>System Features</a></li>
            <li style={navItemStyle}><a href="#section3" style={navLinkStyle}>Automated Follow-Up</a></li>
          </ul>
        </nav>
      </header>

      {/* Blog Content */}
      <main>
        {blogContent.sections.map((section, index) => (
          <div
            id={`section${index + 1}`}
            key={index}
            style={sectionContainerStyle(index % 2 === 0)}
          >
            <div style={textContentStyle}>
              <section>
                <h2>{section.heading}</h2>
                <p>{section.content}</p>
              </section>
            </div>

            <div style={imageContainerStyle(index % 2 === 0)}>
              <img
                src={images[index]}  
                alt={`Blog Image ${index + 1}`}
                style={imageStyle}
              />
            </div>
          </div>
        ))}
      </main>

      {/* Footer Section */}
      <footer style={footerStyle}>
        <p>© 2024 Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
