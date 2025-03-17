import { lazy } from 'react';
import invariant from 'tiny-invariant';

const Badminton = lazy(() => import('./interests/Badminton'));
const Basketball = lazy(() => import('./interests/Basketball'));
const Football = lazy(() => import('./interests/Football'));
const Golf = lazy(() => import('./interests/Golf'));
const Hiking = lazy(() => import('./interests/Hiking'));
const Hockey = lazy(() => import('./interests/Hockey'));
const Pickleball = lazy(() => import('./interests/Pickleball'));
const Running = lazy(() => import('./interests/Running'));
const Soccer = lazy(() => import('./interests/Soccer'));
const TableTennis = lazy(() => import('./interests/TableTennis'));
const Tennis = lazy(() => import('./interests/Tennis'));

export enum SportsInterestName {
  Badminton = 'badminton',
  Basketball = 'basketball',
  Football = 'football',
  Golf = 'golf',
  Hiking = 'hiking',
  Hockey = 'hockey',
  Pickleball = 'pickleball',
  Running = 'running',
  Soccer = 'soccer',
  TableTennis = 'table_tennis',
  Tennis = 'tennis',
}

export function getSportsInterestByName(name: string) {
  switch (name) {
    case SportsInterestName.Badminton:
      return Badminton;
    case SportsInterestName.Basketball:
      return Basketball;
    case SportsInterestName.Football:
      return Football;
    case SportsInterestName.Golf:
      return Golf;
    case SportsInterestName.Hiking:
      return Hiking;
    case SportsInterestName.Hockey:
      return Hockey;
    case SportsInterestName.Pickleball:
      return Pickleball;
    case SportsInterestName.Running:
      return Running;
    case SportsInterestName.Soccer:
      return Soccer;
    case SportsInterestName.TableTennis:
      return TableTennis;
    case SportsInterestName.Tennis:
      return Tennis;
    default:
      invariant(false, "unrecognized name");
  }
}