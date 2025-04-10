import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types/product";

function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    //  Función para obtener los datos del producto (simulado)
    const fetchProduct = async () => {
      try {
        //  Aquí iría tu llamada a la API o la búsqueda en tu fuente de datos
        const response = await fetch(`/api/productos/${slug}`); //  Ejemplo de API endpoint
        if (!response.ok) {
          throw new Error("No se pudo obtener el producto");
        }
        const data = (await response.json()) as Product;
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]); //  Dependencia en slug: se ejecuta cuando cambia el slug

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      {product.introduce && (
        <div>
          <h2>{product.introduce.title}</h2>
          <p>{product.introduce.topic}</p>
          <p>{product.introduce.des}</p>
        </div>
      )}

      <p>Precio: {product.price}</p>
    </div>
  );
}

export default ProductPage;
