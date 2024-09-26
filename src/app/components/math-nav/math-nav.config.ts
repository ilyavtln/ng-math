import { INavmenuItem } from "src/app/core/interfaces/navmenuItem.interface";

export const MAIN_MENU: INavmenuItem[] = [
  {
    title: 'Главная',
    href: '/dependent-integrals'
  },
  {
    title: 'Основы',
    href: '/dependent-integrals/basic'
  },
  {
    title: 'Равномерная сходимость',
    href: '/dependent-integrals/uniform-convergence',
    subMenu: [
      {
        title: 'Основные понятия',
        href: '/dependent-integrals/uniform-convergence/basic'
      },
      {
        title: 'Свойства',
        href: '/dependent-integrals/uniform-convergence/properties'
      },
    ]
  },
  {
    title: 'Литература',
    href: '/dependent-integrals/literature'
  },
]
