import { postsRoute } from './posts-route';
import { postDetailsRoute } from './post-details-route';
import MainContent from '../../layout/MainContent.vue';

export const routes = [
    {
        path: '*',
        redirect: 'index/posts',
    },
    {
        path: '/index',
        component: MainContent,
        redirect: 'index/posts',
        children: [
            postsRoute,
            postDetailsRoute
        ]
    }
];