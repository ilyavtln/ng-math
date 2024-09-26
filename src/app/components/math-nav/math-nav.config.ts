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
    title: 'Равномерная <br> сходимость',
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
    title: 'Зависящие <br> интегралы',
    href: '/dependent-integrals/proper-integrals',
    subMenu: [
      {
        title: 'Собственные интегралы',
        href: '/dependent-integrals/proper-integrals'
      },
      {
        title: 'Несобственные интегралы',
        href: '/dependent-integrals/improper-integrals'
      },
      {
        title: 'Интегралы Эйлера',
        href: '/dependent-integrals/euler-integrals'
      },
      {
        title: 'Технологии вычисления',
        href: '/dependent-integrals/calculation-methods'
      },
      {
        title: 'Применение',
        href: '/dependent-integrals/application'
      },
      {
        title: 'Приложение',
        href: '/dependent-integrals/prilo'
      },
    ]
  },
  {
    title: 'Задачи',
    href: '/dependent-integrals/tasks'
  },
  {
    title: 'Тестирование',
    href: '/dependent-integrals/tests'
  },
  {
    title: 'Литература',
    href: '/dependent-integrals/literature'
  },
]
