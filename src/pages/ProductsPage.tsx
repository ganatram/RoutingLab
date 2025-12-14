import { products } from '../data/products';
import { Link } from 'react-router-dom';

export function ProductsPage() {
  return (
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-slate-600">
        Here are some great tools to work with React!
      </h2>
      <ul>
        {products.map((product) => (
          <Link to={`${product.id}`} key={product.id} className="p-1 text-base text-slate-800">
            {product.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
