import { postsRoute } from './posts-route';
import { postDetailsRoute } from './post-details-route';
import MainContent from '../../layout/MainContent.vue';

export const routes = [
    {
        path: '/index',
        component: MainContent,
        children: [
            postsRoute,
            postDetailsRoute
        ]
    }
];