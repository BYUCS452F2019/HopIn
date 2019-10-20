import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TotalAppService {
  links = [
    { name: 'My Schedule', link: '/dashboard', icon: 'calendar_today' },
    { name: 'My Groups', link: '/my-groups', icon: 'group' },
  ];
  constructor() {}
}
