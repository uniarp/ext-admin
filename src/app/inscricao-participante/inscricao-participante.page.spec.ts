import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscricaoParticipantePage } from './inscricao-participante.page';

describe('ParticipanteCadastroPage', () => {
  let component: InscricaoParticipantePage;
  let fixture: ComponentFixture<InscricaoParticipantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscricaoParticipantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscricaoParticipantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
