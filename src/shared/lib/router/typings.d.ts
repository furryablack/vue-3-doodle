import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    isArea?: {
      auth?: boolean,
      unauth?: boolean,
      maintainance?: boolean,
    }
  }
}
