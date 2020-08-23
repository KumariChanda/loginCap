import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfidentialityPage } from './confidentiality.page';

describe('ConfidentialityPage', () => {
  let component: ConfidentialityPage;
  let fixture: ComponentFixture<ConfidentialityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidentialityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfidentialityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
