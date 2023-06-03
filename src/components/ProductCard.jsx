
const ProductCard = (item) => {
	// const { title, price, description, image, rating } = item;
	console.log(item);

	return (
		<>

			<div className="card lg:card-side  bg-base-100 shadow-xl">
				<figure><img src={item?.item?.image} /></figure>
				<div className="card-body">
					<h2 className="card-title">{item?.item?.title}</h2>
					<p>{item?.item?.description}</p>
					<p>{item?.item?.price}</p>
					
				</div>
			</div>
		</>
	
		
	);
};

export default ProductCard;