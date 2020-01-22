export const getUsersMTSRepos = async () => {
  const url = 'https://api.github.com/users/mts/repos'

  const getRequestOptions = () => ({
    headers: {
      'content-type': 'application/json',
      'User-Agent': 'MTS',
    },
    method: 'GET',
    mode: 'cors',
  })

  const response = await window.fetch(url, getRequestOptions())

  return response.json()
}
