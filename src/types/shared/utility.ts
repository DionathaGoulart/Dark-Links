// ================================
// Utility Types
// ================================

/**
 * Configuração de validação de variáveis de ambiente
 * Define variáveis obrigatórias e opcionais
 * @interface EnvConfig
 */
export interface EnvConfig {
  /** Lista de variáveis de ambiente obrigatórias */
  required: string[]
  /** Lista de variáveis de ambiente opcionais */
  optional: string[]
}

/**
 * Estrutura do resultado de validação
 * @interface ValidationResult
 */
export interface ValidationResult {
  /** Lista de erros de validação */
  errors: string[]
  /** Lista de avisos de validação */
  warnings: string[]
}
