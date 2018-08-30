import LocalSites from '@/views/LocalSites'
import ConnectWpLib from '@/views/ConnectWpLib'
import AddLocalSite from '@/views/AddLocalSite'

const routes = [
  {
    path: '/',
    redirect: 'local-sites'
  },
  {
    path: '/local-sites',
    name: 'localSites',
    component: LocalSites
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
