import React, { useEffect, useRef } from "react";
import "./TextReveal.css"; // Importing a CSS file for styling
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // Importing the ScrollTrigger plugin

function Services() {
  const [wordsRef, setWordsRef] = useArrayRef(); // Using a custom hook to manage an array of refs
  const triggerRef = useRef(null);

  function useArrayRef() {
    const wordsRef = useRef([]); // Creating a ref to hold an array of refs
    wordsRef.current = [];
    return [wordsRef, (ref) => ref && wordsRef.current.push(ref)]; // Adding a new ref to the array
  }

  gsap.registerPlugin(ScrollTrigger); // Registering the ScrollTrigger plugin
  const text =
    "ENGAGE WITH OUR DIGITAL FORGE, WHERE TECHNOLOGY AND CREATIVITY CONVERGE. WITH SERVICES FROM BRANDING TO UI & UX, WE EMPOWER YOUR VISIONS TO GAIN TRACTION.";

  const words = text.split(" "); // Splitting the text into an array of words
  useEffect(() => {
    const anim = gsap.to(wordsRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 7, // Adjusting the scroll speed
        start: "top center",
        end: "bottom 100%",
      },
      color: "#2A2A2A",
      duration: 10,
      stagger: {
        each: 1,
        from: "random", // Animating each word from a random starting point
      },
    });
    return () => {
      anim.kill(); // Killing the animation when the component unmounts
    };
  }, [wordsRef]);

  return (
    <div className="service_container">
      <div className="reveal">
        <div ref={triggerRef}>
          {words.map((word, index) => (
            <span className="reveal-text" key={index} ref={setWordsRef}>
              {word}{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
