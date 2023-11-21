export default function Stats({ items }) {
    if (!items.length)
        return <footer className="stats">Start adding items</footer>;

    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);

    return (
        <p className="stats">
            <em>
                {percentage === 100
                    ? "You got everything reade to go"
                    : `You have ${numItems} items on your list, and you already packed 
        ${numPacked} (${percentage} %)`}
                🦧
            </em>
        </p>
    );
}