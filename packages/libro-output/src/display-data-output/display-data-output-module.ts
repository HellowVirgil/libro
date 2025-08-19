import { OutputModule } from '@difizen/libro-core';
import { LibroRenderMimeModule } from '@difizen/libro-rendermime';
import { ManaModule } from '@difizen/mana-app';

import { DisplayDataOutputContribution } from './display-data-output-contribution.js';
import { DisplayDataOutputModel } from './display-data-output-model.js';
import { DisplayDataOutputSettingContribution } from './display-data-output-setting-contribution.js';
import { ImageUploadService } from './image-upload-service.js';

export const DisplayDataOutputModule = ManaModule.create()
  .register(DisplayDataOutputModel, DisplayDataOutputContribution, DisplayDataOutputSettingContribution, ImageUploadService)
  .dependOn(OutputModule, LibroRenderMimeModule);
