import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursionsComponentComponent } from './recursions-component.component';

describe('RecursionsComponentComponent', () => {
  let component: RecursionsComponentComponent;
  let fixture: ComponentFixture<RecursionsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursionsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
