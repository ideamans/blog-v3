import { categories } from '../categories.js'

console.log(categories)

export default {
  paths() {
    return categories.map((category) => ({
      params: { category: category.basename }
    }))
  }
}
