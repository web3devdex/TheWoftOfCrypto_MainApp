import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { CollapsesComponent } from './views/base/collapses.component';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { Coingecko } from './WoftCrypto/components/Coingecko/coingecko.component';
import { DefilamaComponent } from './WoftCrypto/components/Defilama/defilama.component';
import { DefiPulseComponent } from './WoftCrypto/components/DefiPulse/defipulse.component';
import { MessageComponent } from './WoftCrypto/components/Message/message.component';
import { Tele } from './WoftCrypto/components/Tele/tele.component';
import { TheBlockComponent } from './WoftCrypto/components/TheBlockData/theblock.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [

      // =================================
      {
        path: 'telechatcoinf',
        component: Tele,
        data: {
          title: 'Tele chat CoinF',
          channel: "telechatcoinf"
        }
      },
      {
        path: 'dappradar',
        component: Coingecko,
        data: {
          title: 'DappRadar Gaming NFT',
          channel: "dappradar"
        }
      },
      {
        path: 'defilama',
        component: DefilamaComponent,
        data: {
          title: 'Check TVL Defilama',
          channel: "defilama"
        }
      },
      {
        path: 'theblockdata',
        component: TheBlockComponent,
        data: {
          title: 'Data Onchain',
          channel: "theblockdata"
        }
      },
      {
        path: 'defipulse',
        component: DefiPulseComponent,
        data: {
          title: 'Check TVL ETH',
          channel: "defipulse"
        }
      },
      {
        path: 'coinfdiscordavax',
        component: MessageComponent,
        data: {
          title: 'Discord CoinF - Hệ Avax',
          channel: "coinfdiscordavax"
        }
      },
      {
        path: 'coinfdiscordsol',
        component: MessageComponent,
        data: {
          title: 'Discord CoinF - Hệ Solana',
          channel: "coinfdiscordsol"
        }
      },
      {
        path: 'coinfdiscorddot',
        component: MessageComponent,
        data: {
          title: 'Discord CoinF - Hệ Dot',
          channel: "coinfdiscorddot"
        }
      },
      {
        path: 'coinfdiscordnear',
        component: MessageComponent,
        data: {
          title: 'Discord CoinF - Hệ Near',
          channel: "coinfdiscordnear"
        }
      },
      {
        path: 'coinfdiscordterra',
        component: MessageComponent,
        data: {
          title: 'Discord CoinF - Hệ Terra',
          channel: "coinfdiscordterra"
        }
      },
      {
        path: 'coinfdiscordpolygon',
        component: MessageComponent,
        data: {
          title: 'Discord CoinF - Hệ Polygon',
          channel: "coinfdiscordpolygon"
        }
      },
      {
        path: 'coinfdiscordbsc',
        component: MessageComponent,
        data: {
          title: 'Discord CoinF - Hệ BSC',
          channel: "coinfdiscordbsc"
        }
      },
      {
        path: 'coinfdiscordicp',
        component: MessageComponent,
        data: {
          title: 'Discord CoinF - Hệ ICP',
          channel: "coinfdiscordicp"
        }
      },
      // =================================

      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
