import HomePage from '@/pages/HomePage.vue';
import DetailsPage from '@/pages/DetailsPage.vue';

export default [{
        name: "home",
        path: "/",
        component: HomePage
    },
    {
        name: "blog-details",
        path: "/blogs/:id/details",
        component: DetailsPage
    }
]