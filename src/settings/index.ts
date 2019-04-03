import { settings as defaultSettings } from './default';
import { settings as developmentSettings } from './development';
import { settings as productionSettings } from './production';
import { settings as stagingSettings } from './staging';
import { settings as testSettings } from './test';

import { ISettings } from '../interfaces';

function getSettings(): ISettings {
  let overrideSettings: ISettings = {};
  switch (process.env.NODE_ENV) {
    case 'production': {
      overrideSettings = productionSettings;
    }
    case 'staging': {
      overrideSettings = stagingSettings;
    }
    case 'test': {
      overrideSettings = testSettings;
    }
    default: {
      overrideSettings = developmentSettings;
    }
  }
  return {
    ...defaultSettings,
    ...overrideSettings
  };
}

export const settings = getSettings();
