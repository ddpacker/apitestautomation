import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocGridComponent } from './api-doc-grid.component';

describe('ApiDocGridComponent', () => {
  let component: ApiDocGridComponent;
  let fixture: ComponentFixture<ApiDocGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDocGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDocGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
