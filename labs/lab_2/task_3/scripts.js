const navLinks = [
  {
    label: 'Platform',
    isDropdown: true,
  },
  {
    label: 'Solutions',
    isDropdown: true,
  },
  {
    label: 'Resources',
    isDropdown: true,
  },
  {
    label: 'Open Source',
    isDropdown: true,
  },
  {
    label: 'Enterprise',
    isDropdown: true,
  },
  {
    label: 'Pricing',
    isDropdown: false,
  },
]

const cards = [
  {
    title: 'Free',
    description: 'The basics for individuals and organizations',
    price: 0,
    buttons: [{ label: 'Create a free organization', type: 'white' }],
    content: [
      {
        primaryText: 'Unlimited public/private repositories',
      },
      {
        primaryText: 'Dependabot security updates and version updates',
      },
      {
        primaryText: '2,000 CI/CD minutes/month',
        secondaryText: 'Free for public repositories',
      },
      {
        primaryText: '500MB of Packages storage',
        secondaryText: 'Free for public repositories',
      },
      {
        primaryText: 'Issues & Projects',
      },
      {
        primaryText: 'Community support',
      },
    ],
  },
  {
    title: 'Team',
    description: 'Advanced collaboration for individuals and organizations',
    price: 4,
    buttons: [{ label: 'Continue with team', type: 'dark' }],
    content: [
      { primaryText: 'Access to Github Codespaces' },
      { primaryText: 'Repository rules' },
      { primaryText: 'Multiple reviewers in pull requests' },
      { primaryText: 'Draft pull requests' },
      { primaryText: 'Code owners' },
      { primaryText: 'Pages and Wikis' },
      { primaryText: 'Environment deployment branches and secrets' },
      {
        primaryText: '3,000 CI/CD minutes/month',
        secondaryText: 'Free for public repositories',
      },
      { primaryText: 'Web-based support' },
    ],
  },
  {
    title: 'Enterprise',
    outline: true,
    description: 'Security, compliance, and flexible deployment',
    price: 21,
    buttons: [
      { label: 'Contact Sales', type: 'white' },
      { label: 'Start a free trial', type: 'dark' },
    ],
    content: [
      { primaryText: 'Data residency' },
      { primaryText: 'Enterprise Managed Users' },
      { primaryText: 'User provisioning through SCIM' },
      {
        primaryText:
          'Enterprise Account to centrally manage multiple organizations',
      },
      { primaryText: 'Environment protection rules' },
      { primaryText: 'Repository rules' },
      { primaryText: 'Audit Log API' },
      { primaryText: 'SOC1, SOC2, type 2 reports annually' },
      { primaryText: 'FedRAMP Tailored Authority to Operate (ATO)' },
      { primaryText: 'SAML single sign-on' },
      { primaryText: 'Advanced auditing' },
      { primaryText: 'Github Connect' },
      {
        primaryText: '50,000 CI/CD minutes/month',
        secondaryText: 'Free for public repositories',
      },
      {
        primaryText: '50GB of Packages storage',
        secondaryText: 'Free for public repositories',
      },
    ],
  },
]

const addons = [
  {
    img: '',
    title: 'Github Copilot',
    description:
      'Get started for free with up to 2,000 completions and 50 chat requests per month.',
    cta: 'Compare plans',
  },
  {
    img: '',
    title: 'Github Models',
    description:
      'Bring industry-leading AI into your workflow, securely, scalably, and with full developer control.',
    cta: 'Learn more',
  },
  {
    img: '',
    title: 'Github Advanced Security',
    description:
      'Gain peace of mind with our security, privacy, and responsible AI policies.',
    cta: 'Learn more',
  },
  {
    img: '',
    title: 'Github Codespaces',
    description:
      'Starting at $0.18 per hour of compute and $0.07 per GB of storage.',
    cta: 'Learn more',
  },
  {
    img: '',
    title: 'Premium Support',
    description:
      'Get expert help for Enterprise Cloud and Enterprise—any hour your team needs it.',
    cta: 'Learn more',
  },
  {
    img: '',
    title: 'Git Large File Storage',
    description: '$5 per month for 50 GB bandwidth and 50 GB of storage.',
    cta: 'Learn more',
  },
]

const additionalCards = [
  {
    img: '',
    title: 'Open source teams',
    description:
      'If you manage multiple contributors, there’s a free option. We also run GitHub Sponsors, where we help fund your work.',
    cta: 'Learn more',
  },
  {
    img: '',
    title: 'Students and teachers',
    description:
      'We’ve partnered with industry leaders to give students and teachers free access to the best developer tools—for the school year and beyond.',
    cta: 'Learn more',
  },
  {
    img: '',
    title: 'Nonprofits',
    description:
      'Work for a government-recognized nonprofit, association, or 501(c)(3)? Get a discounted Organization on us.',
    cta: 'Learn more',
  },
]

const renderNavLinks = () => {
  const navContainer = document.querySelector('nav')
  let res = ''
  navLinks.forEach((link) => {
    res += `
    <a
      href="#"
      class="hover:text-neutral-500 transition-all duration-300 flex gap-1 group"
    >
      <span>${link.label}</span>
      ${link.isDropdown ? `<img src="img/chevron-down.svg" alt="" class="w-[1rem] group-hover:-rotate-180 group-hover:text-neutral-500 fill-current transition-all duration-300" />` : ``}
    </a>
    `
    navContainer.innerHTML = res
  })
}
renderNavLinks()

