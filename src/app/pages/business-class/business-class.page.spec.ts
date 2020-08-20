import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusinessClassPage } from './business-class.page';

describe('BusinessClassPage', () => {
  let component: BusinessClassPage;
  let fixture: ComponentFixture<BusinessClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessClassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
