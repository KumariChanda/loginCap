import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarFleetPage } from './car-fleet.page';

describe('CarFleetPage', () => {
  let component: CarFleetPage;
  let fixture: ComponentFixture<CarFleetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFleetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarFleetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
