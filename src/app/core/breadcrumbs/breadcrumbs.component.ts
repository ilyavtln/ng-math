import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter, distinctUntilChanged } from 'rxjs/operators';

interface IBreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'math-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})

export class BreadcrumbsComponent implements OnInit {
  isHomePage: boolean = false;
  public breadcrumbs: IBreadCrumb[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
  }

  ngOnInit() {
    this.checkIfHomePage();

    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd), // Используем тип RouterEvent вместо Event
      distinctUntilChanged(),
    ).subscribe(() => {
      this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    });
  }

  checkIfHomePage(): void {
    this.isHomePage = this.router.url === '/'; // Предполагается, что главная страница имеет путь '/'
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {
    // Проверяем наличие routeConfig и data, чтобы избежать ошибок
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] : '';
    let isClickable = route.routeConfig && route.routeConfig.data && route.routeConfig.data['isClickable'];
    let path = route.routeConfig && route.routeConfig.path ? route.routeConfig.path : '';

    // Проверяем, что path определен, перед тем как использовать его
    if (path) {
      // Проверяем, является ли маршрут динамическим, например, ':id', и заменяем его соответствующим значением из параметров
      const lastRoutePart = path.split('/').pop();
      const isDynamicRoute = lastRoutePart && lastRoutePart.startsWith(':');
      if (isDynamicRoute && !!route.snapshot) {
        const paramName = lastRoutePart.split(':')[1];
        path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
        label = route.snapshot.params[paramName];
      }
    }

    // Строим полный URL для хлебной крошки
    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: IBreadCrumb = {
      label: label || '',
      url: nextUrl,
    };

    // Добавляем хлебную крошку, если у нее есть метка
    const newBreadcrumbs = breadcrumb.label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
    if (route.firstChild) {
      // Рекурсивно продолжаем строить хлебные крошки
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}
