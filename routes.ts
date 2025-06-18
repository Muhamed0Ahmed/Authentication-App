/**
 *  An array of routes that are accessible to the publick Routes
 * this Routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes : string[] = ["/"]
/**
 *  An array of routes that are used for  authentication
 * these Routes will redirect logged in user to /settings   
 * @type {string[]}
 */
export const authRoutes : string[] = [
    "/auth/login",
    "/auth/register"
]


/**
 * The prefix for Api authentication routes
 * Routes thst start with this prefix are used for Api   
 * @type {string}
 */

export const apiAuthPrefix : string = "/api/auth"

/**
 * The default redirect path after logging in
 * Routes thst start with this prefix are used for Api   
 * @type {string}
 */


export const DEFAULT_LOGIN_REDIRECT = "/setting"