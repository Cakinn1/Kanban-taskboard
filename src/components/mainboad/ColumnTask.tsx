import React from 'react'
import { KanbanTaskProps } from '../../App'

export default function ColumnTask(props: KanbanTaskProps) {
  const {description, id, status, statusId, subtasks,title} = props
  return (
    <section className='w-[320px]'>
      <div className='bg-[#2B2C37]'>
        d
      </div>
    </section>
  )
}
