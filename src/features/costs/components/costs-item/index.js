import React from 'react'

import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Tag, Button } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

import './styles.scss'

export const CostsItem = ({ title, categories, sum, date, className }) => {
  return (
    <div className={classnames('costs-item', className)}>
      <div className="costs-item__body">
        <div className="costs-item__info">
          <span className="costs-item__title">{title}</span>
          {categories && (
            <div className="costs-item__categories">
              {categories.map((category) => (
                <Tag key={category} color="green">
                  {category}
                </Tag>
              ))}
            </div>
          )}
        </div>
        <div className="costs-item__actions">
          <Button
            className="costs-item__actions-btn"
            type="primary"
            icon={<EditOutlined />}
          />
          <Button
            className="costs-item__actions-btn"
            type="danger"
            icon={<DeleteOutlined />}
          />
        </div>
      </div>
      <div className="costs-item__footer">
        <span className="costs-item__date">{date}</span>
        <span className="costs-item__sum">Общая сумма: {sum} &#8381;</span>
      </div>
    </div>
  )
}

CostsItem.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  sum: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  className: PropTypes.string
}
