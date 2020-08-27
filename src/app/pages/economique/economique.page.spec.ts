import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EconomiquePage } from './economique.page';

describe('EconomiquePage', () => {
  let component: EconomiquePage;
  let fixture: ComponentFixture<EconomiquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomiquePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EconomiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
