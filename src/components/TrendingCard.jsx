
const TrendingCard = ({ item }) => {
  return (
    <li className={`flex-shrink-0 w-40 sm:w-62 md:w50- ${item.bg} rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer`}>
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 sm:h-56 object-cover"
      />

      <div className="p-4 text-center">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          {item.description}
        </p>
        <div className="flex justify-center gap-1 text-yellow-400 text-xl">
          {"★".repeat(Math.floor(item.rating))}
          {"☆".repeat(5 - Math.floor(item.rating))}
        </div>
      </div>
    </li>
  );
};

export default TrendingCard;