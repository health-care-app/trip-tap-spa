export enum ModuleRoutes {
  Root = '',
  Auth = 'auth',
  Customers = 'customers',
  TripOrganizers = 'trip-organizers',
}

export enum AuthRoutes {
  Root = '',
  SignIn = 'signin',
  SignUp = 'signup',
}

export enum CustomersRoutes {
  Root = '',
  Trips = 'trips',
  Id = ':id',
}

export enum TripOrganizersRoutes {
  Root = '',
  Trips = 'trips',
}
