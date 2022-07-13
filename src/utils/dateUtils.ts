import moment from 'moment-timezone'
import { differenceInMinutes, parseISO } from 'date-fns'
import { toNumber } from 'lodash'

import { M_DATETIME_TZ_FORMAT, AM, PM } from '../commons/constants'

const hoursLabel = (hours: number) => hours > 0 ? `${hours}h` : ''

const minutesLabel = (minutes: number) =>  minutes > 0 ? `${minutes}m` : ''

export const minutesToDuration = (totalMinutes?: number) => {
  if (totalMinutes === null || totalMinutes === undefined) {
    return undefined
  }

  if (totalMinutes === 0) {
    return 0
  }

  const roundedMinutes = Math.round(totalMinutes)

  const hours = Math.floor(roundedMinutes / 60)
  const minutes = roundedMinutes % 60
  return `${hoursLabel(hours)} ${minutesLabel(minutes)}`
}

export const getTimeGapHrs = (timezone: string) => {
  if (!timezone) {
    return 0
  }

  const tzOffset = moment.tz(timezone).utcOffset() / 60
  const currentOffset = moment().utcOffset() / 60

  return currentOffset - tzOffset
}

export const formatTZDatetimeString = (date: Date | string, timezone: string, format?: string) => {
  if (!date || !timezone) {
    return ''
  }

  return moment.tz(date, timezone).format(format || M_DATETIME_TZ_FORMAT)
}

export const parseLocalDateToZonedDate = (date: Date | string, timezone: string) => {
  return moment.tz(date, timezone).toDate()
}

export const calculateDurationInMinutes = (startISO?: string, endISO?: string) => {
  if (!startISO || !endISO) {
    return undefined
  }

  const totalMinutes = differenceInMinutes(parseISO(endISO), parseISO(startISO))

  return totalMinutes
}

// ----------------------------------------------------------------
// input: '14:00' | '2:00pm' string
// output: 1400 number
// ----------------------------------------------------------------
export const parseTimeStringToNumber = (timeString: string, is24Hour = false) => {
  if (is24Hour) {
    return toNumber(timeString.split(':').join(''))
  }

  const lowerCaseTimeString = timeString.toLowerCase()
  const suffix = lowerCaseTimeString.substring(lowerCaseTimeString.length - 2, lowerCaseTimeString.length)
  const [hours, minutes] = lowerCaseTimeString.replace(suffix, '').split(':')
  if (suffix === 'am') {
    return toNumber(`${hours === '12' ? 0 : hours}${minutes}`)
  }

  if (hours === '12') {
    return toNumber(`${hours}${minutes}`)
  }

  return toNumber(`${toNumber(hours) + 12}${minutes}`)
}

// ----------------------------------------------------------------
// input: 1400 number
// output: '14:00' | '2:00pm' string
// ----------------------------------------------------------------
export const parseTimeNumberToString = (timeNumber: number, is24Hour = false) => {
  const timeString = timeNumber.toString()
  const hours = Math.floor(timeNumber / 100)
  const minutes = hours > 0 ? timeString.substring(hours.toString().length, timeString.length) : timeString

  if (is24Hour) {
    return `${hours}:${minutes.padStart(2, '0')}`
  }

  const suffix = hours >= 12 ? PM : AM
  const hoursString = hours === 0 ? '12' : (hours > 12 ? hours - 12 : hours)

  return `${hoursString}:${minutes.padStart(2, '0')}${suffix}`
}

// ----------------------------------------------------------------
// input: 1200 number
// output: '8:00pm' | '20:00' string
// ----------------------------------------------------------------
export const minutesToTimeString = (totalMinutes: number, is24Hour = false) => {
  if (totalMinutes === null || totalMinutes === undefined) {
    return undefined
  }

  if (totalMinutes === 0) {
    return is24Hour ? '0:00am' : '12:00am'
  }

  const roundedMinutes = Math.round(totalMinutes)

  const hours = Math.floor(roundedMinutes / 60)
  const minutes = roundedMinutes % 60

  if (is24Hour) {
    return `${hoursLabel(hours)} ${minutesLabel(minutes)}`
  }
  const suffix = hours >= 12 ? 'pm' : 'am'
  const hoursString = hours === 0 ? '12' : (hours > 12 ? hours - 12 : hours)
  return `${hoursString}:${minutes.toString().padStart(2, '0')}${suffix}`
}
