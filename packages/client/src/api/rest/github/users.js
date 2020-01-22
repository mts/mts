import { windowObjectExists } from '../../../../../library/src/environment'

export const getUsersMTSReposRest = async () => {
  const url = 'https://api.github.com/users/mts/repos'

  const getRequestOptions = () => ({
    headers: {
      'content-type': 'application/json',
      'User-Agent': 'MTS',
    },
    method: 'GET',
    mode: 'cors',
  })

  if (windowObjectExists) {
    const response = await window.fetch(url, getRequestOptions())
    return response.json()
  }

  return []
}
