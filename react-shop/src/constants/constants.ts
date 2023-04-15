import digital from '../assets/img_shop_digital.jpeg'
import grocery from '../assets/img_shop_grocery.jpeg'
import fashion from '../assets/img_shop_fashion.jpeg'

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

export type putCartType = {
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
  amount:number
}

export const categoryArray = ["패션", '액세서리', '디지털'];
export const carouselContent = [
  {
    title:"물빠진 청바지!",
    text:"이제 막 도착한 패션 청바지를 구경해보세요.",
    img:fashion,
    
  }
]

export type ProductProps = {
  item:dataType
}