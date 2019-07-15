import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiNewDocComponent } from './api-new-doc.component';

describe('ApiNewDocComponent', () => {
  let component: ApiNewDocComponent;
  let fixture: ComponentFixture<ApiNewDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiNewDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiNewDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
