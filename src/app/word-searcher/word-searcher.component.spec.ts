import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSearcherComponent } from './word-searcher.component';

describe('WordSearcherComponent', () => {
  let component: WordSearcherComponent;
  let fixture: ComponentFixture<WordSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordSearcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
