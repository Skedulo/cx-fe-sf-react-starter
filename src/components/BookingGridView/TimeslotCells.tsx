import React, { memo } from 'react'
import classnames from 'classnames'
import { Icon } from '@skedulo/sked-ui'

// import { BookingSlot } from '../../commons/types'

interface TimeslotCellsProps {
  dateRange: string[]
  // availableSlots: BookingSlot[]
  // onSelectSlot: (selectedSlot: BookingSlot) => void
  // timeslot: Pick<BookingSlot, 'start' | 'end'>
}

const TimeslotCells: React.FC<TimeslotCellsProps> = ({ dateRange }) => {
  return <div></div>
}

export default memo(TimeslotCells)
