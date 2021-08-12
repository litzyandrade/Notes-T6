import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaNotasComponent } from './tabla-notas.component';

describe('TablaNotasComponent', () => {
  let component: TablaNotasComponent;
  let fixture: ComponentFixture<TablaNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaNotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
