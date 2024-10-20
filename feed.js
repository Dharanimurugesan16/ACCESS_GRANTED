// import React, { useState } from 'react';


// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();

// const CustomerFeedback = () => {
//   const [text, setText] = useState('');
//   const [listening, setListening] = useState(false);
//   const [language, setLanguage] = useState('en-US'); 
//   const [ratings, setRatings] = useState(Array(5).fill(null)); 

 
//   const questions = [
//     {
//       question: "How satisfied are you with our service?",
//       emojis: ["😡", "😐", "😊", "😃", "😍"]  
//     },
//     {
//       question: "Would you recommend us to a friend?",
//       emojis: ["😡", "😐", "😊", "😃", "😍"]
//     },
//     {
//       question: "What can we improve?",
//       emojis: ["😡", "😐", "😊", "😃", "😍"]
//     },
//     {
//       question: "How do you rate the quality of our products?",
//       emojis: ["😡", "😐", "😊", "😃", "😍"]
//     },
//     {
//       question: "How likely are you to use our services again?",
//       emojis: ["😡", "😐", "😊", "😃", "😍"]
//     }
//   ];

//   const handleLanguageChange = (event) => {
//     setLanguage(event.target.value);
//   };

//   const handleStart = () => {
//     console.log('Starting voice recognition...');
//     if (!SpeechRecognition) {
//       console.error('Speech Recognition API not supported in this browser');
//       return;
//     }

//     setListening(true);
//     recognition.lang = language;
//     recognition.continuous = false; 

//     recognition.start();

//     recognition.onresult = (event) => {
//       console.log("Recognition result received.");
//       const transcript = event.results[event.resultIndex][0].transcript; 
//       console.log("Transcript: ", transcript);
//       setText((prevText) => prevText + " " + transcript);
//     };

//     recognition.onerror = (event) => {
//       console.error('Speech Recognition Error: ', event.error);
     
//       if (event.error === 'not-allowed') {
//         alert('Microphone access denied. Please allow microphone access in your browser settings.');
//       } else if (event.error === 'service-not-allowed') {
//         alert('Speech recognition service is not allowed.');
//       }
//     };

//     recognition.onend = () => {
//       console.log('Voice recognition ended.');
//       setListening(false);
//     };
//   };

//   const handleStop = () => {
//     setListening(false);
//     recognition.stop();
//   };

//   const handleEmojiClick = (questionIndex, emojiIndex) => {
//     const updatedRatings = [...ratings];
//     updatedRatings[questionIndex] = emojiIndex;
//     setRatings(updatedRatings);
//     console.log("Ratings: ", updatedRatings); 
//   };

//   const handleSubmit = () => {
//     const feedbackData = {
//       text,
//       ratings,
//     };
//     console.log("Sending feedback to admin: ", feedbackData);
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Customer Feedback</h1>

//       {/* Display Questions with Emojis */}
//       <div style={styles.questions}>
//         {questions.map((item, questionIndex) => (
//           <div key={questionIndex} style={styles.questionContainer}>
//             <p>{item.question}</p>
//             <div style={styles.emojiContainer}>
//               {item.emojis.map((emoji, emojiIndex) => (
//                 <span
//                   key={emojiIndex}
//                   style={{
//                     ...styles.emoji,
//                     opacity: ratings[questionIndex] === emojiIndex ? 1 : 0.5,
//                   }}
//                   onClick={() => handleEmojiClick(questionIndex, emojiIndex)}
//                 >
//                   {emoji}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

      
//       <div style={styles.voiceInput}>
//         <h2>Voice Feedback</h2>

        
//         <div style={styles.languageSelector}>
//           <label>Select Language: </label>
//           <select value={language} onChange={handleLanguageChange}>
//             <option value="en-US">English (United States)</option>
//             <option value="hi-IN">Hindi (India)</option>
//             <option value="ta-IN">Tamil (India)</option>
//           </select>
//         </div>

//         <textarea
//           value={text}
//           placeholder="Your voice feedback will appear here..."
//           rows="3"
//           cols="40"
//           style={styles.textarea}
//           readOnly
//         />
//         <div style={styles.recordButtonContainer}>
//           {listening ? (
//             <button style={styles.recordButton} onClick={handleStop}>Stop Listening</button>
//           ) : (
//             <button style={styles.recordButton} onClick={handleStart}>Start Listening</button>
//           )}
//         </div>
//       </div>

      
//       <div style={styles.submitButtonContainer}>
//         <button style={styles.submitButton} onClick={handleSubmit}>Submit Feedback</button>
//       </div>
//     </div>
//   );
// };


// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//     height: '100vh', 
//     overflowY: 'auto', 
//   },
//   languageSelector: {
//     marginBottom: '20px',
//   },
//   questions: {
//     width: '100%',
//     maxWidth: '600px',
//     marginTop: '20px',
//   },
//   questionContainer: {
//     marginBottom: '20px',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//   },
//   emojiContainer: {
//     display: 'flex',
//     justifyContent: 'space-around',
//     marginTop: '10px',
//   },
//   emoji: {
//     fontSize: '36px',
//     cursor: 'pointer',
//     margin: '0 10px',
//     transition: 'opacity 0.3s', 
//   },
//   voiceInput: {
//     marginTop: '30px',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     width: '100%',
//     maxWidth: '600px',
//   },
//   textarea: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//   },
//   recordButtonContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: '10px',
//   },
//   recordButton: {
//     padding: '12px 24px', 
//     fontSize: '18px', 
//     cursor: 'pointer',
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//   },
//   submitButtonContainer: {
//     marginTop: '40px', 
//     display: 'flex',
//     justifyContent: 'center',
//     width: '100%', 
//     maxWidth: '600px', 
//   },
//   submitButton: {
//     padding: '12px 24px',
//     fontSize: '18px', 
//     cursor: 'pointer',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//   },
// };

// export default CustomerFeedback;


// import React, { useState } from 'react';

// // Check if the browser supports SpeechRecognition
// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();

// const CustomerFeedback = () => {
//   const [text, setText] = useState('');
//   const [listening, setListening] = useState(false);
//   const [language, setLanguage] = useState('en-US'); // Default to English (United States)
//   const [ratings, setRatings] = useState(Array(5).fill(null)); // Initialize ratings for 5 questions

//   // Updated questions array
//   const questions = [
//     {
//       question: "How satisfied are you with our service?",
//       emojis: ["😡", "😐", "😊", "😃", "😍"]  // Angry, Neutral, Happy, Very Happy, Love it
//     },
//     {
//       question: "Would you recommend us to a friend?",
//       emojis: ["😡", "😐", "😊", "😃", "😍"]
//     },
//     {
//       question: "What can we improve?",
//       emojis: ["😡", "😐", "😊", "😃", "😍"]
//     },
//     {
//       question: "How do you rate the quality of our products?",
//       emojis: ["😡", "😐", "😊", "😃", "😍"]
//     },
//     {
//       question: "How likely are you to use our services again?",
//       emojis: ["😡", "😐", "😊", "😃", "😍"]
//     }
//   ];

//   const handleLanguageChange = (event) => {
//     setLanguage(event.target.value);
//   };

//   const handleStart = () => {
//     if (!SpeechRecognition) {
//       console.error('Speech Recognition API not supported in this browser');
//       return;
//     }

//     setListening(true);
//     recognition.lang = language; // Set the chosen language
//     recognition.continuous = false; // Disable continuous listening

//     recognition.start();

//     recognition.onresult = (event) => {
//       const transcript = event.results[event.resultIndex][0].transcript; 
//       setText((prevText) => prevText + " " + transcript); // Append new text to existing text
//     };

//     recognition.onerror = (event) => {
//       if (event.error === 'not-allowed') {
//         alert('Microphone access denied. Please allow microphone access in your browser settings.');
//       } else if (event.error === 'service-not-allowed') {
//         alert('Speech recognition service is not allowed.');
//       }
//     };

//     recognition.onend = () => {
//       setListening(false);
//     };
//   };

//   const handleStop = () => {
//     setListening(false);
//     recognition.stop();
//   };

//   const handleEmojiClick = (questionIndex, emojiIndex) => {
//     const updatedRatings = [...ratings];
//     updatedRatings[questionIndex] = emojiIndex; // Store selected emoji index as rating
//     setRatings(updatedRatings);
//   };

//   const handleSubmit = () => {
//     const feedbackData = {
//       text,
//       ratings,
//     };
//     console.log("Sending feedback to admin: ", feedbackData);
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Customer Feedback</h1>

