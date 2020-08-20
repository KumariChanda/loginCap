import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FamilyClassPage } from './family-class.page';

describe('FamilyClassPage', () => {
  let component: FamilyClassPage;
  let fixture: ComponentFixture<FamilyClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyClassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FamilyClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
