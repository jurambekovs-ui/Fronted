import { CupCake, Pizza, Kebab, Salmon, Doughnut } from "../assets/images";
import CategoryCard from "../components/CategoryCard";
import Button from "../components/Button";

const categoryList = [
  { id: 1, icon: CupCake, title: "Cupcake", count: "22 items", bg: "[#F0FEEB]" },
  { id: 2, icon: Pizza, title: "Pizza", count: "25 items", bg: "[#E4F2F4]" },
  { id: 3, icon: Kebab, title: "Kebab", count: "12 items", bg: "[#EAEEFA]" },
  { id: 4, icon: Salmon, title: "Salmon", count: "22 items", bg: "[#F9EEF3]" },
  { id: 5, icon: Doughnut, title: "Doughnut", count: "11 items", bg: "[#F3F7D9]" },
];

const Category = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-7xl">
        <div className="text-start mb-8 md:mb-12">
          <h2 className="text-[38px] sm:text-[38px] lg:text-[48px] font-bold text-gray-800">
            Browser Our Category
          </h2>
          <h3 className="text-lg md:text-xl text-[#8BAC3E] font-medium mt-2">
            Receipt
          </h3>
        </div>

        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <ul className="flex gap-40 md:gap-40 justify-start min-w-max">
              {categoryList.map((item) => (
                <CategoryCard key={item.id} item={item} />
              ))}
            </ul>
          </div>

          <div className=" relative flex justify-end mt-8 gap-8">
            <Button
              title={"PREV"}
              icon={
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="33" height="33" rx="16.5" fill="white"/>
                  <path d="M9.0257 15.8218L18.4693 7.28048C18.8837 6.90651 19.555 6.90651 19.9705 7.28048C20.3848 7.65444 20.3848 8.26186 19.9705 8.63583L11.2759 16.4995L19.9694 24.3631C20.3838 24.7371 20.3838 25.3445 19.9694 25.7194C19.555 26.0934 18.8826 26.0934 18.4683 25.7194L9.02465 17.1781C8.61655 16.808 8.61655 16.191 9.0257 15.8218Z" fill="#8BAC3E"/>
                </svg>
              }
              extraClass="!top-[50px]"
            />

            <Button
              title={"NEXT"}
              icon={
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="33" height="33" rx="16.5" fill="white"/>
                  <g clipPath="url(#clip0_307_4301)">
                    <path d="M21.2314 15.8522L13.0695 7.69298C12.7113 7.33574 12.1311 7.33574 11.772 7.69298C11.4139 8.05021 11.4139 8.63046 11.772 8.9877L19.2866 16.4996L11.7729 24.0114C11.4148 24.3687 11.4148 24.9489 11.7729 25.307C12.1311 25.6643 12.7122 25.6643 13.0704 25.307L21.2323 17.1478C21.585 16.7942 21.585 16.2049 21.2314 15.8522Z" fill="#8BAC3E"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_307_4301">
                      <rect width="18.15" height="18.15" fill="white" transform="translate(7.42505 7.42505)"/>
                    </clipPath>
                  </defs>
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;