//       {/* Display Questions with Emojis */}
//       <div style={styles.questions}>
//         {questions.map((item, questionIndex) => (
//           <div key={questionIndex} style={styles.questionContainer}>
//             <p>{item.question}</p>
//             <div style={styles.emojiContainer}>
//               {item.emojis.map((emoji, emojiIndex) => (
//                 <span
//                   key={emojiIndex}
//                   style={{
//                     ...styles.emoji,
//                     opacity: ratings[questionIndex] === emojiIndex ? 1 : 0.5, // Change opacity based on selection
//                   }}
//                   onClick={() => handleEmojiClick(questionIndex, emojiIndex)}
//                 >
//                   {emoji}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Voice Input Section */}
//       <div style={styles.voiceInput}>
//         <h2>Voice Feedback</h2>

//         {/* Language Selector */}
//         <div style={styles.languageSelector}>
//           <label>Select Language: </label>
//           <select value={language} onChange={handleLanguageChange}>
//             <option value="en-US">English (United States)</option>
//             <option value="hi-IN">Hindi (India)</option>
//             <option value="ta-IN">Tamil (India)</option>
//           </select>
//         </div>

//         <textarea
//           value={text}
//           placeholder="Your voice feedback will appear here..."
//           rows="3"
//           cols="40"
//           style={styles.textarea}
//           readOnly
//         />
//         <div style={styles.recordButtonContainer}>
//           {listening ? (
//             <button style={styles.recordButton} onClick={handleStop}>Stop Listening</button>
//           ) : (
//             <button style={styles.recordButton} onClick={handleStart}>Start Listening</button>
//           )}
//         </div>
//       </div>

//       {/* Submit Button */}
//       <div style={styles.submitButtonContainer}>
//         <button style={styles.submitButton} onClick={handleSubmit}>Submit Feedback</button>
//       </div>
//     </div>
//   );
// };

// // Styles
// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//     height: '100vh', // Full viewport height
//     overflowY: 'auto', // Allow scrolling
//   },
//   languageSelector: {
//     marginBottom: '20px',
//   },
//   questions: {
//     width: '100%',
//     maxWidth: '600px',
//     marginTop: '20px',
//   },
//   questionContainer: {
//     marginBottom: '20px',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//   },
//   emojiContainer: {
//     display: 'flex',
//     justifyContent: 'space-around',
//     marginTop: '10px',
//   },
//   emoji: {
//     fontSize: '36px',
//     cursor: 'pointer',
//     margin: '0 10px',
//     transition: 'opacity 0.3s',
//   },
//   voiceInput: {
//     marginTop: '30px',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     width: '100%',
//     maxWidth: '600px',
//   },
//   textarea: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//   },
//   recordButtonContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: '10px',
//   },
//   recordButton: {
//     padding: '12px 24px',
//     fontSize: '18px',
//     cursor: 'pointer',
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//   },
//   submitButtonContainer: {
//     marginTop: '40px',
//     display: 'flex',
//     justifyContent: 'center',
//     width: '100%',
//     maxWidth: '600px',
//   },
//   submitButton: {
//     padding: '12px 24px',
//     fontSize: '18px',
//     cursor: 'pointer',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//   },
// };

// export default CustomerFeedback;

// import React, { useState } from 'react';

// // Check if the browser supports SpeechRecognition
// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();

// const CustomerFeedback = () => {
//   const [text, setText] = useState('');
//   const [listening, setListening] = useState(false);
//   const [language, setLanguage] = useState('en-US'); // Default to English (United States)
//   const [ratings, setRatings] = useState(Array(4).fill(null)); // Initialize ratings for 4 questions (after removing one)

//   // Updated questions array (with one question removed)
//   const questions = [
//     {
//       question: "How satisfied are you with our service?",
//       emojis: ["😡", "😐", "😊", "😃", "😍"]  // Angry, Neutral, Happy, Very Happy, Love it
//     },
//     {
//       question: "Would you recommend us to a friend?",
//       emojis: ["😡", "😐", "😊", "😃", "😍"]
//     },
//     {
//       question: "How do you rate the quality of our products?",
//       emojis: ["😡", "😐", "😊", "😃", "😍"]
//     },
//     {
//       question: "How likely are you to use our services again?",
//       emojis: ["😡", "😐", "😊", "😃", "😍"]
//     }
//   ];

//   const handleLanguageChange = (event) => {
//     setLanguage(event.target.value);
//   };

//   const handleStart = () => {
//     console.log('Starting voice recognition...');
//     if (!SpeechRecognition) {
//       console.error('Speech Recognition API not supported in this browser');
//       return;
//     }

