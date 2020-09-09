import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendReportsPage } from './send-reports.page';

describe('SendReportsPage', () => {
  let component: SendReportsPage;
  let fixture: ComponentFixture<SendReportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendReportsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendReportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
