import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParticipantePesquisaPage } from './participante-pesquisa.page';

describe('ParticipantePesquisaPage', () => {
  let component: ParticipantePesquisaPage;
  let fixture: ComponentFixture<ParticipantePesquisaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantePesquisaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParticipantePesquisaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
