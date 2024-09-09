import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoVehiclesComponent } from './no-vehicles.component';

describe('NoVehiclesComponent', () => {
  let component: NoVehiclesComponent;
  let fixture: ComponentFixture<NoVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoVehiclesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
