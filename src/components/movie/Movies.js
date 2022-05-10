
export function Movies({ data }) {

    return (
        <div>
            {data.items.filter(data => data.year > 2000).sort((a, b) => b.year - a.year)
                .map((data =>
                    <div key={data.id}>
                        <h2>{data.title} - {data.year}</h2>
                        <img src={data.image}></img>
                        <h2>{data.imDbRating}</h2>
                    </div>
                ))
            }
        </div>

    );
}
