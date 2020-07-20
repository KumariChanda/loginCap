import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyMessagesPage } from './my-messages.page';

describe('MyMessagesPage', () => {
  let component: MyMessagesPage;
  let fixture: ComponentFixture<MyMessagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMessagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyMessagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
