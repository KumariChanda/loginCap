import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrestigePage } from './prestige.page';

describe('PrestigePage', () => {
  let component: PrestigePage;
  let fixture: ComponentFixture<PrestigePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestigePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrestigePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
