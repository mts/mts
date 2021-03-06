export const isRunningOnLocalHostViaPort = process.env.PORT === '3000'

export const isRunningOnLocalHostViaDomain = typeof window !== 'undefined' && window.location.href.includes('localhost')

export const isRunningOnGitHubPages = process.env.BASE_URL === '/mts' && window.location.href.includes('mts.github.io/mts')

export const windowObjectExists = typeof window !== 'undefined'
