import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendFeedbacksPage } from './send-feedbacks.page';

describe('SendFeedbacksPage', () => {
  let component: SendFeedbacksPage;
  let fixture: ComponentFixture<SendFeedbacksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendFeedbacksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendFeedbacksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
