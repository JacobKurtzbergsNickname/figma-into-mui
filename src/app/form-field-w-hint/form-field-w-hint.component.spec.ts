import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldWHintComponent } from './form-field-w-hint.component';

describe('FormFieldWHintComponent', () => {
  let component: FormFieldWHintComponent;
  let fixture: ComponentFixture<FormFieldWHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormFieldWHintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFieldWHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
