import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OurContactsPage } from './our-contacts.page';

describe('OurContactsPage', () => {
  let component: OurContactsPage;
  let fixture: ComponentFixture<OurContactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurContactsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OurContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
