
/**
 *  esta funcion calcula el total del precio de la nueva orden
 * @param {Array} product cartProduct: array de objetos
 * @returns {number} total price
 */

export const totalPrice = (product) => {
    let sum = 0
    product.forEach(product => sum += product.price)
    return sum
}