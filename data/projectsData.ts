interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Engausa Academy',
    description: `Engausa Academy is a multilingual e-learning platform (mobile & web) I single handedly built from scratch in 2022, for an Engausa Global Tech Hub. An Educational institution that offers skills development courses in areas such as Solar Energy System Installation, Electric Fencing, CCTV Camera Installation & Maintenance, Electric Wiring, Graphic Design, Animation and more. I also still maintain this project to this date.`,
    imgSrc: '/static/images/engausa-academy.jpeg',
    href: 'https://www.engausaacademy.com',
  },
  {
    title: 'Sultan Film Factory',
    description: `Sultan Film Factory is a movie streaming app I built for an entertainment company that is based in Nigeria, and they needed a way to bring their films to a larger audience worldwide.`,
    imgSrc: '/static/images/sultan.jpg',
    href: 'https://play.google.com/store/apps/details?id=com.sultanfilmfactory.mobile',
  },
  {
    title: 'Drf-Logto',
    description: `Open Source django app for integrating Logto Authentication with Django Rest Framework. Has support for JWT based authentication, support for Session auth coming soon. Currently under development, so use with caution.`,
    imgSrc: '/static/images/logto.jpg',
    href: 'https://github.com/housain-maina/drf-logto',
  },
]

export default projectsData
