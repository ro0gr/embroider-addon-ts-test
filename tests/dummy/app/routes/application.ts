// @ts-ignore
import Route from '@ember/routing/route';

export default class AppRoute extends Route {
  model() {
    return {
      text: 'I do work',
    }
  }
}
