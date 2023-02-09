import Home from '../pages/Home/Home';
import Post from '../pages/Post/Post';
import Author from '../pages/Author/Author';

const protectedRoute = [
  { path: '/', component: Home },
  { path: '/post', component: Post },
  { path: '/author', component: Author },
];

export default protectedRoute;
