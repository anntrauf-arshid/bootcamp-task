import React from "react";
import Card from "./Card";

import card1 from "./assets/card1.jpg";
import card2 from "./assets/card2.jpg";
import card3 from "./assets/card3.jpg";
import card4 from "./assets/card4.jpg";
import card5 from "./assets/card5.jpg";

export default function CardsSection() {
  const cardsData = [
    {
      image: card1,
      title: "Creative Design",
      description: "I love crafting visually stunning web designs that leave an impact.",
    },
    {
      image: card2,
      title: "Responsive Layouts",
      description: "Every website I build adapts beautifully to any device or screen.",
    },
    {
      image: card3,
      title: "Clean Code",
      description: "Writing clean and maintainable code is my top priority.",
    },
    {
      image: card4,
      title: "React Development",
      description: "I use React to build fast, dynamic, and modern user interfaces.",
    },
    {
      image: card5,
      title: "Team Collaboration",
      description: "Working in teams and delivering results is what drives me.",
    },
  ];

  return (
    <section className="bg-gray-900 py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-yellow-400 mb-10">
        My Work & Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
