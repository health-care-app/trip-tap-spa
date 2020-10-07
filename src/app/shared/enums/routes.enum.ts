export enum ModuleRoutes {
  Root = '',
  Auth = 'auth',
  Trips = 'trips',
}

export enum AuthRoutes {
  Root = '',
  SignIn = 'signin',
  SignUp = 'signup',
}

export enum TripsRoutes {
  Root = '',
  Id = ':id',
  List = 'list',
  Create = 'create',
}
