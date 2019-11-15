import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublyLinkedListComponent } from './doubly-linked-list.component';

describe('DoublyLinkedListComponent', () => {
  let component: DoublyLinkedListComponent;
  let fixture: ComponentFixture<DoublyLinkedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoublyLinkedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublyLinkedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
