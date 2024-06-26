import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400'
  
  const btnClasses = ['py-2 , px-4 , border', btnBgClassName]

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails(prevDetails => !prevDetails)}
      >
        {details ? "Hide details" : "Show details"}
      </button>
      {details ? <div>{product.description}</div> : null}
    </div>
  );
}
