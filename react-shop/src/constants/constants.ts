export const url = 'https://fakestoreapi.com/products';

export const Category = {
  "men's clothing": '패션',
  "women's clothing": '패션',
  electronics: '디지털',
  jewelery: '액세서리',
} as const;

export type categoryType = typeof Category[keyof typeof Category];

export const ProductCategoryEnum = {
    FASHION: { cat: "fashion", title: "패션", list: ["men's clothing", "women's clothing"] },
    ACCESSORY: { cat: "accessory", title: "액세서리", list: ["jewelery"] },
    DIGITAL: { cat: "digital", title: "디지털", list: ["electronics"] },
} as const;

export const categoryList = Object.values(ProductCategoryEnum)

export type dataType = {
  category: keyof typeof Category
  description: string
  id: number
  image: string
  price: number
  rating: {
    rate: number
    count: number
  }
  title:string
}

export const categoryArray = ["패션", '액세서리', '디지털'];

export type ProductProps = {
  item:dataType
}