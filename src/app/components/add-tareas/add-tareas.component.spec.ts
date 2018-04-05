import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTareasComponent } from './add-tareas.component';

describe('AddTareasComponent', () => {
  let component: AddTareasComponent;
  let fixture: ComponentFixture<AddTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
