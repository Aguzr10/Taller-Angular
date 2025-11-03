import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesTable } from './series-table';

describe('SeriesTable', () => {
  let component: SeriesTable;
  let fixture: ComponentFixture<SeriesTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeriesTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
