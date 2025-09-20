// ================================
// ANALYTICS CONFIG
// ================================
import { validateAnalyticsEnv } from '@/shared/utils/envValidation'

export interface AnalyticsConfig {
  measurementId: string
  enabled: boolean
}

export const ANALYTICS_CONFIG: AnalyticsConfig = {
  measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID,
  enabled: import.meta.env.PROD && validateAnalyticsEnv()
}
