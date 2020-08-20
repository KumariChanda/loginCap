import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuvClassPage } from './suv-class.page';

describe('SuvClassPage', () => {
  let component: SuvClassPage;
  let fixture: ComponentFixture<SuvClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuvClassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuvClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
