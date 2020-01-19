export const isRunningOnLocalHost = !process.env.BASE_URL

export const isRunningOnGitHubPages = process.env.BASE_URL === '/mts' && typeof window.appState === 'undefined'

export const isRunningOnHeroku = process.env.BASE_URL === '/mts' && typeof window.appState !== 'undefined'
