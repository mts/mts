export const isRunningOnLocalHost = !process.env.BASE_URL

export const isRunningOnGitHubPages = process.env.BASE_URL === '/mts' && window.location.href.includes('mts.github.io/mts')

export const isRunningOnHeroku = process.env.BASE_URL === '/mts' && window.location.href.includes('mts-http-server.herokuapp.com/mts')
