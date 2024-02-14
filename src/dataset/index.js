import productos from './products.json'
import categorias from './categories.json'

export function getData(){
    return productos.map( product => {
        const categoryEntidad = categorias.find( category => category.id == product.category_id)
        return {
            ...product,
            category: categoryEntidad,
            images: product.images.split(",")
        }
    });
}