import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantencionFormComponent } from './mantencion-form.component';

describe('MantencionFormComponent', () => {
  let component: MantencionFormComponent;
  let fixture: ComponentFixture<MantencionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantencionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantencionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
