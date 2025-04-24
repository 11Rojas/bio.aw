/**
 * Configuración centralizada de todas las rutas de la aplicación
 * Evita "magic strings" y facilita el mantenimiento
 */

export const ROUTE_PATHS = {
    PUBLIC: {
      HOME: '/',
      LOGIN: '/signin',
      REGISTER: '/register',
      FORGOT_PASSWORD: '/forgot-password',
      RESET_PASSWORD: '/reset-password/:token',
      ABOUT: '/about',
      PRIVACY: '/privacy',
      TERMS: '/terms',
      ERROR: '/error/:code?', // El ? indica que es opcional
      PRICING: "/pricing",
      CONTACT: '/contact',
      PROFILE: '/:id'
    },
    PRIVATE: {
      DASHBOARD: '/dashboard',
      PROFILE: '/profile',
      SETTINGS: '/settings',
      BILLING: '/billing',
      NOTIFICATIONS: '/notifications',
      UNAUTHORIZED: '/unauthorized', // Para acceso denegado
    },
    ADMIN: {
      DASHBOARD: '/admin',
      USERS: '/admin/users',
      ROLES: '/admin/roles',
      SETTINGS: '/admin/settings',
      AUDIT_LOGS: '/admin/audit-logs',
    },
    API: {
      AUTH: '/api/auth',
      USER: '/api/user',
    },
    // Rutas especiales (ej: para integraciones)
    EXTERNAL: {
      DOCS: 'https://docs.tudominio.com',
      SUPPORT: 'https://support.tudominio.com',
    },
  } as const;
  
  // Tipos derivados para TypeScript
  export type PublicRoutePath = (typeof ROUTE_PATHS.PUBLIC)[keyof typeof ROUTE_PATHS.PUBLIC];
  export type PrivateRoutePath = (typeof ROUTE_PATHS.PRIVATE)[keyof typeof ROUTE_PATHS.PRIVATE];
  export type AdminRoutePath = (typeof ROUTE_PATHS.ADMIN)[keyof typeof ROUTE_PATHS.ADMIN];
  
  /**
   * Helper para construir rutas dinámicas
   * Ejemplo: buildPath(ROUTE_PATHS.PRIVATE.PROFILE_EDIT, { userId: '123' }) => '/profile/123/edit'
   */
  export function buildPath(
    path: string,
    params: Record<string, string | number> = {}
  ): string {
    return Object.entries(params).reduce(
      (currentPath, [key, value]) => currentPath.replace(`:${key}`, String(value)),
      path
    );
  }
  
  /**
   * Helper para obtener query strings
   * Ejemplo: withQuery(ROUTE_PATHS.PUBLIC.HOME, { ref: 'promo' }) => '/?ref=promo'
   */
  export function withQuery(
    path: string,
    query: Record<string, string | number | boolean> = {}
  ): string {
    const queryString = new URLSearchParams();
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        queryString.append(key, String(value));
      }
    });
    return queryString.toString() ? `${path}?${queryString}` : path;
  }
  
  // Ejemplos de uso:
  // - Navegación: <Link to={ROUTE_PATHS.PRIVATE.DASHBOARD}>
  // - Redirección: <Navigate to={ROUTE_PATHS.PUBLIC.LOGIN} />
  // - Rutas dinámicas: buildPath(ROUTE_PATHS.PUBLIC.RESET_PASSWORD, { token: 'abc123' })