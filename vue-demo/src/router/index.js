import Vue from 'vue'
import Router from 'vue-router'
import Apple from '@/components/apple'
import Banana from '@/components/banana'
import Orange from '@/components/orange'
import Car from '@/components/car'
import CarSon from '@/components/carson'
import Price from '@/components/pricelist'
import Book from '@/components/book'
import Bike from '@/components/bike'
import Flower from '@/components/flower'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    /* {
      path: '/',
      components: {
          default: Apple,
          car: Car
      }
    }, */
    {
      path: '/',
      name: 'price',
      component: Price,
      children: [
        {
          path: 'book',
          name: 'book',
          component: Book,
        },
        {
          path: 'bike',
          name: 'bike',
          component: Bike,
        },
        {
          path: 'flower',
          name: 'flower',
          component: Flower,
        }
      ]
    },
    {
      path: '/apple',
      name: 'apple',
      component: Apple,
      children:[
        {
          path: 'banana',
          name: 'banana',
          component: Banana
        }
      ]
    },
    {
      path: '/orange/:type/data/:color',
      name: 'orange',
      component: Orange
    },
    {
      path: '/car',
      name: 'car',
      component: Car,
      children:[
        {
          path: 'carson',
          name: 'carson',
          component: CarSon
        }
      ]
    }
  ]
})
