import { Injectable } from '@angular/core';
import { GitSearch } from './git-search';

@Injectable()
export class GitSearchService {
  //set up a cache for our service the first time it is injected.
  cachedValues: Array<{ [query: string]: GitSearch }> = [];
  constructor() { }

}
