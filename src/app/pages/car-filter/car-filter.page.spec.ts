import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarFilterPage } from './car-filter.page';

describe('CarFilterPage', () => {
  let component: CarFilterPage;
  let fixture: ComponentFixture<CarFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFilterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
