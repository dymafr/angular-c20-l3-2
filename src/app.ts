import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";

@Component({
  selector: 'my-app',
  template: `
  <div fxLayout="row"
     class="container"
     style="background-color: grey">
    <div class="block"
         fxFlex
         fxFlexOffset="5"
         fxFlexAlign="flex-start">
    </div>
    <div class="block"
         fxFlex
         fxFlexOffset="5"
         fxFlexAlign="flex-end">
    </div>
    <div class="block"
         fxFlex
         fxFlexOffset="5"
         fxFlexAlign="center">
    </div>
    <div class="block"
         fxFlex
         fxFlexOffset="5"
         fxFlexAlign="baseline">
    </div>
    <div class="block"
         fxFlex
         fxFlexOffset="5"
         fxFlexAlign="stretch">
    </div>

</div>
`,
  styles: [`
    .container {
      border: solid 1px #b6b6b6;
      background: skyblue;
      height: 200px;
      width: 100%;
    }
    
    .block {
      background-color: blue;
      min-height: 50px;
    }`
]
})

export class AppComponent {
 
}

@NgModule({
  imports: [ 
    BrowserModule,
    FlexLayoutModule
  ],
  declarations: [ 
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}