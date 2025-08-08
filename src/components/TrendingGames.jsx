import React from "react";

const games = [
  { id: 1, img: "/assets/img/game_1.png", followers: 40 },
  { id: 2, img: "/assets/img/game_2.png", followers: 40 },
  { id: 3, img: "/assets/img/game_3.png", followers: 40 },
  { id: 4, img: "/assets/img/game_4.png", followers: 40 },
];

const TrendingGames = () => {
  return (
    <section className="bg-[#0d0602] py-16 text-white">
      <div className="container mx-auto px-4">
        
        {/* Заголовок */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold">Currently Trending Games</h2>
          <a
            href="#"
            className="bg-[#1c1a19] text-white px-5 py-2 rounded-md font-medium transition-colors duration-300 hover:bg-[#333]"
          >
            SEE ALL
          </a>
        </div>

        {/* Карточки игр */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games.map((game) => (
            <div key={game.id} className="text-center">
              <img
                src={game.img}
                alt={`Game ${game.id}`}
                className="w-[251px] h-[271px] rounded-xl object-cover mb-2.5 mx-auto"
              />
              <p className="text-sm font-medium flex items-center justify-center">
                <i className="fa-solid fa-fire mr-1.5 text-orange-400"></i>
                {game.followers} Followers
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingGames;
