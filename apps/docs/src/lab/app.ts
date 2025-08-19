import { ServerConnection, ServerManager } from '@difizen/libro-lab';
import { ImageProcessingEnabled } from '@difizen/libro-output';
import {
  ApplicationContribution,
  inject,
  singleton,
  ConfigurationService,
} from '@difizen/mana-app';

@singleton({ contrib: ApplicationContribution })
export class LibroApp implements ApplicationContribution {
  @inject(ServerConnection) serverConnection: ServerConnection;
  @inject(ServerManager) serverManager: ServerManager;
  @inject(ConfigurationService) configurationService: ConfigurationService;

  async onStart() {
    this.serverConnection.updateSettings({
      baseUrl: 'http://localhost:8888/',
      wsUrl: 'ws://localhost:8888/',
    });
    this.serverManager.launch();
    // 测试修改默认配置值
    this.configurationService.set(ImageProcessingEnabled, false); // 禁用图片处理
  }
}
