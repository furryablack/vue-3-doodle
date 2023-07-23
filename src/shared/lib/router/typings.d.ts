import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    isArea?: {
      auth?: boolean,
      unauth?: boolean,
      maintainance?: boolean,
    },

    isAreaScope?: {
      dashboard?: boolean,
      user?: boolean,
      account?: boolean,
      planned?: boolean,
      unplanned?: boolean,
    },
  }
}
