import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventoCancelarPage } from './evento-cancelar.page';

describe('EventoCancelarPage', () => {
  let component: EventoCancelarPage;
  let fixture: ComponentFixture<EventoCancelarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoCancelarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventoCancelarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
