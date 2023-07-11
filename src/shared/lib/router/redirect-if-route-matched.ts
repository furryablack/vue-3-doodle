import { Shared } from '@shared';

/**
 * Make a route unaccessable
 * 
 * It always matches route exactly
 * 
 * It will navigate to vue-router START_LOCATION (see documentation for details)
 * 
 * If START_LOCATION equals to an unaccessable route path 
 * it will navigate to app base url(like "home", see VITE_APP_BASE_URL)
 * 
 * @param unaccessablePath - unaccessable route path 
 * @returns RouteRecordRedirectOption function like (to: RouteLocation) => RouteLocationRaw 
 */
export function redirectIfRouteMatched(unaccessablePath: string) {
  const LibRouter = Shared.Lib.Router;
  const LibEnvironment = Shared.Lib.Environment;
  const { VITE_APP_BASE_URL } = LibEnvironment.getParsed();

  return () => {
    const initalRoute = LibRouter.getInitialRoute();

    const redirectPath = initalRoute.path === unaccessablePath
      ? VITE_APP_BASE_URL
      : initalRoute.path;

    return redirectPath;
  };
}