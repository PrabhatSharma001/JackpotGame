// import number5 from "../assets/number5.png";
// import number6 from "../assets/number6.png";
// import number7 from "../assets/number7.png";

// import { useEffect, useState } from "react";
// export const MainComponent = () => {
//   const [isWinner, setIsWinner] = useState(false);
//   const [totalSpins, setTotalSpins] = useState(0);
//   const [wins, setWins] = useState(0);
//   const [winPercentage, setWinPercentage] = useState(0);
//   const [showStats, setShowStats] = useState(false);
//   const img_1 = number5;
//   const img_2 = number6;
//   const img_3 = number7;
//   const img_array = [img_1, img_2, img_3];

//   const getRandomImage = () => {
//     const shuffledArray = [...img_array].sort(() => 0.5 - Math.random());
//     return shuffledArray.slice(0, 3);
//   };
//   const [randomImage, setRandomImage] = useState(getRandomImage());

//   const getrandomNumber = () => {
//     return Math.floor(Math.random() * img_array.length);
//   };

//   console.log("Random Number: ", getrandomNumber());
//   const handleSpin = () => {
//     const newImages = [
//       img_array[getrandomNumber()],
//       img_array[getrandomNumber()],
//       img_array[getrandomNumber()],
//     ];
//     setRandomImage(newImages);

//     setTotalSpins((prev) => prev + 1);
//     const won = newImages[0] === newImages[1] && newImages[1] === newImages[2];

//     setIsWinner(won);

//     if (won) {
//       setWins((prev) => prev + 1);
//     }

//     // setWinPercentage(Math.round((wins / totalSpins) * 100));
//   };

//   useEffect(() => {
//     if (totalSpins > 0) {
//       setWinPercentage(Math.round((wins / totalSpins) * 100));
//     }
//   }, [totalSpins, wins, isWinner]);
//   // console.log("Win Percentage: ", winPercentage.toFixed(2) + "%");
//   const toggleStats = () => {
//     setShowStats((prev) => !prev);
//   };

//   return (
//     <div className="main-component text-color">
//       <div className="header">
//         <h1>Welcome to the Jackpot Game</h1>
//         {isWinner && (
//           // <div
//           //   className="winner-message"
//           //   style={{
//           //     color: "gold",
//           //     fontSize: "2rem",
//           //     fontWeight: "bold",
//           //     margin: "20px 0",
//           //     animation: "blink 1s infinite",
//           //   }}
//           // >
//            <div className="winner-message" style={{
//             color: 'gold',
//             fontSize: '2rem',
//             fontWeight: 'bold',
//             margin: '20px 0',
//             animation: 'blink 1s infinite',
//             textShadow: '0 0 10px rgba(255,215,0,0.7)',
//             padding: '10px',
//             borderRadius: '8px',
//             background: 'rgba(0,0,0,0.3)'
//           }}>
//             Congratulations! You Won! 🎉
//           </div>
//         )}
//       </div>

//       <div className="image-container">
//         {randomImage.map((img, index) => (
//           <img
//           className="jackpot-image"
//             key={index}
//             src={img}
//             alt={`img-${index}`}
//             style={{ height: "300px", width: "400px" }}
//           />
//         ))}
//       </div>
//       <div className="button-container" style={{ marginTop: "20px" }}>
//          <button onClick={handleSpin} className="button" style={{
//           padding: '12px 24px',
//           fontSize: '1.2rem',
//           backgroundColor: '#4CAF50',
//           color: 'white',
//           border: 'none',
//           borderRadius: '4px',
//           cursor: 'pointer',
//           marginRight: '10px'
//         }}>
//           Spin
//         </button>
//         <button
//           onClick={toggleStats}
//           className="button"
//           style={{
//             padding: "12px 24px",
//             fontSize: "1.2rem",
//             backgroundColor: "#2196F3",
//             color: "white",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           {showStats ? "Hide Stats" : "Show Stats"}
//         </button>
//       </div>
//       {showStats && (
//         <div
//           className="stats-message"
//           style={{
//             margin: "30px auto",
//             padding: "20px",
//             maxWidth: "400px",
//             background: "rgba(33, 150, 243, 0.1)",
//             borderRadius: "10px",
//             border: "2px solid #2196F3",
//             textAlign: "center",
//             animation: "fadeIn 0.5s ease-in",
//           }}
//         >
//           <h3 style={{ color: "#2196F3", marginBottom: "15px" }}>
//             Game Statistics
//           </h3>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-around",
//               marginBottom: "15px",
//             }}
//           >
//             <div>
//               <div style={{ fontSize: "0.9rem", color: "#666" }}>
//                 Total Spins
//               </div>
//               <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
//                 {totalSpins}
//               </div>
//             </div>
//             <div>
//               <div style={{ fontSize: "0.9rem", color: "#666" }}>Wins</div>
//               <div
//                 style={{
//                   fontSize: "1.5rem",
//                   fontWeight: "bold",
//                   color: "#4CAF50",
//                 }}
//               >
//                 {wins}
//               </div>
//             </div>
//           </div>
//           <div
//             style={{
//               fontSize: "1.8rem",
//               fontWeight: "bold",
//               color: "#FFC107",
//               textShadow: "0 0 5px rgba(255,193,7,0.5)",
//               padding: "10px",
//               background: "rgba(255,193,7,0.1)",
//               borderRadius: "5px",
//             }}
//           >
//             Win Rate: {winPercentage}%
//           </div>
//           {totalSpins > 0 && (
//             <div style={{ marginTop: "15px", color: "#888" }}>
//               Theoretical Probability: ~11.11%
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import number5 from "../assets/number5.png";
import number6 from "../assets/number6.png";
import number7 from "../assets/number7.png";

