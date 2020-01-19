export const isRunningOnLocalHost = !process.env.BASE_URL

export const isRunningOnGitHubPages = process.env.BASE_URL === '/mts' && typeof window.appDefaultState === 'undefined'

export const isRunningOnHeroku = process.env.BASE_URL === '/mts' && typeof window.appDefaultState !== 'undefined'
