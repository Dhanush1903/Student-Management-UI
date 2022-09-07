import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClassComponent } from './search-class.component';

describe('SearchClassComponent', () => {
  let component: SearchClassComponent;
  let fixture: ComponentFixture<SearchClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
