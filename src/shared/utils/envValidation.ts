// ================================
// Internal Imports
// ================================
import { EnvConfig, ValidationResult } from '@types'

// ================================
// Configuration
// ================================

/**
 * Configuração completa das variáveis de ambiente do projeto
 * Centraliza todos os requisitos de variáveis de ambiente
 */
const ENV_CONFIG: EnvConfig = {
  required: [
    'VITE_EMAILJS_SERVICE_ID',
    'VITE_EMAILJS_TEMPLATE_ID',
    'VITE_EMAILJS_PUBLIC_KEY'
  ],
  optional: ['VITE_GA_MEASUREMENT_ID']
}

// ================================
// Helper Functions
// ================================

/**
 * Valida se uma variável de ambiente está definida e não está vazia
 * @param value - Valor da variável de ambiente
 * @returns True se a variável for válida
 */
const isValidEnvVar = (value: string | undefined): boolean => {
  return typeof value === 'string' && value.trim().length > 0
}

/**
 * Valida variáveis de ambiente e coleta erros/avisos
 * @param variables - Array de nomes de variáveis para validar
 * @param isRequired - Se as variáveis são obrigatórias ou opcionais
 * @returns Array de mensagens de validação
 */
const validateVariables = (
  variables: string[],
  isRequired: boolean
): string[] => {
  const messages: string[] = []
  const icon = isRequired ? '❌' : '⚠️'
  const suffix = isRequired
    ? 'é obrigatório mas não foi encontrado'
    : 'não foi encontrado (opcional)'

  variables.forEach((envVar) => {
    if (!isValidEnvVar(import.meta.env[envVar])) {
      messages.push(`${icon} ${envVar} ${suffix}`)
    }
  })

  return messages
}

/**
 * Registra os resultados de validação no console
 * @param result - Erros e avisos de validação
 */
const logValidationResults = ({ errors, warnings }: ValidationResult): void => {
  if (errors.length > 0) {
    console.error('🚨 Variáveis de ambiente obrigatórias ausentes:')
    errors.forEach((error) => console.error(error))
  }

  if (warnings.length > 0) {
    console.warn('⚠️  Variáveis de ambiente opcionais ausentes:')
    warnings.forEach((warning) => console.warn(warning))
  }

  if (errors.length === 0 && warnings.length === 0) {
    console.info('✅ Todas as variáveis de ambiente estão configuradas')
  }
}

/**
 * Valida o formato do ID de medição do Google Analytics
 * @param measurementId - ID de medição do GA4
 * @returns True se o formato for válido
 */
const isValidGAFormat = (measurementId: string): boolean => {
  if (!measurementId.startsWith('G-')) {
    console.error('Analytics: VITE_GA_MEASUREMENT_ID deve começar com "G-"')
    return false
  }

  if (measurementId === 'G-XXXXXXXXXX') {
    console.warn('Analytics: Usando ID de placeholder - substitua pelo ID real')
    return false
  }

  return true
}

// ================================
// Main Functions
// ================================

/**
 * Valida todas as variáveis de ambiente necessárias
 * Mostra avisos para variáveis ausentes mas não quebra a aplicação
 */
export const validateEnvironment = (): void => {
  const errors = validateVariables(ENV_CONFIG.required, true)
  const warnings = validateVariables(ENV_CONFIG.optional, false)

  logValidationResults({ errors, warnings })
}

/**
 * Função específica para validar configuração do Analytics
 * @returns True se o ambiente do analytics estiver configurado corretamente
 */
export const validateAnalyticsEnv = (): boolean => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

  if (!isValidEnvVar(measurementId)) {
    console.info(
      'Analytics: VITE_GA_MEASUREMENT_ID não configurado - Analytics desabilitado'
    )
    return false
  }

  return isValidGAFormat(measurementId)
}