//     setListening(true);
//     recognition.lang = language; // Set the chosen language
//     recognition.continuous = false; // Disable continuous listening

//     recognition.start();

//     recognition.onresult = (event) => {
//       console.log("Recognition result received.");
//       const transcript = event.results[event.resultIndex][0].transcript; 
//       console.log("Transcript: ", transcript);
//       setText((prevText) => prevText + " " + transcript); // Append new text to existing text
//     };

//     recognition.onerror = (event) => {
//       console.error('Speech Recognition Error: ', event.error);
//       if (event.error === 'not-allowed') {
//         alert('Microphone access denied. Please allow microphone access in your browser settings.');
//       }
//     };

//     recognition.onend = () => {
//       console.log('Voice recognition ended.');
//       setListening(false);
//     };
//   };

//   const handleStop = () => {
//     setListening(false);
//     recognition.stop();
//   };

//   const handleEmojiClick = (questionIndex, emojiIndex) => {
//     const updatedRatings = [...ratings];
//     updatedRatings[questionIndex] = emojiIndex; // Store selected emoji index as rating
//     setRatings(updatedRatings);
//     console.log("Ratings: ", updatedRatings); // Check selected ratings
//   };

//   const handleSubmit = () => {
//     const feedbackData = {
//       text,
//       ratings,
//     };
//     console.log("Sending feedback to admin: ", feedbackData);
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Customer Feedback</h1>

//       {/* Display Questions with Emojis */}
//       <div style={styles.questions}>
//         {questions.map((item, questionIndex) => (
//           <div key={questionIndex} style={styles.questionContainer}>
//             <p>{item.question}</p>
//             <div style={styles.emojiContainer}>
//               {item.emojis.map((emoji, emojiIndex) => (
//                 <span
//                   key={emojiIndex}
//                   style={{
//                     ...styles.emoji,
//                     opacity: ratings[questionIndex] === emojiIndex ? 1 : 0.5, // Change opacity based on selection
//                   }}
//                   onClick={() => handleEmojiClick(questionIndex, emojiIndex)}
//                 >
//                   {emoji}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Voice Input Section */}
//       <div style={styles.voiceInput}>
//         <h2>Voice Feedback</h2>

//         {/* Language Selector */}
//         <div style={styles.languageSelector}>
//           <label>Select Language: </label>
//           <select value={language} onChange={handleLanguageChange}>
//             <option value="en-US">English (United States)</option>
//             <option value="hi-IN">Hindi (India)</option>
//             <option value="ta-IN">Tamil (India)</option>
//           </select>
//         </div>

//         <textarea
//           value={text}
//           placeholder="Your voice feedback will appear here..."
//           rows="3"
//           cols="40"
//           style={styles.textarea}
//           readOnly
//         />
//         <div style={styles.recordButtonContainer}>
//           {listening ? (
//             <button style={styles.recordButton} onClick={handleStop}>Stop Listening</button>
//           ) : (
//             <button style={styles.recordButton} onClick={handleStart}>Start Listening</button>
//           )}
          
//         </div>
//       </div>

//       {/* Submit Button - Now placed after Voice Feedback */}
//       <div style={styles.submitButtonContainer}>
//         <button style={styles.submitButton} onClick={handleSubmit}>Submit Feedback</button>
//       </div>

//       {/* Extra space at the bottom */}
//       <div style={styles.extraSpace}></div>
//       <br/>
//           <br/>
//           <br/>
//           <br/>
//           <br/>
//           <br/><br/>
//           <br/>
//           <br/>
//     </div>
    
//   );
// };

// // Styles
// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'flex-start', // Allow scrolling
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//     height: '100vh', // Set to viewport height
//     overflowY: 'auto', // Allow scrolling
//   },
//   languageSelector: {
//     marginBottom: '20px',
//   },
//   questions: {
//     width: '100%',
//     maxWidth: '600px',
//     marginTop: '20px',
//   },
//   questionContainer: {
//     marginBottom: '20px',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//   },
//   emojiContainer: {
//     display: 'flex',
//     justifyContent: 'space-around',
//     marginTop: '10px',
//   },
//   emoji: {
//     fontSize: '36px', // Increase size for better visibility
//     cursor: 'pointer',
//     margin: '0 10px',
//     transition: 'opacity 0.3s', // Smooth transition for opacity change
//   },
//   voiceInput: {
//     marginTop: '30px',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     width: '100%',
//     maxWidth: '600px',
//   },
//   textarea: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//   },
//   recordButtonContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: '10px',
//   },
//   recordButton: {
//     padding: '12px 24px', // Increased size for better visibility
//     fontSize: '18px', // Larger font size
//     cursor: 'pointer',
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//   },
//   submitButtonContainer: {
//     marginTop: '40px', // Ensure space between sections
//     display: 'flex',
//     justifyContent: 'center',
//     width: '100%', // Center align the button
//     maxWidth: '600px', // Keep consistent width with other elements
//   },
//   submitButton: {
//     padding: '12px 24px', // Increase size for better visibility
//     fontSize: '18px', // Larger font for better visibility
//     cursor: 'pointer',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//   },
//   extraSpace: {
//     height: '50px', // Extra space at the bottom
//   },
// };

