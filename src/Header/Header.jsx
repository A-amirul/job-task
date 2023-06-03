import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="flex gap-8 font-medium justify-center list-none p-4">
			<li><Link to="/product">Product</Link></li>
			<Link to="/wishlist">Wishlist</Link>
			<Link to="/myCollection">My Collection</Link>
		</div>
	);
};

export default Header;