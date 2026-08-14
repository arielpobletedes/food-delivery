// src/utils/logger.ts

export const logger = {
  info: (...args: unknown[]) => {
    if (__DEV__) {
      console.log("ℹ️ [INFO]:", ...args);
    }
  },

  warn: (...args: unknown[]) => {
    if (__DEV__) {
      console.warn("⚠️ [WARN]:", ...args);
    }
  },

  error: (error: unknown, context?: string) => {
    if (__DEV__) {
      console.error(`🚨 [ERROR]${context ? ` [${context}]` : ""}:`, error);
    } else {
      // En producción aquí envías el log a tu servicio de monitoreo
      // ej: Sentry.captureException(error);
    }
  },

  debug: (...args: unknown[]) => {
    if (__DEV__) {
      console.debug("🐛 [DEBUG]:", ...args);
    }
  },
};
