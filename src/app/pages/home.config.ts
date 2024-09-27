import {IHeroBanner} from "../core/interfaces/hero-banner.interface";
import {ICourseBanner} from "../core/interfaces/course-banner.interface";

export const HERO_BANNER: IHeroBanner = {
  title: "Математический анализ",
  description: "Сайт по математическому анализу с обучающими материалами, тестами и темами",
  badges: { title: "Интересно" },
  anchors: [
    {
      title: 'Подробнее',
      href: ''
    }
  ],
  image: {
    title: '',
    href: 'https://avatars.mds.yandex.net/i?id=deabf7c402dec92d163ea04dbaeaab54fbf12116-12715024-images-thumbs&n=13'
  }
}

export const COURSE_BANNERS: ICourseBanner[] = [
  {
    title: "Зависящие интегралы",
    image: { title: '', href: 'icons/presentation.svg' },
    duration: 48,
    themes: 6,
    color: 'primary-dark-green-secondary',
    anchors: [
      {
        title: 'Подробнее',
        href: '/dependent-integrals'
      }
    ]
  },
  {
    title: "Пределы",
    image: { title: '', href: 'icons/graduation-cap.svg' },
    duration: 15,
    themes: 2,
    color: 'primary-yellow-secondary',
    anchors: [
      {
        title: 'Подробнее',
        href: '/features'
      }
    ]
  },
]
