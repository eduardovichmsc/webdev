const footerLinks = [
  'Meta',
  'About',
  'Blog',
  'Jobs',
  'Help',
  'API',
  'Privacy',
  'Terms',
  'Locations',
  'Instagram Lite',
  'Meta AI',
  'Threads',
  'Contact Uploading & Non-Users',
  'Meta Verified',
]

const renderLinks = () => {
  const footerTop = document.querySelector('#footerTop')
  let el = ``
  for (let index = 0; index < footerLinks.length; index++) {
    const e = `
    <a href="" class="tracking-wide font-light">
    ${footerLinks[index]}
    </a>
    `
    el += e
  }
  footerTop.innerHTML = el
}

renderLinks()
