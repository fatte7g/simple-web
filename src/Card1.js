import React from "react";

// Card component
const Card = ({ image, title, description }) => (
  <div className="bg-white rounded-1xl shadow-md overflow-hidden">
    <img
      className="w-60 h-48 object-cover"
      src={image}
      alt={title}
    />
    <div className="p-3">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">
        Learn More
      </button>
    </div>
  </div>
);

// Main component with 8 cards
const CardGrid = () => {
  const cards = [
    {
      image: "https://tse2.mm.bing.net/th/id/OIP.qQkBQH7xkJs-088IYfrpbQHaFQ?r=0&cb=thvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Card 1",
      description: "Natural view of",
    },
    {
      image: "https://tse3.mm.bing.net/th/id/OIP.euul6KWVHStp6VCAIBiWNQHaE6?r=0&cb=thvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Card 2",
      description: "ELephant ",
    },
    {
      image: "https://thvnext.bing.com/th/id/OIP.dCaQhn6984xQeM2LJRCcxgHaE_?w=267&h=180&c=7&r=0&o=7&cb=thvnext&dpr=2&pid=1.7&rm=3",
      title: "Card 3",
      description: "Tiger in chitwan national park",
    },
    {
      image: "https://wallpapercave.com/wp/wp2540777.jpg",
      title: "Card 4",
      description: "sagarmatha national park cave",
    },
    {
      image: "https://tse3.mm.bing.net/th/id/OIP.QC0E8LkiEoErL1uGuijtLAHaFq?r=0&cb=thvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Card 5",
      description: "Temple ",
    },
    {
      image: "https://thvnext.bing.com/th/id/OIP.q1lpystVE8LWVE0p_gxvxAHaE0?r=0&o=7&cb=thvnextrm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Card 6",
      description: "lake ",
    },
    {
      image: "https://tse1.mm.bing.net/th/id/OIP.AHIeXxxqpLMIyhpyq4mbrQHaEK?r=0&cb=thvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Card 7",
      description: "Fewa lake Pokhara",
    },
    {
      image: "https://thvnext.bing.com/th/id/OIP.she0sT6TA_s6T1gQ7ls4DQHaEK?w=329&h=185&c=7&r=0&o=5&cb=thvnext&dpr=2&pid=1.7",
      title: "Card 8",
      description: "Ashar-15 special",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
