import type { Recipe } from '@/types'

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    title: 'Борщ український',
    category: 'супи',
    time: 90,
    servings: 6,
    description: 'Традиційний червоний борщ з буряком, капустою та сметаною. Насичений смак справжньої української кухні.',
    image: 'https://images.pexels.com/photos/19992957/pexels-photo-19992957.jpeg?w=600&auto=compress',
    ingredients: ['буряк', 'капуста', 'картопля', 'морква', 'цибуля', 'томатна паста', 'м\'ясо', 'сметана', 'кріп', 'часник']
  },
  {
    id: 2,
    title: 'Паста Карбонара',
    category: 'основні страви',
    time: 25,
    servings: 2,
    description: 'Італійська паста з беконом, яйцями та сиром Пармезан. Ніжна вершкова текстура.',
    image: 'https://klopotenko.com/wp-content/uploads/2018/10/Pasta-Karbonara_siteWEb.jpg',
    ingredients: ['спагеті', 'бекон', 'яйця', 'пармезан', 'чорний перець', 'часник', 'оливкова олія']
  },
  {
    id: 3,
    title: 'Тірамісу',
    category: 'десерти',
    time: 40,
    servings: 4,
    description: 'Ніжний італійський десерт з кавою, маскарпоне та какао.',
    image: 'https://images.unian.net/photos/2020_05/thumb_files/1200_0_1589289193-7553.jpg',
    ingredients: ['маскарпоне', 'кава еспресо', 'печиво савоярді', 'яйця', 'цукор', 'какао-порошок']
  },
  {
    id: 4,
    title: 'Грецький салат',
    category: 'салати',
    time: 10,
    servings: 2,
    description: 'Класичний середземноморський салат з фетою, оливками та овочами.',
    image: 'https://images.unian.net/photos/2019_12/thumb_files/1200_0_1577273929-5877.jpg',
    ingredients: ['помідори', 'огірок', 'червона цибуля', 'фета', 'оливки', 'оливкова олія', 'орегано']
  },
  {
    id: 5,
    title: 'Курячий суп з локшиною',
    category: 'супи',
    time: 60,
    servings: 4,
    description: 'Заспокійливий домашній суп на курячому бульйоні з яйцем та зеленню.',
    image: 'https://shuba.life/static/content/thumbs/1824x912/5/96/pphnee---c2x1x50px50p-up--d74394491ddbb802d47f7d935237d965.jpg',
    ingredients: ['курка', 'морква', 'цибуля', 'локшина', 'кріп', 'яйця', 'сіль', 'перець']
  },
  {
    id: 6,
    title: 'Цезар з куркою',
    category: 'салати',
    time: 20,
    servings: 2,
    description: 'Свіжий салат з куркою, пармезаном, крутонами та соусом Цезар.',
    image: 'https://shuba.life/static/content/thumbs/1824x912/2/ee/3kknvf---c2x1x50px50p-up--28954fa3f3ec65c2229481428371aee2.jpg',
    ingredients: ['куряче філе', 'салат романо', 'пармезан', 'крутони', 'соус цезар', 'часник']
  },
  {
    id: 7,
    title: 'Шоколадний брауні',
    category: 'десерти',
    time: 35,
    servings: 8,
    description: 'Вологий шоколадний пиріг з горіхами та тріщинкою зверху.',
    image: 'https://images.unian.net/photos/2020_05/thumb_files/1200_0_1589289193-7553.jpg',
    ingredients: ['темний шоколад', 'вершкове масло', 'яйця', 'цукор', 'борошно', 'волоські горіхи', 'какао']
  },
  {
    id: 8,
    title: 'Спагеті Болоньєзе',
    category: 'основні страви',
    time: 45,
    servings: 4,
    description: 'Італійська паста з м\'ясним соусом болоньєзе та пармезаном.',
    image: 'https://i.obozrevatel.com/food/recipemain/2018/12/29/item4162.jpg?size=636x424',
    ingredients: ['спагеті', 'яловичий фарш', 'помідори', 'морква', 'цибуля', 'селера', 'пармезан', 'вино червоне']
  }
]