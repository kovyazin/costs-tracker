import React from 'react'

import { CostsItem } from '../costs-item'

import './styles.scss'

const costs = [
  {
    date: '20-07-2020',
    categories: ['продукты'],
    title: 'Закупились в магните',
    description: null,
    products: [
      {
        name: 'Сникерс',
        price: 42
      },
      {
        name: 'Фанта',
        price: 80
      }
    ],
    sum: 500,
    id: 1
  },
  {
    date: '21-07-2020',
    categories: ['авто'],
    title: 'Заправился',
    description: null,
    products: [],
    sum: 1000,
    id: 2
  }
]

export const CostsList = () => {
  return (
    <div className="costs-list">
      {costs.map(({ title, id, categories, sum, date }) => (
        <CostsItem
          key={id}
          title={title}
          sum={sum}
          categories={categories}
          date={date}
          className="costs-list__item"
        />
      ))}
    </div>
  )
}
