import type { Recipe } from '@/types'
import borshch from '@/assets/images/borshch.jpg'
import pasta from '@/assets/images/pasta.jpg'
import tiramisu from '@/assets/images/tiramisu.jpg'
import greek from '@/assets/images/greek.jpg'
import chickenSoup from '@/assets/images/chicken-soup.jpg'
import caesar from '@/assets/images/caesar.jpg'
import brownie from '@/assets/images/brownie.jpg'
import bolognese from '@/assets/images/bolognese.jpg'

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    title: 'Борщ український',
    category: 'супи',
    time: 90,
    servings: 6,
    description: 'Традиційний червоний борщ з буряком, капустою та сметаною.',
    image: borshch,
    ingredients: ['буряк', 'капуста', 'картопля', 'морква', 'цибуля', 'томатна паста', 'м\'ясо', 'сметана', 'кріп', 'часник']
  },
  {
    id: 2,
    title: 'Паста Карбонара',
    category: 'основні страви',
    time: 25,
    servings: 2,
    description: 'Італійська паста з беконом, яйцями та сиром Пармезан.',
    image: pasta,
    ingredients: ['спагеті', 'бекон', 'яйця', 'пармезан', 'чорний перець', 'часник', 'оливкова олія']
  },
  {
    id: 3,
    title: 'Тірамісу',
    category: 'десерти',
    time: 40,
    servings: 4,
    description: 'Ніжний італійський десерт з кавою, маскарпоне та какао.',
    image: tiramisu,
    ingredients: ['маскарпоне', 'кава еспресо', 'печиво савоярді', 'яйця', 'цукор', 'какао-порошок']
  },
  {
    id: 4,
    title: 'Грецький салат',
    category: 'салати',
    time: 10,
    servings: 2,
    description: 'Класичний середземноморський салат з фетою, оливками та овочами.',
    image: greek,
    ingredients: ['помідори', 'огірок', 'червона цибуля', 'фета', 'оливки', 'оливкова олія', 'орегано']
  },
  {
    id: 5,
    title: 'Курячий суп з локшиною',
    category: 'супи',
    time: 60,
    servings: 4,
    description: 'Заспокійливий домашній суп на курячому бульйоні з яйцем та зеленню.',
    image: chickenSoup,
    ingredients: ['курка', 'морква', 'цибуля', 'локшина', 'кріп', 'яйця', 'сіль', 'перець']
  },
  {
    id: 6,
    title: 'Цезар з куркою',
    category: 'салати',
    time: 20,
    servings: 2,
    description: 'Свіжий салат з куркою, пармезаном, крутонами та соусом Цезар.',
    image: caesar,
    ingredients: ['куряче філе', 'салат романо', 'пармезан', 'крутони', 'соус цезар', 'часник']
  },
  {
    id: 7,
    title: 'Шоколадний брауні',
    category: 'десерти',
    time: 35,
    servings: 8,
    description: 'Вологий шоколадний пиріг з горіхами та тріщинкою зверху.',
    image: brownie,
    ingredients: ['темний шоколад', 'вершкове масло', 'яйця', 'цукор', 'борошно', 'волоські горіхи', 'какао']
  },
  {
    id: 8,
    title: 'Спагеті Болоньєзе',
    category: 'основні страви',
    time: 45,
    servings: 4,
    description: 'Італійська паста з м\'ясним соусом болоньєзе та пармезаном.',
    image: bolognese,
    ingredients: ['спагеті', 'яловичий фарш', 'помідори', 'морква', 'цибуля', 'селера', 'пармезан', 'вино червоне']
  }
]