const renderCards = (array) => {
  const cardsSection = document.querySelector('#cardsSection')

  let el = ''

  array.forEach((card) => {
    let buttons = ''

    card.buttons.forEach((button) => {
      buttons += `
        <button
          class="cursor-pointer w-full p-3 rounded-md font-semibold ${button.type == 'white' ? 'border border-neutral-300 text-black' : 'bg-linear-to-tr bg-neutral-800 to-neutral-700 text-white'}"
        >
          ${button.label}
        </button>
      `
    })

    let content = ''
    card.content.forEach((text) => {
      content += `
        <div class="w-full text-start cursor-pointer">
          <span class="flex items-start gap-1">
            <img src="img/chevron-down.svg" class="w-[1rem] -rotate-90 mt-0.5 fill-current text-neutral-500" alt="ch_dwn" />
            <p class="text-sm text-neutral-500 font-bold">
              ${text.primaryText}
            </p>
          </span>
          ${
            text.secondaryText
              ? `<p class="text-xs text-neutral-500 ml-3">
                  ${text.secondaryText}
                </p>`
              : ''
          }
        </div>
      `
    })

    el += `
    <div class="
      relative bg-white w-1/3 flex flex-col items-center pt-6 gap-2 shadow-xl rounded-xl
      ${card.outline ? 'border-2 border-blue-500' : 'border border-neutral-300'}
    ">
    ${
      card.outline
        ? `
          <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                      bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full">
            RECOMMENDED
          </div>
        `
        : ''
    }
        <p class="font-bold text-2xl">${card.title}</p>

        <p class="max-w-48 text-neutral-700 text-sm">
          ${card.description}
        </p>

        <div class="flex my-4">
          <p class="text-xl self-start">$</p>
          <p class="text-5xl self-center">${card.price}</p>
          <p class="text-xl self-end font-semibold">USD</p>
          <p class="text-base self-center ml-2 text-neutral-700">
            per user/month
          </p>
        </div>

        <div class="w-full flex flex-col px-4 gap-2">
          ${buttons}
        </div>

        <div class="w-full h-full flex flex-col gap-4 bg-neutral-100/75 p-4 border-t border-neutral-200 rounded-b-xl">
          ${content}
        </div>
      </div>
    `
  })

  cardsSection.innerHTML = el
}

renderCards(cards)

const renderAddons = () => {
  const addonsSection = document.querySelector('#addonsSection')
  let el = ''

  addons.forEach((addon) => {
    el += `
    <div
      class="shadow-xl text-start p-8 border border-neutral-300 rounded-lg space-y-4"
    >
      <div class="w-12 aspect-square bg-neutral-200 rounded-full"></div>
      <p class="font-semibold text-xl">${addon.title}</p>
      <p class="text-lg text-neutral-700">
        ${addon.description}
      </p>
      <button class="font-semibold text-base">${addon.cta} ></button>
    </div>
    `
  })
  addonsSection.innerHTML = el
}
renderAddons()

const renderAdditionalCards = () => {
  const addonsSection = document.querySelector('#additionalCards')
  let el = ''

  additionalCards.forEach((addon) => {
    el += `
    <div
      class="shadow-xl text-start p-8 border border-neutral-300 rounded-lg space-y-4"
    >
      <div class="w-12 aspect-square bg-neutral-200 rounded-full"></div>
      <p class="font-semibold text-xl">${addon.title}</p>
      <p class="text-lg text-neutral-700">
        ${addon.description}
      </p>
      <button class="font-semibold text-base">${addon.cta} ></button>
    </div>
    `
  })
  addonsSection.innerHTML = el
}
renderAdditionalCards()

const footerLinks = [
  {
    title: 'Platform',
    arr: [
      'Features',
      'Enterpise',
      'Copilot',
      'AI',
      'Security',
      'Pricing',
      'Team',
      'Resources',
      'Roadmap',
      'Compare Github',
    ],
  },
  {
    title: 'Ecosystem',
    arr: [
      'Developer API',
      'Partners',
      'Education',
      'GitHub CLI',
      'Github Desktop',
      'GitHub Mobile',
      'GitHub Marketplace',
      'MCP Registry',
    ],
  },
  {
    title: 'Support',
    arr: [
      'Docs',
      'Community Forum',
      'Professional Services',
      'Skills',
      'Status',
      'Contact Github',
    ],
  },
  {
    title: 'Company',
    arr: [
      'About',
      'Why Github',
      'Customer stories',
      'Blog',
      'The ReadME Project',
      'Careers',
      'Newsroom',
      'Inclusion',
      'Social Impact',
      'Shop',
    ],
  },
]

const renderFooterLinks = () => {
  const footerContainer = document.querySelector('#footerContainer')
  let res = ''
  footerLinks.forEach((link) => {
    let content = ''
    link.arr.forEach((sublink) => {
      content += `
      <a href="#" class="text-sm text-neutral-700 tracking-wide"
        >${sublink}</a
      >
      `
    })

    res += `
    <div class="w-1/6 space-y-6">
      <p class="text-cmd text-sm text-neutral-500 font-bold">${link.title}</p>
      <div class="flex flex-col gap-3">
      ${content}        
      </div>
    </div>
    `
  })
  res = footerContainer.innerHTML + res
  console.log(res)
  footerContainer.innerHTML = res
}
renderFooterLinks()
