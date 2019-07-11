import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocManagerComponent } from './api-doc-manager.component';

describe('ApiDocManagerComponent', () => {
  let component: ApiDocManagerComponent;
  let fixture: ComponentFixture<ApiDocManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDocManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDocManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
