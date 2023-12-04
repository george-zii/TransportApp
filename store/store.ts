import {Store} from '@tanstack/react-store';
import { Localization } from '../api/models';

export const appLocalization = 
    new Store({state:{ localization: undefined } as {localization: Localization | undefined}})
