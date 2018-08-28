import Home from '@/views/Home'
import ConnectWpLib from '@/views/ConnectWpLib'
import AddLocalSite from '@/views/AddLocalSite'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/connect-wplib',
    name: 'connectWpLib',
    component: ConnectWpLib
  },
  {
    path: '/add-localsite',
    name: 'addLocalSite',
    component: AddLocalSite
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default routes
