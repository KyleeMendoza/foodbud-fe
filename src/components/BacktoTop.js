import react from "react";
import { useState, useEffect } from "react";

function BacktoTop() {
  const [backtotop, setBacktoTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBacktoTop(true);
      } else {
        setBacktoTop(false);
      }
    });
  });

  const scrollup = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backtotop && (
        <button className="text-white" onClick={scrollup}>
          Back to top
        </button>
      )}
    </div>
  );
}

export default BacktoTop;
