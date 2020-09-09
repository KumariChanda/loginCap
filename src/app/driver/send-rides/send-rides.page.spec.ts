import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendRidesPage } from './send-rides.page';

describe('SendRidesPage', () => {
  let component: SendRidesPage;
  let fixture: ComponentFixture<SendRidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendRidesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendRidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
