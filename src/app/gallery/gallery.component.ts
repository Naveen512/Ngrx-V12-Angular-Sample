import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GalleryService } from './gallery.service';
import { retrievedGalleryList, invokeGalleryAPI } from '../store/gallery.action';
import {
  uniqueAlbumIds,
  albumCollectionByAlbumId,
} from '../store/gallery.selector';
import { GalleryModel } from './gallery.model';

@Component({
  templateUrl: './gallery.component.html',
  selector: 'gallery',
})
export class GalleryComponent implements OnInit {
  selectedAlbumId = -1;
  albumIds$ = this.store.pipe(select(uniqueAlbumIds));
  allGallery$ = this.store.pipe(
    select(albumCollectionByAlbumId(this.selectedAlbumId))
  );
  constructor(
    private store: Store<{ gallery: GalleryModel[] }>,
    private galleryService: GalleryService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(invokeGalleryAPI());
    // this.galleryService.loadGallery().subscribe((gallery) => {
    //   console.log(gallery);
    //   this.store.dispatch(
    //     retrievedGalleryList({ allGallery: gallery as GalleryModel[] })
    //   );
    // });
  }
  albumChange(event:number) {
    this.allGallery$ = this.store.pipe(select(albumCollectionByAlbumId(event)));
  }
}
