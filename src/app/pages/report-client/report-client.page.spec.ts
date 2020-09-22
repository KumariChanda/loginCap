import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportClientPage } from './report-client.page';

describe('ReportClientPage', () => {
  let component: ReportClientPage;
  let fixture: ComponentFixture<ReportClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