// // export default CustomerFeedback;



// import React, { useState } from 'react';

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();

// const CustomerFeedback = () => {
//   const [text, setText] = useState('');
//   const [listening, setListening] = useState(false);
//   const [language, setLanguage] = useState('en-US');
//   const [ratings, setRatings] = useState(Array(4).fill(null));

//   const questions = [
//     { question: "How satisfied are you with our service?", emojis: ["😡", "😐", "😊", "😃", "😍"] },
//     { question: "Would you recommend us to a friend?", emojis: ["😡", "😐", "😊", "😃", "😍"] },
//     { question: "How do you rate the quality of our products?", emojis: ["😡", "😐", "😊", "😃", "😍"] },
//     { question: "How likely are you to use our services again?", emojis: ["😡", "😐", "😊", "😃", "😍"] }
//   ];

//   const handleStart = () => {
//     if (!SpeechRecognition) {
//       console.error('Speech Recognition API not supported in this browser');
//       return;
//     }
//     setListening(true);
//     recognition.lang = language;
//     recognition.continuous = false;

//     recognition.start();

//     recognition.onresult = (event) => {
//       const transcript = event.results[event.resultIndex][0].transcript;
//       setText((prevText) => prevText + " " + transcript);
//     };

//     recognition.onerror = (event) => {
//       console.error('Speech Recognition Error: ', event.error);
//       if (event.error === 'not-allowed') {
//         alert('Microphone access denied. Please allow microphone access in your browser settings.');
//       }
//     };

//     recognition.onend = () => {
//       setListening(false);
//     };
//   };

//   const handleStop = () => {
//     setListening(false);
//     recognition.stop();
//   };

//   const handleEmojiClick = (questionIndex, emojiIndex) => {
//     const updatedRatings = [...ratings];
//     updatedRatings[questionIndex] = emojiIndex;
//     setRatings(updatedRatings);
//   };

