import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryEffect } from './gallery/gallery.effect';
import { GalleryService } from './gallery/gallery.service';
import { galleryReducer } from './store/gallery.reducer';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([GalleryEffect]),
    StoreModule.forRoot({ gallery: galleryReducer })
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
