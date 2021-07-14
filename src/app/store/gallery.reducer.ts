import { createReducer, on } from '@ngrx/store';
import { GalleryModel } from '../gallery/gallery.model';
import { retrievedGalleryList } from './gallery.action';

export const initialState: ReadonlyArray<GalleryModel> = [];

const _galleryReducer = createReducer(
  initialState,
  on(retrievedGalleryList, (state, { allGallery }) => {
    return [...allGallery];
  })
);

export function galleryReducer(state: any, action: any) {
  return _galleryReducer(state, action);
}
