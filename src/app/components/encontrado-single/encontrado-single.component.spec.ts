import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncontradoSingleComponent } from './encontrado-single.component';

describe('EncontradoSingleComponent', () => {
  let component: EncontradoSingleComponent;
  let fixture: ComponentFixture<EncontradoSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncontradoSingleComponent]
    });
    fixture = TestBed.createComponent(EncontradoSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
