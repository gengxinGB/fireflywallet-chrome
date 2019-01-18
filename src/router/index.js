import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Main from '../pages/Main'
import Wallet from '../pages/Wallet'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import mysettings from './mysettings'
import assets from './assets'
import trade from './trade'
import contacts from './contacts'
import addresses from './addresses'
import account from './account'
import dapps from './dapp'
import settings from './settings'

import Picklanguage from '../pages/Picklanguage'
import Guidepage from '../pages/Guidepage'
import Funding from '@/pages/Funding.vue'
import PinLock from '@/pages/PinLock'
// import dapp from './dapp';
import Explorer from '@/pages/explorer.vue'

// import TermsOfService from  '../pages/TermsOfService.vue'
// import ImportAccount from '../pages/ImportAccount.vue'
// import CreateAccountByMnemonic from '../pages/CreateAccountByMnemonic.vue'
// import CreateAccountReady from '../pages/CreateAccountReady.vue'
// import AutoFund from '../pages/AutoFund.vue'
// import AskForFund from '../pages/AskForFund.vue'
// import History from '../pages/History.vue'
// import Transaction from '../pages/Transaction'
// import AutoFundHelp from '../pages/AutoFundHelp.vue'
// import Settings from '../pages/settings/Settings.vue'


Vue.use(Router)




const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      meta: {
        keepAlive: false
      }
    },
    
    // {
    //   path: '/explorer',
    //   name: 'Explorer',
    //   component: Explorer
    // },
    {
      path: '/wallet',
      name: 'Wallet',
      component: Wallet
    },
    {
      path: 'picklanguage',
      name: 'Picklanguage',
      component: Picklanguage
    },
    {
      path: 'guidepage',
      name: 'Guidepage',
      component: Guidepage
    },
    {
      path: '/termsofservice',
      name: 'TermsOfService',
      component: resolve => require(['../pages/TermsOfService.vue'], resolve)
    },
    {
      path: '/importaccount',
      name: 'ImportAccount',
      component: resolve => require(['../pages/ImportAccount.vue'], resolve)
    },
    {
      path: '/createaccount',
      name: 'CreateAccount',
      component: resolve => require(['../pages/CreateAccountByMnemonic.vue'], resolve)
    },
    {
      path: '/createaccountready',
      name: 'CreateAccountReady',
      component: resolve => require(['../pages/CreateAccountReady.vue'], resolve)
    },
    // {
    //   path: '/funding',
    //   name: 'Funding',
    //   component: Funding,
    //   meta: {
    //     keepAlive: false
    //   }
    // },
    // {
    //   path: '/autofund',
    //   name: 'AutoFund',
    //   component: resolve => require(['../pages/AutoFund.vue'], resolve)
    // },
    {
      path: '/askforfund',
      name: 'AskForFund',
      component: resolve => require(['../pages/AskForFund.vue'], resolve)
    },
    {
      path: '/history',
      name: 'History',
      component: resolve => require(['../pages/History.vue'], resolve),
      meta: {
        keepAlive: false
      }
    },
        
    {
      path: '/transaction',
      name: 'Transaction',
      component: resolve => require(['../pages/Transaction'], resolve)
    },
    {
      path: '/pinlock',
      name: 'PinLock',
      component: PinLock,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/autofundhelp',
      name: 'AutoFundHelp',
      component: resolve => require(['../pages/AutoFundHelp.vue'], resolve),
      meta: {
        keepAlive: false,
        allowBack: false
      }
    },
    {
      path: 'settings',
      name: 'Settings',
      component: resolve => require(['../pages/settings/Settings.vue'], resolve)
    },

    mysettings,
    assets,
    trade,
    contacts,
    addresses,
    account,
    // dapps,
    settings,
    
  ]
})

router.beforeEach((to,from,next) => {
  NProgress.start();
  next()
})

router.afterEach((to,from)=>{
  NProgress.done();
})

export default router
