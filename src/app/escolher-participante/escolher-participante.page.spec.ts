import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscolherParticipantePage } from './escolher-participante.page';

describe('EscolherParticipantePage', () => {
  let component: EscolherParticipantePage;
  let fixture: ComponentFixture<EscolherParticipantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolherParticipantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscolherParticipantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
