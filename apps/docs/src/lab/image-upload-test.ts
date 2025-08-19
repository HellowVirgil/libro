import { ImageUploadService } from '@difizen/libro-output';
import { ApplicationContribution } from '@difizen/mana-app';
import { inject, singleton } from '@difizen/mana-app';

@singleton({ contrib: ApplicationContribution })
export class ImageUploadTestService implements ApplicationContribution {
  @inject(ImageUploadService) imageUploadService: ImageUploadService;

  async onStart() {
    // 配置测试用的图片上传函数
    this.imageUploadService.setUploadFunction(
      async (base64Data: string, mimeType: string) => {
        console.log('测试图片上传:', { mimeType, dataLength: base64Data.length });

        // 模拟上传过程
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // 返回模拟的上传URL
        return 'https://intranetproxy.alipay.com/skylark/lark/0/2025/png/25157115/1755507065413-d584a1f2-dd93-456c-b6be-4c4e7a84a311.png';
      },
    );

    // 配置回调函数
    this.imageUploadService.setCallbacks({
      onUploadSuccess: (originalData: string, uploadedUrl: string) => {
        console.log('图片上传成功:', {
          originalLength: originalData.length,
          uploadedUrl,
        });
      },
      onUploadError: (error: Error, originalData: string) => {
        console.error('图片上传失败:', {
          error: error.message,
          originalLength: originalData.length,
        });
      },
    });

    console.log('ImageUploadTestService 已初始化');
  }
}
