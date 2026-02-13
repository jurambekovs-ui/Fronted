
const CategoryCard = ({ item }) => {
    return (
        <li>
            <img src={item.icon} alt="" />
            <h3>{item.title}</h3>
            <p>{item.count}</p>
        </li>

    )
}

export default CategoryCard;