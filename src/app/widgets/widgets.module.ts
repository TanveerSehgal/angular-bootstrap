import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HelloWidgetComponent } from './hello.widget.component';

@NgModule({
    imports: [
        NgbModule
    ],
    declarations: [
        HelloWidgetComponent
    ],
    exports: [
        HelloWidgetComponent
    ]
})
export class WidgetsModule {}
