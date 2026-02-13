import TrendingCard from "../components/TrendingCard";
import Button from "../components/Button";

const trendingList = [
  {
    id: 1,
    image: "./src/assets/images/pizapeporoni.png",
    title: "Pizza Pepperoni",
    description: "Pizza",
    rating: 4.5,
    bg: "bg-[#E8F5E9]",
  },
  {
    id: 2,
    image: "./src/assets/images/meat.png",
    title: "Pizza Meat",
    description: "Pizza Meat",
    rating: 4.8,
    bg: "bg-[#E3F2FD]",
  },
  {
    id: 3,
    image: "./src/assets/images/doner.png",
    title: "Doner Kebab",
    description: "Kebab",
    rating: 4.7,
    bg: "bg-[#F3E5F5]",
  },
  {
    id: 4,
    image: "./src/assets/images/salmonRoll.png",
    title: "Salmon Roll",
    description: "Salmon",
    rating: 4.9,
    bg: "bg-[#FCE4EC]",
  },
  {
    id: 5,
    image: "./src/assets/images/choco.png",
    title: "Cupcake Choco",
    description: "Cupcake",
    rating: 4.6,
    bg: "bg-[#FFFDE7]",
  },
  {
    id: 6,
    image: "./src/assets/images/milk.png",
    title: "Doughnut Milk",
    description: "Doughnut",
    rating: 4.4,
    bg: "bg-[#E8F5E9]",
  },
];

const Trending = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-7xl">
        <div className="text-start mb-8 md:mb-12">
          <h2 className="text-[38px] lg:text-[48px] font-bold text-gray-800">
            Browser Our Category
          </h2>
          <h3 className="text-lg md:text-xl text-[#8BAC3E] font-medium mt-2">
            Receipt
          </h3>
        </div>

        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {trendingList.map((item) => (
              <TrendingCard key={item.id} item={item} />
            ))}
          </ul>

          <div className="flex justify-center mt-10">
            <Button title="ALL Receipt" extraClass="px-12 py-4 text-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
