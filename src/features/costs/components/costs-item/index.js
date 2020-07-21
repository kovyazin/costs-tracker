import React from 'react'

import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Tag, Button } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

import classes from './styles.module.scss'

export const CostsItem = ({ title, categories, sum, date, className }) => {
  return (
    <div className={classnames(classes.wrapper, className)}>
      <div className={classes.body}>
        <div className={classes.info}>
          <span className={classes.title}>{title}</span>
          {categories && (
            <div className={classes.categories}>
              {categories.map((category) => (
                <Tag key={category} color="green">
                  {category}
                </Tag>
              ))}
            </div>
          )}
        </div>
        <div className={classes.actions}>
          <Button
            className={classes.button}
            type="primary"
            icon={<EditOutlined />}
          />
          <Button
            className={classes.button}
            type="danger"
            icon={<DeleteOutlined />}
          />
        </div>
      </div>
      <div className={classes.footer}>
        <span className={classes.date}>{date}</span>
        <span className={classes.sum}>Общая сумма: {sum} &#8381;</span>
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
