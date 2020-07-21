import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeetingsPage } from './seetings.page';

describe('SeetingsPage', () => {
  let component: SeetingsPage;
  let fixture: ComponentFixture<SeetingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeetingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeetingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
