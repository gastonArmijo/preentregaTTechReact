import "./Item.css";

export const Item = ({ name, description, price, image, children }) => {
    return (
        <article className="card">
            <img src={image} alt={`imagen de ${name}`} />

            <div className="card-info">
                <h3>{name}</h3>

                <p className="description">
                    {description}
                </p>

                <p className="price">
                    ${price}
                </p>

                {children}
            </div>
        </article>
    );
};