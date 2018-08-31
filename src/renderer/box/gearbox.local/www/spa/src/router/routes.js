import LocalSites from '@/views/LocalSites'
import ConnectWpLib from '@/views/ConnectWpLib'
import AddLocalSite from '@/views/AddLocalSite'

import Processing from '@/components/SetupSites/Processing/Processing'

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
    path: '/processing',
    name: 'processing',
    component: Processing
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default routes
