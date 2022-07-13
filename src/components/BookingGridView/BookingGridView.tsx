import * as React from 'react'

import { toastMessage } from '../../utils/notificationUtils'

import TimeslotCells from './TimeslotCells'
import moment from 'moment-timezone'
import { calculateDurationInMinutes, minutesToTimeString } from '../../utils/dateUtils'

const DEFAULT_SLOT_WIDTH = 100
const DATE_FORMAT = 'MM-DD-YYYY'
const TIME_FORMAT = 'h:mma'

const gridData = [
      {
          "slotDate": "2022-06-20",
          "slots": [
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 15,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 0
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 30,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 15
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 45,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 30
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 45
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 400,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 345
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 415,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 400
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 430,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 415
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 445,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 430
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 500,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 445
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 515,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 500
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 530,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 515
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 545,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 530
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 600,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 545
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 615,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 600
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 630,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 615
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 645,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 630
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 700,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 645
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 715,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 700
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 730,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 715
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 745,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 730
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 800,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 745
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 815,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 800
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 830,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 815
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 845,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 830
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 900,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 845
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 915,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 900
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 930,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 915
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 945,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 930
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1000,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 945
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1015,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1000
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1030,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1015
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1045,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1030
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1045
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1400,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1345
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1415,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1400
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1430,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1415
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1445,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1430
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1500,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1445
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1515,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1500
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1530,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1515
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1545,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1530
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1600,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1545
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1615,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1600
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1630,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1615
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1645,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1630
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1700,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1645
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1715,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1700
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1730,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1715
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1745,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1730
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1800,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1745
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1815,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1800
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1830,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1815
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1845,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1830
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1900,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1845
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1915,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1900
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1930,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1915
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1945,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1930
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2000,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1945
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2015,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2000
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2030,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2015
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2045,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2030
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2045
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 0,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2345
              }
          ]
      },
      {
          "slotDate": "2022-06-21",
          "slots": [
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 15,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 0
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 30,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 15
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 45,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 30
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 45
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 400,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 345
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 415,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 400
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 430,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 415
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 445,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 430
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 500,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 445
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 515,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 500
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 530,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 515
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 545,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 530
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 600,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 545
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 615,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 600
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 630,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 615
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 645,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 630
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 700,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 645
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 715,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 700
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 730,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 715
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 745,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 730
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 800,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 745
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 815,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 800
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 830,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 815
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 845,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 830
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 900,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 845
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 915,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 900
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 930,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 915
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 945,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 930
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1000,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 945
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1015,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1000
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1030,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1015
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1045,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1030
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1045
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1400,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1345
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1415,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1400
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1430,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1415
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1445,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1430
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1500,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1445
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1515,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1500
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1530,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1515
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1545,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1530
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1600,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1545
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1615,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1600
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1630,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1615
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1645,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1630
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1700,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1645
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1715,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1700
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1730,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1715
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1745,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1730
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1800,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1745
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1815,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1800
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1830,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1815
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1845,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1830
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1900,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1845
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1915,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1900
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1930,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1915
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1945,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1930
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2000,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1945
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2015,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2000
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2030,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2015
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2045,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2030
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2045
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 0,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2345
              }
          ]
      },
      {
          "slotDate": "2022-06-22",
          "slots": [
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 15,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 0
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 30,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 15
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 45,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 30
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 45
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 400,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 345
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 415,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 400
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 430,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 415
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 445,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 430
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 500,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 445
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 515,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 500
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 530,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 515
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 545,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 530
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 600,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 545
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 615,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 600
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 630,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 615
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 645,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 630
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 700,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 645
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 715,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 700
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 730,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 715
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 745,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 730
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 800,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 745
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 815,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 800
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 830,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 815
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 845,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 830
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 900,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 845
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 915,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 900
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 930,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 915
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 945,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 930
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1000,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 945
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1015,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1000
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1030,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1015
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1045,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1030
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1045
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1400,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1345
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1415,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1400
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1430,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1415
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1445,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1430
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1500,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1445
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1515,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1500
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1530,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1515
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1545,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1530
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1600,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1545
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1615,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1600
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1630,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1615
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1645,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1630
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1700,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1645
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1715,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1700
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1730,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1715
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1745,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1730
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1800,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1745
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1815,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1800
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1830,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1815
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1845,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1830
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1900,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1845
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1915,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1900
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1930,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1915
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1945,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1930
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2000,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1945
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2015,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2000
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2030,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2015
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2045,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2030
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2045
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 0,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2345
              }
          ]
      },
      {
          "slotDate": "2022-06-23",
          "slots": [
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 15,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 0
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 30,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 15
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 45,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 30
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 45
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 400,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 345
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 415,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 400
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 430,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 415
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 445,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 430
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 500,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 445
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 515,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 500
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 530,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 515
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 545,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 530
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 600,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 545
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 615,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 600
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 630,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 615
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 645,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 630
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 700,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 645
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 715,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 700
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 730,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 715
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 745,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 730
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 800,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 745
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 815,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 800
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 830,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 815
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 845,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 830
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 900,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 845
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 915,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 900
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 930,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 915
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 945,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 930
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1000,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 945
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1015,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1000
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1030,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1015
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1045,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1030
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1045
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1400,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1345
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1415,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1400
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1430,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1415
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1445,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1430
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1500,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1445
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1515,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1500
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1530,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1515
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1545,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1530
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1600,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1545
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1615,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1600
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1630,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1615
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1645,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1630
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1700,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1645
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1715,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1700
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1730,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1715
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1745,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1730
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1800,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1745
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1815,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1800
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1830,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1815
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1845,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1830
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1900,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1845
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1915,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1900
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1930,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1915
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1945,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1930
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2000,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1945
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2015,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2000
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2030,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2015
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2045,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2030
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2045
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 0,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2345
              }
          ]
      },
      {
          "slotDate": "2022-06-24",
          "slots": [
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 15,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 0
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 30,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 15
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 45,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 30
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 45
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 400,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 345
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 415,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 400
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 430,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 415
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 445,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 430
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 500,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 445
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 515,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 500
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 530,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 515
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 545,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 530
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 600,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 545
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 615,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 600
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 630,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 615
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 645,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 630
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 700,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 645
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 715,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 700
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 730,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 715
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 745,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 730
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 800,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 745
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 815,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 800
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 830,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 815
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 845,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 830
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 900,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 845
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 915,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 900
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 930,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 915
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 945,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 930
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1000,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 945
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1015,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1000
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1030,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1015
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1045,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1030
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1045
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1400,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1345
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1415,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1400
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1430,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1415
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1445,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1430
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1500,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1445
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1515,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1500
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1530,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1515
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1545,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1530
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1600,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1545
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1615,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1600
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1630,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1615
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1645,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1630
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1700,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1645
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1715,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1700
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1730,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1715
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1745,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1730
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1800,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1745
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1815,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1800
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1830,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1815
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1845,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1830
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1900,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1845
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1915,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1900
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1930,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1915
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1945,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1930
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2000,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1945
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2015,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2000
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2030,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2015
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2045,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2030
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2045
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 0,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2345
              }
          ]
      },
      {
          "slotDate": "2022-06-25",
          "slots": [
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 15,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 0
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 30,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 15
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 45,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 30
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 45
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 400,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 345
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 415,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 400
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 430,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 415
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 445,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 430
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 500,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 445
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 515,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 500
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 530,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 515
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 545,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 530
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 600,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 545
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 615,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 600
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 630,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 615
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 645,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 630
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 700,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 645
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 715,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 700
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 730,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 715
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 745,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 730
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 800,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 745
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 815,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 800
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 830,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 815
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 845,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 830
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 900,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 845
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 915,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 900
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 930,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 915
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 945,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 930
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1000,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 945
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1015,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1000
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1030,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1015
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1045,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1030
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1045
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1400,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1345
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1415,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1400
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1430,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1415
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1445,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1430
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1500,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1445
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1515,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1500
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1530,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1515
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1545,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1530
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1600,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1545
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1615,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1600
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1630,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1615
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1645,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1630
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1700,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1645
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1715,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1700
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1730,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1715
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1745,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1730
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1800,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1745
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1815,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1800
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1830,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1815
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1845,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1830
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1900,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1845
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1915,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1900
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1930,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1915
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1945,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1930
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2000,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1945
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2015,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2000
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2030,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2015
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2045,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2030
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2045
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 0,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2345
              }
          ]
      },
      {
          "slotDate": "2022-06-26",
          "slots": [
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 15,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 0
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 30,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 15
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 45,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 30
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 45
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 400,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 345
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 415,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 400
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 430,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 415
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 445,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 430
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 500,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 445
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 515,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 500
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 530,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 515
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 545,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 530
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 600,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 545
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 615,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 600
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 630,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 615
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 645,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 630
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 700,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 645
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 715,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 700
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 730,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 715
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 745,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 730
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 800,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 745
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 815,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 800
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 830,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 815
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 845,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 830
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 900,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 845
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 915,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 900
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 930,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 915
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 945,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 930
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1000,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 945
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1015,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1000
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1030,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1015
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1045,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1030
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1045
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1400,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1345
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1415,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1400
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1430,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1415
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1445,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1430
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1500,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1445
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1515,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1500
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1530,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1515
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1545,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1530
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1600,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1545
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1615,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1600
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1630,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1615
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1645,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1630
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1700,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1645
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1715,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1700
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1730,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1715
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1745,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1730
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1800,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1745
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1815,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1800
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1830,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1815
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1845,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1830
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1900,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1845
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1915,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1900
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1930,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1915
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 1945,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1930
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2000,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 1945
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2015,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2000
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2030,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2015
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2045,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2030
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2100,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2045
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2115,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2100
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2130,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2115
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2145,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2130
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2200,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2145
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2215,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2200
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2230,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2215
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2245,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2230
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2300,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2245
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2315,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2300
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2330,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2315
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 2345,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2330
              },
              {
                  "canSelect": false,
                  "duration": 15,
                  "endTime": 0,
                  "isAvailable": false,
                  "isBooked": false,
                  "startTime": 2345
              }
          ]
      }
];

