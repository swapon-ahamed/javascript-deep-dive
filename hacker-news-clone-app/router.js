
const router = new Navigo(null, true, '#');

export default class RouterHandler {
    constructor() {
        this.createRoutes();
    }

    createRoutes() {
        const routes = [
            { path: '/', page: '/ page'},
            { path: '/new', page: 'new page'},
            { path: '/ask', page: 'ask page'},
            { path: '/show', page: 'show page'},
        ];

        routes.forEach( route => {
            router.on(route.path, () => {
                console.log('Page: ',route.page)
            }).resolve();
        })
    }
}