export const MainComponent = () => {
  const img_array = [number5, number6, number7];
  const [randomImages, setRandomImages] = useState<string[]>([]);
  const [isWinner, setIsWinner] = useState(false);
  const [totalSpins, setTotalSpins] = useState(-2);
  const [wins, setWins] = useState(0);
  const [winPercentage, setWinPercentage] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const [welcomeAnimation, setWelcomeAnimation] = useState(true);

  const getRandomNumber = () => Math.floor(Math.random() * img_array.length);

  console.log("totalSpins: ", totalSpins);
  const handleSpin = () => {
    const newImages = [
      img_array[getRandomNumber()],
      img_array[getRandomNumber()],
      img_array[getRandomNumber()],
    ];

    setRandomImages(newImages);
    setTotalSpins((prev) => prev + 1);

    const won = newImages[0] === newImages[1] && newImages[1] === newImages[2];
    setIsWinner(won);
    if (won) setWins((prev) => prev + 1);
  };

  useEffect(() => {
    if (totalSpins > 0) {
      setWinPercentage(Math.round((wins / totalSpins) * 100));
    }
  }, [wins, totalSpins]);

  // useEffect(() => {
  //   handleSpin();
  // }, []);

  useEffect(() => {
    handleSpin();
    const timer = setTimeout(() => setWelcomeAnimation(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="main-component"
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        borderRadius: "15px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        color: "white",
      }}
    >
      {/* Animated Welcome Message */}
      {welcomeAnimation && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            animation: "fadeOut 2.5s ease-out forwards",
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              background: "linear-gradient(to right, #fbb034, #ffdd00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 10px rgba(251,176,52,0.5)",
              animation: "zoomIn 1.5s ease-in-out, pulse 1s infinite 1.5s",
            }}
          >
            WELCOME TO JACKPOT!
          </h1>
        </div>
      )}

      <div className="header">
        <h1
          style={{
            fontSize: "2.5rem",
            margin: "20px 0",
            background: "linear-gradient(to right, #00c6ff, #0072ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          Jackpot Game
        </h1>

        {isWinner && (
          <div
            style={{
              color: "gold",
              fontSize: "2rem",
              fontWeight: "bold",
              margin: "20px 0",
              animation: "blink 1s infinite, bounce 0.5s",
              textShadow: "0 0 10px rgba(255,215,0,0.7)",
              padding: "15px",
              borderRadius: "8px",
              background: "rgba(255,215,0,0.1)",
              border: "2px solid gold",
            }}
          >
            🎉 Congratulations! You Won! 🎉
          </div>
        )}
      </div>

      {/* Slot Machine Display */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "30px 0",
          perspective: "1000px",
        }}
      >
        {randomImages.map((img, index) => (
          <div
            key={index}
            style={{
              width: "150px",
              height: "150px",
              background: "white",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
              transformStyle: "preserve-3d",
              animation: isWinner ? "tada 1s" : "",
            }}
          >
            <img
              src={img}
              alt={`slot-${index}`}
              style={{
                maxWidth: "80%",
                maxHeight: "80%",
                transition: "transform 0.3s",
                transform: isWinner ? "scale(1.1)" : "scale(1)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "30px 0",
        }}
      >
        <button
          onClick={handleSpin}
          style={{
            padding: "15px 40px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: "linear-gradient(to right, #4CAF50, #2E8B57)",
            color: "white",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transition: "all 0.3s",
          }}
        >
          SPIN
        </button>

        <button
          onClick={() => setShowStats(!showStats)}
          style={{
            padding: "15px 40px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: "linear-gradient(to right, #2196F3, #1976D2)",
            color: "white",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transition: "all 0.3s",
          }}
        >
          {showStats ? "HIDE STATS" : "SHOW STATS"}
        </button>
      </div>

      {/* Statistics Panel */}
      {showStats && (
        <div
          style={{
            margin: "30px auto",
            padding: "25px",
            maxWidth: "500px",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "15px",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            animation: "fadeIn 0.5s ease-out",
          }}
        >
          <h3
            style={{
              color: "#4CAF50",
              marginBottom: "25px",
              fontSize: "1.5rem",
              borderBottom: "2px solid rgba(76,175,80,0.3)",
              paddingBottom: "10px",
            }}
          >
            GAME STATISTICS
          </h3>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "25px",
            }}
          >
            <div>
              <div style={{ fontSize: "1rem", color: "#aaa" }}>TOTAL SPINS</div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#2196F3",
                }}
              >
                {totalSpins}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "1rem", color: "#aaa" }}>WINS</div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#FFC107",
                }}
              >
                {wins}
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: "2.2rem",
              fontWeight: "bold",
              color: "#FF5722",
              textShadow: "0 0 10px rgba(255,87,34,0.5)",
              padding: "15px",
              background: "rgba(255,87,34,0.1)",
              borderRadius: "10px",
              margin: "20px 0",
              animation: "pulse 2s infinite",
            }}
          >
            WIN RATE: {winPercentage}%
          </div>

          <div
            style={{
              color: "#9E9E9E",
              fontStyle: "italic",
              marginTop: "15px",
            }}
          >
            Theoretical Probability: ~11.11%
          </div>
        </div>
      )}

      {/* Add these to your CSS */}
      <style>{`
        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
        @keyframes zoomIn {
          from {
            transform: scale(0.5);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes tada {
          0% {
            transform: rotate(0);
          }
          10%,
          20% {
            transform: rotate(-3deg);
          }
          30%,
          50%,
          70%,
          90% {
            transform: rotate(3deg);
          }
          40%,
          60%,
          80% {
            transform: rotate(-3deg);
          }
          100% {
            transform: rotate(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
