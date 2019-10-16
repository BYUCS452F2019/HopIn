import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TotalAppService {
  links = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Near Me', link: '/near-me' },
    { name: 'My Groups', link: '/my-groups' },
  ];
  constructor() {}
}
