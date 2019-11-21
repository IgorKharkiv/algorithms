import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DijkstrasAlgorithmComponent } from './dijkstras-algorithm.component';

describe('DijkstrasAlgorithmComponent', () => {
  let component: DijkstrasAlgorithmComponent;
  let fixture: ComponentFixture<DijkstrasAlgorithmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DijkstrasAlgorithmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DijkstrasAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
