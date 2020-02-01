/* eslint no-unused-expressions : 0 */
import { navSticky, navBarLogoSticky, navBarListItemLinkSticky } from '../../../client/src/pattern/molecule/Navigation/Navigation.scss'

export function handleStickyNavBar() {
  const nav = document.querySelector(`[class*="Navigation_nav"]`)
  const backgroundImage = document.querySelector(`[class*="MainContent_container1BackgroundImage"]`)?.querySelector('picture img')
  const navBarLogo = document.querySelector(`[class*="Navigation_navBarLogo"]`)
  const navBarMobileToggle = document.querySelector(`[class*="Navigation_navBarMobileToggle"]`)
  const navBarListItemLinks = document.querySelectorAll(`[class*="Navigation_navBarListItemLink"]`)

  const sticky = backgroundImage?.height - navBarMobileToggle?.offsetHeight - 20

  function handleWindowOnScroll() {
    if (window.pageYOffset > sticky) {
      nav?.classList.add(navSticky)
      navBarLogo?.classList.add(navBarLogoSticky)
      navBarListItemLinks?.forEach(navBarListItemLink => {
        navBarListItemLink.classList.add(navBarListItemLinkSticky)
      })
    } else {
      nav?.classList.remove(navSticky)
      navBarLogo?.classList.remove(navBarLogoSticky)
      navBarListItemLinks?.forEach(navBarListItemLink => {
        navBarListItemLink.classList.remove(navBarListItemLinkSticky)
      })
    }
  }

  window.onscroll = () => {
    handleWindowOnScroll()
  }
}