const BookingGridView: React.FC = () => {
  const prepareBookingGridData = () => {
    let data = gridData;
    let headers = [];
    let vHeaders = [];
    let cols = [];
    let start = 800;
    let end = 1600;
    let interval = 15;

    let slotCount = Math.floor((end - start) / interval);
    for (let j = 0; j < slotCount; j++) {
      let vHeaderItem = {
        header1: moment(minutesToTimeString(start + j * interval), "HHmm").format("HH:mm"),
        header2: moment(minutesToTimeString(start + (j + 1) * interval), "HHmm").format("HH:mm"),
        first: j === 0,
        last: j === (slotCount - 1)
      }
      vHeaders.push(vHeaderItem);
    }

    let countSlot = 1;

    for (let i = 0; i < data.length; i++) {
      let resource = data[i];
      let headerItem = {
        header1: moment(resource.slotDate).format("ddd DD"),
        selfGenerated: moment(resource.slotDate).format("ddd DD") === moment().format("ddd DD")
      };
      headers.push(headerItem);

      let col = [];

      for (let j = 0; j < resource.slots.length; j++) {
        let item = resource.slots[j];
        const duration = 0;//calculateDurationInMinutes(item.startTime, item.endTime)
        let slot = {
          id: countSlot,
          value: "",
          cellHeight: 60,
          duration: duration,
          available: item.isAvailable,
          canSelect: item.canSelect,
          blank: item.isAvailable ? false : !item.canSelect,
          startTime: item.startTime,
          endTime: item.endTime,
          startDate: resource.slotDate,
        };
        if (item.isAvailable) {
          slot.value = minutesToTimeString(item.startTime) || ""
        } else if (item.isBooked) {
          slot.value = "Booked";
        } else {
          slot.value = "Unavailable";
        }
        col.push(slot);
        countSlot++;
      }

      cols.push(col);
    }

    return {
      headers,
      vHeaders,
      cols,
    };
  };
  // const generateBookingGridData = () => {
  //   console.log('generateBookingGridData');
  //   let numOfCols = _.size(this.inputData.headers);
  //   let numOfRows = _.size(this.inputData.vHeaders);
  //   let hasScroller = false;
  //   if (!this.ignoreScroll) {
  //     let calculatedHeight = this.firstCellHeight + numOfRows * this.cellHeightOriginal;
  //     if (calculatedHeight > this.gridHeight) {
  //       this.hasScroller = true;
  //       hasScroller = true;
  //     }
  //   }
  //   if (this.gridWidth - this.firstCellWidth - (hasScroller ? this.scrollerSize : 0) > numOfCols * this.cellWidthOriginal) {
  //     this.cellWidth = ((this.gridWidth - this.firstCellWidth - (hasScroller ? this.scrollerSize : 0)) / numOfCols).toFixed(2);
  //   } else {
  //     this.cellWidth = this.cellWidthOriginal;
  //   }
  //   this.gridMaxHeight = numOfRows * this.cellHeight + this.firstCellHeight;
  //   let data = {};
  //   data.header = this.generateHeader(numOfCols);
  //   data.vHeader = this.generateVHeader(numOfRows);
  //   data.body = this.generateBody(numOfCols, numOfRows);
  //   data.gridStyle = {
  //     'grid-template-columns': this.firstCellWidth + 'px' + ' ' + 'calc(100% - ' + this.firstCellWidth + 'px' + ')',
  //     'grid-template-rows': this.firstCellHeight + 'px' + ' ' + 'calc(100% - ' + this.firstCellHeight + 'px' + ')',
  //     'max-height': (this.gridMaxHeight + this.scrollerSize) + 'px',
  //   };
  //   this.data = data;
  // }
  return (
    <div className="cx-flex">

    </div>
  )
}

export default BookingGridView
