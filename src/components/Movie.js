export function Movie({ id, title, image, rating, year }) {
    return (
        <div key={id}>
            <h2>{title} - {year}</h2>
            <img src={image}></img>
            <h2>{rating}</h2>
        </div>
    )
}