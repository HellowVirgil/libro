import { LibroLabModule } from '@difizen/libro-lab';
import { ManaAppPreset, ManaComponents, ManaModule } from '@difizen/mana-app';

import { LibroApp } from './app.js';
import { ImageUploadTestService } from './image-upload-test.js';
import './index.less';

const BaseModule = ManaModule.create().register(LibroApp, ImageUploadTestService);

const App = (): JSX.Element => {
  return (
    <div className="libro-workbench-app">
      <ManaComponents.Application
        key="libro-lab"
        asChild={true}
        modules={[ManaAppPreset, LibroLabModule, BaseModule]}
      />
    </div>
  );
};

export default App;
