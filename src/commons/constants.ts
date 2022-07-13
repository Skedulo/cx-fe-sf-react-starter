export const PATIENT_PREFERENCE_FIELDS = {
  LANGUAGE_PREFERENCE: {
    LABEL: 'Language Preference',
    VALUE: 'LanguagePreference',
  },
  GENDER_PREFERENCE: {
    LABEL: 'Gender Preference',
    VALUE: 'GenderPreference',
  },
  JOB_TYPE: {
    LABEL: 'Job Type',
    VALUE: 'JobType',
  },
  TAGS: {
    LABEL: 'Tags',
    VALUE: 'PatientPreferenceTags',
  },
}

export enum FetchStatus {
  Idle = 'IDLE',
  Fetching = 'FETCHING',
  Fetched = 'FETCHED',
  Failed = 'FAILED',
}

export const M_DATE_FORMAT = 'DD MMM YYYY'
export const M_TIME_FORMAT = 'hh:mma'
export const M_TIME_TZ_FORMAT = 'hh:mma z'
export const M_DATETIME_FORMAT = 'DD MMM YYYY hh:mma'
export const M_DATETIME_TZ_FORMAT = 'DD MMM YYYY hh:mma z'
export const AM = 'am'
export const PM = 'pm'
export const DATE_FORMAT = 'MM-dd-yyyy'
export const TIME_FORMAT = 'hh:mma'
export const LOCAL_DATE_FORMAT = 'yyyy-MM-dd'
