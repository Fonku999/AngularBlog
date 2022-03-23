import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePostsComponent } from './detalle-posts.component';

describe('DetallePostsComponent', () => {
  let component: DetallePostsComponent;
  let fixture: ComponentFixture<DetallePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
