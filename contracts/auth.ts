declare module '@ioc:Adonis/Addons/Auth' {
    import User from 'App/Models/User'
  
    interface ProvidersList {
      user: {
        implementation: LucidProviderContract<typeof User>
        config: LucidProviderConfig<typeof User>
      }
    }
  
    interface GuardsList {
      api: {
        implementation: OATGuardContract<'user', 'api'>
        client: OATClientContract<'user'>
        config: OATGuardConfig<'user'>
      }
    }
  }
  
  import {
    OATClientContract,
    OATGuardConfig,
    OATGuardContract,
    LucidProviderContract,
    LucidProviderConfig
  } from '@ioc:Adonis/Addons/Auth'  