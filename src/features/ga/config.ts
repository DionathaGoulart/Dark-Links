// ================================
// Internal Imports
// ================================
import { validateAnalyticsEnv } from '@shared'
import { AnalyticsConfig } from './types'

export const ANALYTICS_CONFIG: AnalyticsConfig = {
  measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID,
  enabled: import.meta.env.PROD && validateAnalyticsEnv()
}
