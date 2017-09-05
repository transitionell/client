import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentLoaderFactory } from '../utils/component-loader';
import { PositioningService } from '../utils/positioning';
import { PopoverConfig } from './popoverConfig';
import { PopoverDirective } from './popoverDirective';
import { PopoverContainerComponent } from './popoverContainerComponent';

@NgModule({
  imports: [CommonModule],
  declarations: [PopoverDirective, PopoverContainerComponent],
  exports: [PopoverDirective],
  entryComponents: [PopoverContainerComponent]
})
export class PopoverModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: PopoverModule,
      providers: [PopoverConfig, ComponentLoaderFactory, PositioningService]
    };
  }
}