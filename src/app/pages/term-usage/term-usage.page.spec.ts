import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TermUsagePage } from './term-usage.page';

describe('TermUsagePage', () => {
  let component: TermUsagePage;
  let fixture: ComponentFixture<TermUsagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermUsagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TermUsagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
