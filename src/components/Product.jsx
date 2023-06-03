import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Product = () => {
	const [products, setProducts] = useState();

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(json => setProducts(json))
	}, [])

	return (
		<>
			<div className="grid-cols-6">
				<div className="grid grid-cols-1 md:grid-cols-2 px-52 gap-4">
					{
						products?.map(item => <ProductCard
							key={item.id}
							item={item}
						></ProductCard>)
					}
				</div>
			</div>

			

		</>
		
	);
};

export default Product;