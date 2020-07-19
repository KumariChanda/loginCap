import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservationPagePage } from './reservation-page.page';

describe('ReservationPagePage', () => {
  let component: ReservationPagePage;
  let fixture: ComponentFixture<ReservationPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
