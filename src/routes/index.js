import Home from '../pages/Home/Home';
import Post from '../pages/Post/Post';
import Author from '../pages/Author/Author';
import SecondLayOut from '../components/Layouts/SecondLayout';

const protectedRoute = [
  { path: '/', component: Home },
  { path: '/post', component: Post, layout: SecondLayOut },
  { path: '/author', component: Author, layout: SecondLayOut },
];

export default protectedRoute;
