export const isRunningOnLocalHost = typeof window !== 'undefined' && window.location.href.includes('localhost')

export const isRunningOnGitHubPages = process.env.BASE_URL === '/mts' && window.location.href.includes('mts.github.io/mts')