//   const handleDownloadFeedback = (feedbackData) => {
//     const blob = new Blob([JSON.stringify(feedbackData, null, 2)], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'feedback.json';
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   const handleSubmit = () => {
//     const feedbackData = {
//       text,
//       ratings,
//     };
//     handleDownloadFeedback(feedbackData);
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Customer Feedback</h1>
//       <div style={styles.questions}>
//         {questions.map((item, questionIndex) => (
//           <div key={questionIndex} style={styles.questionContainer}>
//             <p>{item.question}</p>
//             <div style={styles.emojiContainer}>
//               {item.emojis.map((emoji, emojiIndex) => (
//                 <span
//                   key={emojiIndex}
//                   style={{
//                     ...styles.emoji,
//                     opacity: ratings[questionIndex] === emojiIndex ? 1 : 0.5,
//                   }}
//                   onClick={() => handleEmojiClick(questionIndex, emojiIndex)}
//                 >
//                   {emoji}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div style={styles.voiceInput}>
//         <h2>Voice Feedback</h2>
//         <div style={styles.languageSelector}>
//           <label>Select Language: </label>
//           <select value={language} onChange={(e) => setLanguage(e.target.value)}>
//             <option value="en-US">English (United States)</option>
//             <option value="hi-IN">Hindi (India)</option>
//             <option value="ta-IN">Tamil (India)</option>
//           </select>
//         </div>

//         <textarea
//           value={text}
//           placeholder="Your voice feedback will appear here..."
//           rows="3"
//           cols="40"
//           style={styles.textarea}
//           readOnly
//         />
//         <div style={styles.recordButtonContainer}>
//           {listening ? (
//             <button style={styles.recordButton} onClick={handleStop}>Stop Listening</button>
//           ) : (
//             <button style={styles.recordButton} onClick={handleStart}>Start Listening</button>
//           )}
//         </div>
//       </div>

//       <div style={styles.submitButtonContainer}>
//         <button style={styles.submitButton} onClick={handleSubmit}>Submit Feedback</button>
//       </div>
//       <div style={styles.extraSpace}></div>
//        <br/>
//            <br/>
//           <br/>
//            <br/>
//            <br/>
//            <br/><br/>
//           <br/>
//            <br/>
//     </div>
    
//   );
// };

// // Styles (same as before)
// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//     height: '100vh',
//     overflowY: 'auto',
//   },
//   languageSelector: {
//     marginBottom: '20px',
//   },
//   questions: {
//     width: '100%',
//     maxWidth: '600px',
//     marginTop: '20px',
//   },
//   questionContainer: {
//     marginBottom: '20px',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//   },
//   emojiContainer: {
//     display: 'flex',
//     justifyContent: 'space-around',
//     marginTop: '10px',
//   },
//   emoji: {
//     fontSize: '36px',
//     cursor: 'pointer',
//     margin: '0 10px',
//     transition: 'opacity 0.3s',
//   },
//   voiceInput: {
//     marginTop: '30px',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     width: '100%',
//     maxWidth: '600px',
//   },
//   textarea: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//   },
//   recordButtonContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: '10px',
//   },
//   recordButton: {
//     padding: '12px 24px',
//     fontSize: '18px',
//     cursor: 'pointer',
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//   },
//   submitButtonContainer: {
//     marginTop: '40px',
//     display: 'flex',
//     justifyContent: 'center',
//     width: '100%',
//     maxWidth: '600px',
//   },
//   submitButton: {
//     padding: '12px 24px',
//     fontSize: '18px',
//     cursor: 'pointer',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//   },
// };

// export default CustomerFeedback;

// import React, { useState } from 'react';

// // Check if the browser supports SpeechRecognition
// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();

// const CustomerFeedback = () => {
//   const [text, setText] = useState('');
//   const [listening, setListening] = useState(false);
//   const [language, setLanguage] = useState('en-US'); // Default to English (United States)
//   const [ratings, setRatings] = useState(Array(4).fill(null)); // Initialize ratings for 4 questions
//   const [submitted, setSubmitted] = useState(false); // Track submission status
//   const [error, setError] = useState(''); // Track error status

//   // Updated questions array
//   const questions = [
//     {
//       question: "How satisfied are you with our service?",
//       emojis: ["😡", "😐", "😊", "😃", "😍"]
//     },
//     {
//       question: "Would you recommend us to a friend?",
//       emojis: ["😡", "😐", "😊", "😃", "😍"]
//     },
//     {
//       question: "How do you rate the quality of our products?",
//       emojis: ["😡", "😐", "😊", "😃", "😍"]
//     },
//     {
//       question: "How likely are you to use our services again?",
//       emojis: ["😡", "😐", "😊", "😃", "😍"]
//     }
//   ];

//   const handleLanguageChange = (event) => {
//     setLanguage(event.target.value);
//   };

//   const handleStart = () => {
//     if (!SpeechRecognition) {
//       console.error('Speech Recognition API not supported in this browser');
//       return;
//     }

//     setListening(true);
//     recognition.lang = language; // Set the chosen language
//     recognition.continuous = false; // Disable continuous listening

//     recognition.start();

//     recognition.onresult = (event) => {
//       const transcript = event.results[event.resultIndex][0].transcript; 
//       setText((prevText) => prevText + " " + transcript); // Append new text to existing text
//     };

//     recognition.onerror = (event) => {
//       console.error('Speech Recognition Error: ', event.error);
//       if (event.error === 'not-allowed') {
//         alert('Microphone access denied. Please allow microphone access in your browser settings.');
//       }
//     };

//     recognition.onend = () => {
//       setListening(false);
//     };
//   };

//   const handleStop = () => {
//     setListening(false);
//     recognition.stop();
//   };

//   const handleEmojiClick = (questionIndex, emojiIndex) => {
//     const updatedRatings = [...ratings];
//     updatedRatings[questionIndex] = emojiIndex; // Store selected emoji index as rating
//     setRatings(updatedRatings);
//   };

//   const handleSubmit = async () => {
//     const feedbackData = {
//       text,
//       ratings,
//     };

//     try {
//     //   const response = await fetch('http://localhost:5000/submit-feedback',
//         const response = await fetch('http://localhost:3000/api/feedback',
//             {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(feedbackData),
//       });

//       if (response.ok) {
//         setSubmitted(true);
//         setError(''); // Clear any previous errors
//       } else {
//         const errorMessage = await response.text();
//         setError(errorMessage);
//       }
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//       setError('An error occurred while submitting your feedback.');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       {submitted ? (
//         <h2>Thank you for your feedback!</h2> // Message displayed after submission
//       ) : (
//         <>
//           {error && <p style={styles.error}>{error}</p>} {/* Display error message if any */}
//           <h1>Customer Feedback</h1>

//           {/* Display Questions with Emojis */}
//           <div style={styles.questions}>
//             {questions.map((item, questionIndex) => (
//               <div key={questionIndex} style={styles.questionContainer}>
//                 <p>{item.question}</p>
//                 <div style={styles.emojiContainer}>
//                   {item.emojis.map((emoji, emojiIndex) => (
//                     <span
//                       key={emojiIndex}
//                       style={{
//                         ...styles.emoji,
//                         opacity: ratings[questionIndex] === emojiIndex ? 1 : 0.5, // Change opacity based on selection
//                       }}
//                       onClick={() => handleEmojiClick(questionIndex, emojiIndex)}
//                     >
//                       {emoji}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Voice Input Section */}
//           <div style={styles.voiceInput}>
//             <h2>Voice Feedback</h2>

//             {/* Language Selector */}
//             <div style={styles.languageSelector}>
//               <label>Select Language: </label>
//               <select value={language} onChange={handleLanguageChange}>
//                 <option value="en-US">English (United States)</option>
//                 <option value="hi-IN">Hindi (India)</option>
//                 <option value="ta-IN">Tamil (India)</option>
//               </select>
//             </div>

//             <textarea
//               value={text}
//               placeholder="Your voice feedback will appear here..."
//               rows="3"
//               cols="40"
//               style={styles.textarea}
//               readOnly
//             />
//             <div style={styles.recordButtonContainer}>
//               {listening ? (
//                 <button style={styles.recordButton} onClick={handleStop}>Stop Listening</button>
//               ) : (
//                 <button style={styles.recordButton} onClick={handleStart}>Start Listening</button>
//               )}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div style={styles.submitButtonContainer}>
//             <button style={styles.submitButton} onClick={handleSubmit}>Submit Feedback</button>
//           </div>

//           {/* Extra space at the bottom */}
//           <div style={styles.extraSpace}></div>
//           <br/>
//           <br/>
//           <br/>
//           <br/>
//           <br/>
//         </>
//       )}
//     </div>
//   );
// };

// // Styles (same as before)
// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//     height: '100vh',
//     overflowY: 'auto',
//   },
//   error: {
//     color: 'red',
//   },
//   languageSelector: {
//     marginBottom: '20px',
//   },
//   questions: {
//     width: '100%',
//     maxWidth: '600px',
//     marginTop: '20px',
//   },
//   questionContainer: {
//     marginBottom: '20px',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//   },
//   emojiContainer: {
//     display: 'flex',
//     justifyContent: 'space-around',
//     marginTop: '10px',
//   },
//   emoji: {
//     fontSize: '36px',
//     cursor: 'pointer',
//     margin: '0 10px',
//     transition: 'opacity 0.3s ease', // Smooth opacity transition
//   },
//   voiceInput: {
//     marginTop: '30px',
//     width: '100%',
//     maxWidth: '600px',
//   },
//   textarea: {
//     width: '100%',
//     padding: '10px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//   },
//   recordButtonContainer: {
//     marginTop: '10px',
//   },
//   recordButton: {
//     padding: '10px 20px',
//     borderRadius: '5px',
//     border: 'none',
//     backgroundColor: '#007BFF',
//     color: '#fff',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
//   recordButtonHover: {
//     backgroundColor: '#0056b3',
//   },
//   submitButtonContainer: {
//     marginTop: '20px',
//   },
//   submitButton: {
//     padding: '10px 20px',
//     borderRadius: '5px',
//     border: 'none',
//     backgroundColor: '#28a745',
//     color: '#fff',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
//   submitButtonHover: {
//     backgroundColor: '#218838',
//   },
//   extraSpace: {
//     marginBottom: '100px', // Extra space at the bottom
//   },
// };

// export default CustomerFeedback;

import React, { useState } from 'react';

// Check if the browser supports SpeechRecognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const CustomerFeedback = () => {
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [language, setLanguage] = useState('en-US');
  const [ratings, setRatings] = useState(Array(4).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const questions = [
    {
      question: "How satisfied are you with our service?",
      emojis: ["😡", "😐", "😊", "😃", "😍"]
    },
    {
      question: "Would you recommend us to a friend?",
      emojis: ["😡", "😐", "😊", "😃", "😍"]
    },
    {
      question: "How do you rate the quality of our products?",
      emojis: ["😡", "😐", "😊", "😃", "😍"]
    },
    {
      question: "How likely are you to use our services again?",
      emojis: ["😡", "😐", "😊", "😃", "😍"]
    }
  ];

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleStart = () => {
    if (!SpeechRecognition) {
      console.error('Speech Recognition API not supported in this browser');
      return;
    }

    setListening(true);
    recognition.lang = language;
    recognition.continuous = false;

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[event.resultIndex][0].transcript; 
      setText((prevText) => prevText + " " + transcript);
    };

    recognition.onerror = (event) => {
      console.error('Speech Recognition Error: ', event.error);
      if (event.error === 'not-allowed') {
        alert('Microphone access denied. Please allow microphone access in your browser settings.');
      }
    };

    recognition.onend = () => {
      setListening(false);
    };
  };

  const handleStop = () => {
    setListening(false);
    recognition.stop();
  };

  const handleEmojiClick = (questionIndex, emojiIndex) => {
    const updatedRatings = [...ratings];
    updatedRatings[questionIndex] = emojiIndex;
    setRatings(updatedRatings);
  };

  const handleSubmit = async () => {
    const feedbackData = {
      text,
      ratings,
    };

    try {
      const response = await fetch('http://localhost:3000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        setSubmitted(true);
        setError('');
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setError('An error occurred while submitting your feedback.');
    }
  };

  return (
    <div style={styles.container}>
      {submitted ? (
        <h2>Thank you for your feedback!</h2>
      ) : (
        <>
          {error && <p style={styles.error}>{error}</p>}
          <h1>Customer Feedback</h1>

          <div style={styles.questions}>
            {questions.map((item, questionIndex) => (
              <div key={questionIndex} style={styles.questionContainer}>
                <p>{item.question}</p>
                <div style={styles.emojiContainer}>
                  {item.emojis.map((emoji, emojiIndex) => (
                    <span
                      key={emojiIndex}
                      style={{
                        ...styles.emoji,
                        opacity: ratings[questionIndex] === emojiIndex ? 1 : 0.5,
                      }}
                      onClick={() => handleEmojiClick(questionIndex, emojiIndex)}
                    >
                      {emoji}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={styles.voiceInput}>
            <h2>Voice Feedback</h2>
            <div style={styles.languageSelector}>
              <label>Select Language: </label>
              <select value={language} onChange={handleLanguageChange}>
                <option value="en-US">English (United States)</option>
                <option value="hi-IN">Hindi (India)</option>
                <option value="ta-IN">Tamil (India)</option>
              </select>
            </div>

            <textarea
              value={text}
              placeholder="Your voice feedback will appear here..."
              rows="3"
              cols="40"
              style={styles.textarea}
              readOnly
            />
            <div style={styles.recordButtonContainer}>
              {listening ? (
                <button style={styles.recordButton} onClick={handleStop}>Stop Listening</button>
              ) : (
                <button style={styles.recordButton} onClick={handleStart}>Start Listening</button>
              )}
            </div>
          </div>

          <div style={styles.submitButtonContainer}>
            <button style={styles.submitButton} onClick={handleSubmit}>Submit Feedback</button>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    height: '100vh',
    overflowY: 'auto',
  },
  error: {
    color: 'red',
  },
  languageSelector: {
    marginBottom: '20px',
  },
  questions: {
    width: '100%',
    maxWidth: '600px',
    marginTop: '20px',
  },
  questionContainer: {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  emojiContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '10px',
  },
  emoji: {
    fontSize: '36px',
    cursor: 'pointer',
    margin: '0 10px',
    transition: 'opacity 0.3s ease',
  },
  voiceInput: {
    marginTop: '30px',
    width: '100%',
    maxWidth: '600px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  recordButtonContainer: {
    marginTop: '10px',
  },
  recordButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  submitButtonContainer: {
    marginTop: '20px',
  },
  submitButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default CustomerFeedback;
