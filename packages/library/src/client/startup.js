import axe from '@axe-core/react'

export function addDivWithIdToBody(divId) {
  const appElement = document.createElement('div')
  appElement.id = divId
  document.body.appendChild(appElement)
}

export function checkAccessibilityIssues(react, reactDOM, delay) {
  if (process.env.NODE_ENV !== 'production') {
    axe(react, reactDOM, delay)
  }
}
